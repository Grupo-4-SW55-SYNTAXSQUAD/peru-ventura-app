<template>
  <!-- Componente de opciones (falta crear) -->
  <!-- <CarouselComponent /> -->
  <section class="activities py-5">
    <CheckListComponent />
    <DataListComponent />
  </section>
</template>

<script>
import DataListComponent from '../components/datalist.component.vue';
import CheckListComponent from '../components/checklist.component.vue';

export default {
  components: {
    DataListComponent,
    CheckListComponent,
  },
};
</script>

<style scoped>
.activities {
  display: flex;
  justify-content: space-around;
}
</style>
