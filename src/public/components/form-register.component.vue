<template>
  <form
    @submit.prevent="handleSubmit"
    class="h-dvh w-dvw absolute top-0 left-0 flex justify-center items-center bg-login"
  >
    <div
      class="bg-white p-9 rounded-xl backdrop-blur-xl flex flex-col gap-6 shadow-xl"
    >
      <div class="text-center">
        <span
          class="bg-login inline-flex justify-center items-center rounded-full p-4"
        >
          <i class="pi pi-user text-4xl text-black" />
        </span>
      </div>

      <div>
        <InputGroup class="border-2 rounded-md">
          <InputGroupAddon class="p-2 border-r-2">
            <i class="pi pi-user"></i>
          </InputGroupAddon>
          <InputText
            v-model="name"
            placeholder="Nombre"
            class="py-2 px-3"
            @input="validateName"
          />
        </InputGroup>
        <span v-if="error.name" class="text-red-500">{{ error.name }}</span>
      </div>

      <div>
        <InputGroup class="border-2 rounded-md">
          <InputGroupAddon class="p-2 border-r-2">
            <i class="pi pi-envelope"></i>
          </InputGroupAddon>
          <InputText
            v-model="email"
            placeholder="Email"
            class="py-2 px-3"
            @input="validateEmail"
          />
        </InputGroup>
        <span v-if="error.email" class="text-red-500">{{ error.email }}</span>
      </div>

      <div>
        <InputGroup class="border-2 rounded-md">
          <InputGroupAddon class="p-2 border-r-2">
            <i class="pi pi-phone"></i>
          </InputGroupAddon>
          <InputText
            v-model="phone"
            placeholder="Teléfono"
            class="py-2 px-3"
            @input="validatePhone"
          />
        </InputGroup>
        <span v-if="error.phone" class="text-red-500">{{ error.phone }}</span>
      </div>

      <div>
        <InputGroup class="border-2 rounded-md">
          <InputGroupAddon class="p-2 border-r-2">
            <i class="pi pi-lock"></i>
          </InputGroupAddon>
          <Password
            v-model="password"
            placeholder="Contraseña"
            class="py-2 px-3"
            :feedback="false"
            toggleMask
            @input="validatePassword"
          />
        </InputGroup>
        <span v-if="error.password" class="text-red-500">{{
          error.password
        }}</span>
      </div>

      <div>
        <InputGroup class="border-2 rounded-md">
          <InputGroupAddon class="p-2 border-r-2">
            <i class="pi pi-lock"></i>
          </InputGroupAddon>
          <Password
            v-model="confirmPassword"
            placeholder="Repetir Contraseña"
            class="py-2 px-3"
            :feedback="false"
            toggleMask
            @input="validateConfirmPassword"
          />
        </InputGroup>
        <span v-if="error.confirmPassword" class="text-red-500">{{
          error.confirmPassword
        }}</span>
      </div>

      <button type="submit" class="btn-primary" :disabled="isSubmitting">
        Register
      </button>
      <router-link to="/login" class="btn-secondary"> Login </router-link>
    </div>
    <!-- <Toast ref="toast" /> -->
  </form>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { BaseService } from '../../shared/services/base.service';

const service = new BaseService();

const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const confirmPassword = ref('');
const toast = useToast();
const router = useRouter();
const isSubmitting = ref(false);

const error = reactive({
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
});

const handleSubmit = async () => {
  validateForm();
  if (isValidForm()) {
    isSubmitting.value = true;
    try {
      const user = {
        name: name.value,
        email: email.value,
        password: password.value,
        phone: phone.value,
        userType: 'Tourist',
      };
      await service.createUser(user);
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Registration successful!',
        life: 3000,
      });
      setTimeout(() => {
        router.push('/home');
      }, 1000);
    } catch (error) {
      console.error('Error creating user:', error);
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error creating user. Please try again.',
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
  validateName();
  validateEmail();
  validatePhone();
  validatePassword();
  validateConfirmPassword();
};

const isValidForm = () => {
  return (
    !error.name &&
    !error.email &&
    !error.phone &&
    !error.password &&
    !error.confirmPassword
  );
};

const validateName = () => {
  error.name = name.value ? '' : 'Please enter your name';
};

const validateEmail = () => {
  error.email = email.value ? '' : 'Please enter your email';
};

const validatePhone = () => {
  error.phone = phone.value ? '' : 'Please enter your phone number';
};

const validatePassword = () => {
  if (!password.value) {
    error.password = 'Please enter your password';
  } else if (password.value.length < 8) {
    error.password = 'Password must be at least 8 characters long';
  } else {
    error.password = '';
  }
};

const validateConfirmPassword = () => {
  if (!confirmPassword.value) {
    error.confirmPassword = 'Please confirm your password';
  } else if (confirmPassword.value !== password.value) {
    error.confirmPassword = 'Passwords do not match';
  } else {
    error.confirmPassword = '';
  }
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
  background-color: var(btn-primary);
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-secondary {
  background-color: var(btn-secondary);
  color: white;
}

.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}
</style>
