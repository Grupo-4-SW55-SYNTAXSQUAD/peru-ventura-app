<template>
  <div class="card flex justify-content-center">
    <div class="flex flex-column gap-3">
      <div
        v-for="destination in destinations"
        :key="destination.key"
        class="flex align-items-center gap-2"
      >
        <Checkbox
          v-model="selectedDestinations"
          :inputId="destination.key"
          name="destination"
          :value="destination.name"
        />
        <label :for="destination.key">{{ destination.name }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const destinations = ref([
  { name: 'Lima', key: 'A' },
  { name: 'Cajamarca', key: 'M' },
  { name: 'Cuzco', key: 'P' },
  { name: 'Amazonas', key: 'R' },
  { name: 'Arequipa', key: 'Q' },
  { name: 'Puno', key: 'U' },
  { name: 'Ica', key: 'I' },
  { name: 'Junin', key: 'J' },
]);
const selectedDestinations = ref([]);
</script>

<style>
.p-checkbox-box {
  background-color: #191919;
}
</style>
