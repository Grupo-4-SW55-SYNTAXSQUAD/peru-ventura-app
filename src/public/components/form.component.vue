<template>
  <form
    @submit.prevent="handleSubmit"
    class="h-dvh w-dvw absolute top-0 left-0 flex justify-center items-center bg-login"
  >
    <div class="flex flex-col md:flex-col sm:flex-col gap-3 rounded-md p-5">
      <div class="flex justify-center items-center">
        <h2 class="text-3xl">Login</h2>
      </div>
      <InputGroup class="border-2 rounded-md">
        <InputGroupAddon class="p-2 border-r-2">
          <i class="pi pi-envelope"></i>
        </InputGroupAddon>
        <InputText v-model="email" placeholder="Email" class="p-2" />
      </InputGroup>
      <span v-if="error.email" class="text-red-500">{{ error.email }}</span>
      <InputGroup class="border-2 rounded-md">
        <InputGroupAddon class="p-2 border-r-2">
          <i class="pi pi-lock"></i>
        </InputGroupAddon>
        <Password
          v-model="password"
          placeholder="Password"
          class="p-2 card"
          :feedback="false"
          toggleMask
        />
      </InputGroup>
      <span v-if="error.password" class="text-red-500">{{
        error.password
      }}</span>
      <button type="submit" class="btn-primary" :disabled="isSubmitting">
        Login
      </button>
      <router-link to="/register" class="btn-secondary">
        Registrate
      </router-link>
    </div>
  </form>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { BaseService } from '../../shared/services/base.service';

const service = new BaseService();
const email = ref('');
const password = ref('');
const toast = useToast();
const router = useRouter();
const isSubmitting = ref(false);

const error = reactive({
  email: '',
  password: '',
});

const handleSubmit = async () => {
  if (validateForm()) {
    isSubmitting.value = true;
    try {
      const response = await service.getAllUsers();
      const users = response.data;
      const user = users.find(
        (u) => u.email === email.value && u.password === password.value
      );

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        toast.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login successful!',
          life: 3000,
        });
        setTimeout(() => {
          router.push('/home');
        }, 1000);
      } else {
        toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid email or password',
          life: 3000,
        });
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error logging in. Please try again.',
        life: 3000,
      });
    } finally {
      isSubmitting.value = false;
    }
  } else {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please fill in all fields correctly.',
      life: 3000,
    });
  }
};

const validateForm = () => {
  let isValid = true;

  if (email.value === '') {
    error.email = 'Please enter your email';
    isValid = false;
  } else if (!validateEmail(email.value)) {
    error.email = 'Please enter a valid email';
    isValid = false;
  } else {
    error.email = '';
  }

  if (password.value === '') {
    error.password = 'Please enter your password';
    isValid = false;
  } else if (password.value.length < 8) {
    error.password = 'Password must be at least 8 characters long';
    isValid = false;
  } else {
    error.password = '';
  }

  return isValid;
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
  &:hover {
    background-color: var(--color-secondary-dark);
    color: var(--kt-black);
  }
}

.btn-secondary {
  background-color: var(--color-secondary);
  color: white;
  &:hover {
    background-color: var(--color-secondary-dark);
    color: var(--kt-black);
  }
}

.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}
</style>
