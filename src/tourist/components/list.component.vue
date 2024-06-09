<template>
  <section class="listCardsDestinations">
    <CardComponent v-for="owner in owners" :key="owner.id" :owner="owner" />
  </section>
</template>

<style scoped>
.listCardsDestinations{
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Establece dos columnas de igual tamaño */
  gap: 2rem; /* Añadir un espacio entre los elementos si es necesario */
}

</style>

<script>
import CardComponent from './card.component.vue';
import { BaseService } from '../../shared/services/base.service';

const service = new BaseService();

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      owners: [],
    };
  },
  created() {
    service.getAllOwners().then((response) => {
      console.log(response.data);
      this.owners = response.data;
    });
  },
};
</script>
