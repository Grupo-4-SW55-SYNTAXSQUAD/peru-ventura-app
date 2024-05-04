<template>
  <section class="destinations py-5">
    <CheckListComponent />
    <ListComponent />
  </section>
</template>

<script>
import CheckListComponent from '../components/checklist.component.vue';
import ListComponent from '../components/list.component.vue';
export default {
  components: {
    CheckListComponent,
    ListComponent,
  },
};
</script>
<style scoped>
.destinations {
  display: flex;
  justify-content: space-around;
}
</style>
