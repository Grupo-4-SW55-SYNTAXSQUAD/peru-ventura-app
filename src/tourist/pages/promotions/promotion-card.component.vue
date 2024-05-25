<template>
  <div class="promotion-cards">
    <Card class="promotion-card" v-if="promotion">
      <template #title>
        <p>{{ promotion.name }}</p>
      </template>
      <template #content>
        <div class="promotion-details">
          <div class="game-info">
            <div>
              <img src="../../../assets/images/promotion.png" />
            </div>
            <div class="info-text">
              <p><strong>Place:</strong> {{ promotion.location }}</p>
              <p><strong>Time:</strong>{{promotion.start_time }}</p>
              <p><strong>Offer:</strong> {{ promotion.offer }}</p>
            </div>
          </div>
          <div class="promotion-actions">
            <router-link to="/3" class="bg-primary p-2">
              Ver Detalles
            </router-link>
            <div class="price-box">
              <p class="price-text">$99</p>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.promotion-cards {
  display: flex;
  justify-content: center;
}

.promotion-card {
  max-width: 800px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid black; /* Añade un contorno negro a las tarjetas */
}

.game-info {
  display: flex;
  align-items: center;
}

.game-info img {
  max-width: 550px; /* Ajusta el tamaño de la imagen según tus necesidades */
  margin-right: 20px;
}

.info-text {
  display: flex;
  flex-direction: column;
}

.info-text p {
  margin: 15px 0;
}

.promotion-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ver-detalles-button {
  background-color: purple;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
}

.price-box {
  background-color: lightgray; /* Agrega un color de fondo al precio */
  padding: 15px;
  border-radius: 8px;
}

.price-text {
  margin: 0;
}
</style>

<script>

import { BaseService } from '/src/shared/services/base.service.js';

const service = new BaseService();

export default {
  components: {},
  props: {
    promotionId: String,
  },
  data() {
    return {
      promotion: null,
    };
  },
  created() {
    service.getPromotionsById(this.promotionId).then((response) => {
      this.promotion = response.data;
    });
  },
};
</script>
