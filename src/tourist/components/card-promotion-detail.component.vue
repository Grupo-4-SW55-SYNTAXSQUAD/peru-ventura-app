<script>
import {BaseService} from '../../shared/services/base.service.js';

export default {
  name: "PromotionDetail",
  props: {
    promotionId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      promotion: null,
      isLoading: true,
      service: new BaseService(),

    };
  },
  created() {
    this.fetchPromotionDetails();
  },
  methods: {
    async fetchPromotionDetails() {
      try {
        const response = await this.service.getPromotionsById(this.promotionId);
        this.promotion = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error('Failed to fetch promotion details:', error);
        this.isLoading = false;
      }
    }
  }
};
</script>

<template>
  <div v-if="!isLoading">
    <Card v-if="promotion" class="promotion-detail-card">
      <template #title>
        <h2>{{ promotion.name }}</h2>
      </template>
      <template #content>
        <div class="promotion-details">
          <p><strong>Lugar:</strong> {{ promotion.location }}</p>
          <p><strong>Horario:</strong> {{ promotion.start_time }}</p>
          <p><strong>Oferta:</strong> {{ promotion.offer }}</p>
          <p><strong>Precio:</strong> {{ promotion.price }}</p>
        </div>
      </template>
    </Card>
    <div v-else>
      <p>No se encontró la promoción.</p>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>


<style scoped>
.promotion-detail-card {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid black;
}

.promotion-details p {
  margin: 10px 0;
}
</style>
