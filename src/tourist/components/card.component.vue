<template>
  <Card style="width: 25rem; overflow: hidden" class="my-4">
    <template #header>
      <img :alt="owner.nameAgency" :src="owner.imageUrl" />
    </template>
    <template #title>{{ owner.nameActivity }}</template>
    <template #subtitle>{{ owner.nameAgency }}</template>
    <template #content>
      <p class="m-0">{{ owner.description }}</p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <router-link
          :to="'/' + owner.id"
          class="w-full bg-primary py-2 text-center"
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
    owner: Object,
  },
};
</script>
