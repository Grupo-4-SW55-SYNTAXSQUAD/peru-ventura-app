<template>
  <div v-if="destinationTrip" class="destination-detail">
    <h1>{{ destinationTrip.name }}</h1>
    <img
      :alt="destinationTrip.name"
      :src="destinationTrip.imageUrl"
      v-if="destinationTrip.imageUrl"
    />
    <p>{{ destinationTrip.description }}</p>
    <p>Locación: {{ destinationTrip.location }}</p>

    <h2>Actividad</h2>
    <p>{{ destinationTrip.activity?.name || 'Sin nombre de actividad' }}</p>
    <p>
      {{
        destinationTrip.activity?.description || 'Sin descripción de actividad'
      }}
    </p>
    <p>
      Horario: {{ destinationTrip.activity?.schedule || 'No especificado' }}
    </p>
    <p>
      Máx. Capacidad:
      {{ destinationTrip.activity?.maxPeople || 'No especificada' }}
    </p>
    <p>Costo: {{ destinationTrip.activity?.cost || 'Gratis' }}</p>
    <p>
      Categoría:
      {{ destinationTrip.activity?.category?.typeName || 'Sin categoría' }}
    </p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { BaseService } from '../../shared/services/base.service';

export default {
  data() {
    return {
      destinationTrip: null,
      error: null,
    };
  },
  created() {
    this.fetchDestinationTrip();
  },
  methods: {
    async fetchDestinationTrip() {
      try {
        const service = new BaseService();
        const response = await service.getDestinationTripById(
          this.$route.params.id
        );
        this.destinationTrip = response.data;
      } catch (error) {
        console.error('Error fetching destination trip:', error);
        this.error =
          'Error al cargar el viaje de destino. Por favor, intenta nuevamente más tarde.';
      }
    },
  },
};
</script>

<style scoped>
.destination-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.destination-detail h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.destination-detail img {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

.destination-detail p {
  margin-bottom: 0.5rem;
}

.back-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}
</style>
