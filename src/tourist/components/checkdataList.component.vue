<template>
  <div class="flex justify-content-center h-fit">
    <div
      class="flex flex-col items-baseline justify-center gap-3 p-checkbox-box text-white rounded-md"
    >
      <div
        v-for="activity in activities"
        :key="activity.id"
        class="flex align-items-center gap-2 px-8 py-4"
      >
        <Checkbox
          v-model="selectedActivities"
          :inputId="activity.id"
          name="activity"
          :value="activity"
        />
        <label :for="activity.id">{{ activity.name }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { BaseService } from '../../shared/services/base.service';

const selectedActivities = ref([]);
const activities = ref([]);
const emit = defineEmits(['update:selectedActivities']);

const fetchActivities = async () => {
  const service = new BaseService();
  try {
    const response = await service.getAllActivities();
    activities.value = response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
  }
};

onMounted(fetchActivities);

watch(selectedActivities, (newVal) => {
  emit('update:selectedActivities', newVal);
});
</script>

<style scoped>
.p-checkbox-box {
  background-color: #191919;
}
</style>
