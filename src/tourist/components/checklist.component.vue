<template>
  <div class="checklist flex justify-content-center h-fit">
    <div
      class="flex flex-col items-baseline justify-center gap-3 p-checkbox-box text-white rounded-md"
    >
      <div
        v-for="destination in destinations"
        :key="destination.id"
        class="flex align-items-center gap-2 px-8 py-4"
      >
        <Checkbox
          v-model="selectedDestinations"
          :inputId="destination.id"
          name="destination"
          :value="destination.name"
        />
        <label :for="destination.id">{{ destination.name }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { BaseService } from '../../shared/services/base.service';

const selectedDestinations = ref([]);
const destinations = ref([]);
const emit = defineEmits(['update:selectedDestinations']);

const fetchDestinations = async () => {
  const service = new BaseService();
  try {
    const response = await service.getAllDestinationTrips();
    destinations.value = response.data;
  } catch (error) {
    console.error('Error al obtener los destinos:', error);
  }
};

onMounted(fetchDestinations);

watch(selectedDestinations, (newVal) => {
  emit('update:selectedDestinations', newVal);
});
</script>

<style scoped>
.p-checkbox-box {
  background-color: #191919;
}
.checklist {
  max-width: 300px;
  width: 100%;
}
</style>
