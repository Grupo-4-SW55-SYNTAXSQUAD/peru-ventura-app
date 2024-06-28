<template>
  <section class="destinations py-5">
    <CheckListComponent
      @update:selectedDestinations="updateSelectedDestinations"
    />
    <ListComponent :selectedDestinations="selectedDestinations" />
  </section>
</template>

<script>
import { BaseService } from '../../shared/services/base.service';
import CheckListComponent from '../components/checklist.component.vue';
import ListComponent from '../components/list.component.vue';

export default {
  components: {
    CheckListComponent,
    ListComponent,
  },
  data() {
    return {
      selectedDestinations: [],
      destinationTrips: [],
      error: null,
    };
  },
  created() {
    this.fetchDestinationTrips();
  },
  methods: {
    updateSelectedDestinations(destinations) {
      this.selectedDestinations = destinations;
    },
    async fetchDestinationTrips() {
      try {
        const service = new BaseService();
        const response = await service.getAllDestinationTrips();
        this.destinationTrips = response.data;
      } catch (error) {
        console.error('Error fetching destination trips:', error);
        this.error =
          'Error al cargar los viajes de destino. Por favor, intenta nuevamente más tarde.';
      }
    },
  },
};
</script>

<style scoped>
.destinations {
  display: flex;
  justify-content: space-around;
}

@media (max-width: 798px) {
  .destinations {
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
