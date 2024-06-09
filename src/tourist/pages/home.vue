<template class="section">
  <HeroComponent />
  <SearchComponent />
  <h2 class="text-3xl text-center py-3">Destinos mejor calificados</h2>
  <CarouselComponent />
</template>
<script>
import HeroComponent from '../components/hero.component.vue';
import SearchComponent from '../components/search.component.vue';
import CarouselComponent from '../components/carousel.component.vue';

export default {
  components: {
    CarouselComponent,
    SearchComponent,
    HeroComponent,
  },
};
</script>
