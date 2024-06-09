<script>
import cardPromotionDetailComponent from "../components/card-promotion-detail.vue";

export default {
  components: {
    cardPromotionDetailComponent,
  },
  data() {
    return {
      promotionId: String, // Se inicializa promotionId como una cadena vacía
    };
  },
  created() {
    this.promotionId = this.$route.params.id; // Se obtiene el promotionId de $route.params
    console.log('Promotion ID:', this.promotionId);
  },
};
</script>

<template>
  <card-promotion-detail-component :promotionId="promotionId"/> <!-- Se pasa promotionId como prop -->
</template>
