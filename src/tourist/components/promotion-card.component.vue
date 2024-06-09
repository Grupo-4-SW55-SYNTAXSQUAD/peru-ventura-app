<script>
import { BaseService } from '../../shared/services/base.service';
import promotion from "../pages/promotions/promotion.vue";

export default {
  computed: {
    promotion() {
      return promotion
    }
  },
  components: {},
  data() {
    return {
      promotions: [], // Change to array to hold multiple promotions
      service: new BaseService(),
      isLoading: true // To handle loading state
    };
  },
  created() {
    this.getPromotions();
  },
  methods: {
    async getPromotions() {
      try {
        const response = await this.service.getPromotions();
        console.log('Promotions:', response.data);
        this.promotions = response.data; // Assign the response data directly
        this.isLoading = false; // Set loading to false once data is fetched
      } catch (error) {
        console.error('Failed to fetch promotions:', error);
        this.isLoading = false; // Set loading to false even on error
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="promotion-cards" v-if="!isLoading">
      <Card class="promotion-card" v-for="(promotion, index) in promotions" :key="index">
        <template #title>
          <p>{{ promotion.name }}</p>
        </template>
        <template #content>
          <div class="promotion-details">
            <div class="game-info">
              <div>
                <img src="../../assets/images/promotion.png" />
              </div>
              <div class="info-text">
                <p><strong>Place:</strong> {{ promotion.location }}</p>
                <p><strong>Time:</strong> {{promotion.start_time }}</p>
                <p><strong>Offer:</strong> {{ promotion.offer }}</p>
              </div>
            </div>
            <div class="promotion-actions">
              <div class="ver-detalles-button" >
                <router-link :to="`/promotion/${promotion.id}`" class="bg-primary p-2">
                  Ver Detalles
                </router-link>
              </div>
              <div class="price-box">
                <p class="price-text">{{ promotion.price }}</p>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style scoped>
.promotion-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.promotion-card {
  max-width: 100%;
  width: 100%;
  margin: 0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid black;
}

.game-info {
  display: flex;
  align-items: center;
}

.game-info img {
  max-width: 150px; /* Ajusta el tamaño de la imagen según tus necesidades */
  margin-right: 20px;
}

.info-text {
  display: flex;
  flex-direction: column;
}

.info-text p {
  margin: 10px 0;
}

.promotion-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price-box {
  background-color: forestgreen;
  padding: 15px;
  border-radius: 8px;
  color:#fefefe;
  font-weight: 800;
}

.price-text {
  margin: 0;
}
</style>
