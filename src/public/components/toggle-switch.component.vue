<template>
  <InputSwitch v-model="checked" :pt="{ slider: 'my-switch-slider' }" />
</template>

<script>
import { ref } from 'vue';

const checked = ref(false);
</script>

<style>
.my-switch-slider {
  border-radius: 0;
}

.my-switch-slider:before {
  border-radius: 0;
}
</style>
