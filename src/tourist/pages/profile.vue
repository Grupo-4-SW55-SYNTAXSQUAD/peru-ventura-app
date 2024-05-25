<template>
  <section class="flex items-center justify-center">
    <Card v-if="tourist" style="width: 25rem; overflow: hidden">
      <template #header>
        <img class="w-full" :alt="tourist.name" :src="tourist.avatar" />
      </template>
      <template #title>{{ tourist.name }}</template>
      <template #content>
        <p class="m-0">Age: {{ tourist.age }}</p>
        <p>Email: {{ tourist.email }}</p>
        <p>Phone: {{ tourist.phone }}</p>
        <p>Birthdate: {{ tourist.birthday }}</p>
        <p>Country: {{ tourist.country }}</p>
      </template>
      <!-- Añadimos un botón para la funcionalidad de promoción del taller -->
      <template #footer>
        <Button @click="promoteWorkshop">Promote Workshop</Button>
      </template>
    </Card>
  </section>
</template>

<script>
import { BaseService } from '../../shared/services/base.service';

const service = new BaseService();

export default {
  components: {},
  props: {
    touristId: String,
  },
  data() {
    return {
      tourist: null,
    };
  },
  created() {
    // Genera un ID aleatorio entre 1 y 20
    const localTouristId = Math.floor(Math.random() * 20) + 1;
    service.getTouristById(localTouristId).then((response) => {
      this.tourist = response.data;
    });
  },
  methods: {
    // Método para promocionar el taller
    promoteWorkshop() {
      console.log("Workshop promotion initiated!");
    },
  },
};
</script>
