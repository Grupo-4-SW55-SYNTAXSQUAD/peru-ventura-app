<template>
  <div v-if="activity" class="flex flex-col items-center gap-4">
    <!-- Muestra la imagen de la comunidad si existe -->
    <img
      v-if="activity.comunidad"
      :alt="`Imagen de la comunidad ${activity.comunidad.nombre}`"
      :src="activity.comunidad.imagenUrl"
      class="comunidad-imagen"
    />
    <!-- Muestra el detalle de la actividad si no hay imagen de comunidad -->
    <CardDetail v-else :activity="activity" />
  </div>
  <!-- Muestra un mensaje de error si existe, de lo contrario muestra "Cargando..." -->
  <div v-else-if="error">
    <p>{{ error }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { BaseService } from '../../shared/services/base.service';
import CardDetail from '../components/card-detail.component.vue';

export default {
  components: {
    CardDetail,
  },
  data() {
    return {
      activity: null,
      error: null,
    };
  },
  created() {
    this.fetchActivity();
  },
  methods: {
    async fetchActivity() {
      try {
        const service = new BaseService();
        const response = await service.getActivityById(this.$route.params.id);
        this.activity = response.data;
      } catch (error) {
        console.error('Error fetching activity:', error);
        this.error =
          'Error al cargar la actividad. Por favor, intenta nuevamente más tarde.';
      }
    },
  },
};
</script>
