<template>
  <div v-if="activity" class="flex flex-col items-center gap-4">
    <img
      v-if="activity.comunidad"
      :alt="comunidadNombre"
      :src="activity.comunidad.imagenUrl"
    />
    <Card :title="activity.name">
      <template #content>
        <p class="m-0">{{ activity.description }}</p>
        <p class="m-0">
          Locación: {{ activity.location || 'No especificada' }}
        </p>
        <p class="m-0">Horario: {{ activity.schedule || 'No especificado' }}</p>
        <p class="m-0">
          Máx. Capacidad: {{ activity.maxPeople || 'No especificada' }}
        </p>
        <p class="m-0">Costo: {{ activity.cost || 'Gratis' }}</p>
        <p class="m-0">Categoría: {{ categoriaNombre }}</p>
        <p class="m-0">Comunidad: {{ comunidadNombre }}</p>
        <p class="m-0">Cultura: {{ culturaNombre }}</p>
      </template>
      <template #footer>
        <div class="flex flex-col gap-2">
          <h3 class="font-semibold">Datos del Dueño/a:</h3>
          <p class="m-0">
            Nombre: {{ activity.usuario?.nombre || 'No disponible' }}
          </p>
          <p class="m-0">
            Email: {{ activity.usuario?.correoElectronico || 'No disponible' }}
          </p>
          <p class="m-0">
            Locación: {{ activity.usuario?.ubicacion || 'No disponible' }}
          </p>
        </div>
      </template>
    </Card>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
  computed: {
    comunidadNombre() {
      return this.activity.comunidad?.nombre || 'Sin comunidad';
    },
    categoriaNombre() {
      return this.activity.category?.typeName || 'Sin categoría';
    },
    culturaNombre() {
      return this.activity.comunidad?.cultura || 'Sin cultura';
    },
  },
  mounted() {
    console.log(this.activity);
  },
};
</script>
