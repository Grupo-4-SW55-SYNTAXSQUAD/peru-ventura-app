<template>
  <div>
    <CardComponent
      v-for="destinationTrip in filteredDestinationTrips"
      :key="destinationTrip.id"
      :destinationTrip="destinationTrip"
    />
  </div>
</template>

<script>
import { BaseService } from '../../shared/services/base.service';
import CardComponent from './card.component.vue';

export default {
  components: {
    CardComponent,
  },
  props: {
    selectedDestinations: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      destinationTrips: [],
    };
  },
  created() {
    this.fetchDestinationTrips();
  },
  methods: {
    async fetchDestinationTrips() {
      const service = new BaseService();
      try {
        const response = await service.getAllDestinationTrips();
        this.destinationTrips = response.data;
      } catch (error) {
        console.error('Error al obtener los viajes de destino:', error);
      }
    },
  },
  computed: {
    filteredDestinationTrips() {
      if (this.selectedDestinations.length === 0) {
        return this.destinationTrips;
      }
      return this.destinationTrips.filter((trip) =>
        this.selectedDestinations.includes(trip.name)
      );
    },
  },
};
</script>
