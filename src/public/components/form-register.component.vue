<template>
  <form
    @submit.prevent="handleSubmit"
    class="h-dvh z-10 w-dvw absolute top-0 flex justify-center items-center bg-login"
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
            v-model="username"
            placeholder="Nombre de Usuario"
            class="py-2 px-3"
            @input="validateUsername"
          />
        </InputGroup>
        <span v-if="error.username" class="text-red-500">{{
          error.username
        }}</span>
      </div>

      <div>
        <InputGroup class="border-2 rounded-md">
          <InputGroupAddon class="p-2 border-r-2">
            <i class="pi pi-globe"></i>
          </InputGroupAddon>
          <InputText
            v-model="country"
            placeholder="Pais"
            class="py-2 px-3"
            @input="validateCountry"
          />
        </InputGroup>
        <span v-if="error.country" class="text-red-500">{{
          error.country
        }}</span>
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

      <button type="submit" class="btn-primary">Register</button>
      <router-link to="/login" class="btn-secondary"> Login </router-link>
    </div>
    <Toast ref="toast" />
  </form>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const country = ref('');
const password = ref('');
const confirmPassword = ref('');
const toast = useToast();
const router = useRouter();

const error = reactive({
  username: '',
  country: '',
  password: '',
  confirmPassword: '',
});

const handleSubmit = () => {
  validateForm();
  if (isValidForm()) {
    console.log('Username:', username.value);
    console.log('Country:', country.value);
    console.log('Password:', password.value);
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Registration successful!',
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
  validateUsername();
  validateCountry();
  validatePassword();
  validateConfirmPassword();
};

const isValidForm = () => {
  return (
    !error.username &&
    !error.country &&
    !error.password &&
    !error.confirmPassword
  );
};

const validateUsername = () => {
  error.username = username.value ? '' : 'Please enter your username';
};

const validateCountry = () => {
  error.country = country.value ? '' : 'Please enter your country';
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
