<template>
  <Card style="width: 25rem; overflow: hidden" class="my-4">
    <template #header>
      <img :src="activity.imageUrl" :alt="activity.name" />
    </template>
    <template #title>{{ activity.name }}</template>
    <template #subtitle>{{ activity.category.typeName }}</template>
    <template #content>
      <p class="m-0">{{ activity.description }}</p>
      <p class="m-0">Horario: {{ activity.schedule }}</p>
      <p class="m-0">Máximo de personas: {{ activity.maxPeople }}</p>
      <p class="m-0">Costo: ${{ activity.cost }}</p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <router-link
          :to="'/activity/' + activity.activityId"
          class="w-full bg-primary py-2 text-center text-white rounded-lg"
        >
          Ver Detalles
        </router-link>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  activity: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Estilos específicos del componente */
</style>
