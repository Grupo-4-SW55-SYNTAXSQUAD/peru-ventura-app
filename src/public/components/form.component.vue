<template>
  <form
    @submit.prevent="handleSubmit"
    class="h-dvh z-10 w-dvw absolute top-0 flex justify-center items-center bg-login"
  >
    <div class="card flex flex-column md:flex-col gap-3 rounded-md p-5">
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
          class="p-2"
          :feedback="false"
          toggleMask
        />
      </InputGroup>
      <span v-if="error.password" class="text-red-500">{{
        error.password
      }}</span>
      <button type="submit" class="btn-primary">Login</button>
      <router-link to="/register" class="btn-secondary">
        Registrate
      </router-link>
    </div>
    <Toast ref="toast" />
  </form>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const toast = useToast();
const router = useRouter();

const error = reactive({
  email: '',
  password: '',
});

const handleSubmit = () => {
  if (validateForm()) {
    console.log('Email:', email.value);
    console.log('Password:', password.value);
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
