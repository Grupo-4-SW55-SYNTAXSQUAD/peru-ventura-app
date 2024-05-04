<template>
  <form
    :class="[
      'min-h-screen p-8 flex items-center justify-center transition-all duration-200',
      gradient,
      'p-screen',
    ]"
  >
    <div
      class="fixed w-full top-0 left-0 flex items-center justify-end gap-3 p-8"
    ></div>

    <div
      class="bg-white/10 p-9 rounded-xl backdrop-blur-xl flex flex-col gap-6 shadow-xl"
    >
      <div class="text-center">
        <span
          class="bg-white/10 inline-flex justify-center items-center rounded-full p-4"
        >
          <i class="pi pi-user text-4xl text-white" />
        </span>
      </div>
      <InputText class="py-2 px-3 rounded-full" placeholder="Username" />
      <InputText class="py-2 px-3 rounded-full" placeholder="Password" />
      <router-link
        to="/home"
        class="bg-black/10 hover:bg-black/20 border-1 text-center px-3 py-2 text-white transition-colors duration-300 shadow-2 rounded-full focus:outline-0 focus:bg-black/30"
      >
        Login
      </router-link>
    </div>
  </form>
</template>

<style>
.p-screen {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
</style>

<script setup>
import { ref } from 'vue';

const gradient = ref(
  'bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-400 to-purple-900'
);
</script>
