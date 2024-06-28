<template>
  <Card style="width: 25rem; overflow: hidden" class="my-4">
    <template #header>
      <img
        :alt="destinationTrip.name || 'No disponible'"
        :src="destinationTrip.imageUrl || ''"
      />
    </template>
    <template #title>{{ destinationTrip.activity?.name || 'Sin nombre de actividad' }}</template>
    <template #subtitle">{{ destinationTrip.name || 'Sin nombre de destino' }}</template>
    <template #content>
      <p class="m-0">Categoría: {{ destinationTrip.activity?.category?.typeName || 'Sin categoría' }}</p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <router-link
          :to="'/destinations/' + destinationTrip.destinationTripId"
          class="flex-auto md:flex-initial white-space-nowrap p-2 bg-primary bg-black text-white text-center rounded-lg"
        >
          Ver Detalles
        </router-link>
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  props: {
    destinationTrip: {
      type: Object,
      required: true,
    },
  },
};
</script>
