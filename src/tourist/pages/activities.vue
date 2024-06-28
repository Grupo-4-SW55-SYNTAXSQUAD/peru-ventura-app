<template>
  <section class="activities py-5">
    <CheckListDatalistComponent
      @update:selectedActivities="updateSelectedActivities"
    />
    <DataListComponent :selectedActivities="selectedActivities" />
  </section>
</template>

<script>
import CheckListDatalistComponent from '../components/checkdataList.component.vue';
import DataListComponent from '../components/datalist.component.vue';

export default {
  components: {
    DataListComponent,
    CheckListDatalistComponent,
  },
  data() {
    return {
      selectedActivities: [],
    };
  },
  methods: {
    updateSelectedActivities(activities) {
      this.selectedActivities = activities;
    },
  },
};
</script>

<style scoped>
.activities {
  display: flex;
  justify-content: space-around;
}
@media (max-width: 798px) {
  .activities {
    flex-direction: column;
    align-items: center;
  }
}
</style>
