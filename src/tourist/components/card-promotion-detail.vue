<script>
import { BaseService } from '../../shared/services/base.service';

export default {
  props: {
    promotionId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      promotion: null,
      service: new BaseService(),
      isLoading: true
    };
  },
  created() {
    this.getPromotionById();
  },
  methods: {
    async getPromotionById() {
      try {
        const response = await this.service.getPromotionsById(this.promotionId);
        this.promotion = response.data;
        console.log('this Promotion:', this.promotion);
        this.isLoading = false;
      } catch (error) {
        console.error('Failed to fetch promotion:', error);
        this.isLoading = false;
      }
    }
  }
};
</script>

<template>
  <div>
    <div class="promotion-cards" v-if="!isLoading">
      <Card v-if="promotion" class="promotion-card" >
        <template #title>
          <p>{{ promotion[0].name }}</p>
        </template>
        <template #content>
          <div class="promotion-details">
            <div class="game-info">
              <div class="image-container">
                <img src="../../../public/assets/images/promotion.png"/>
              </div>
              <div class="info-text">
                <p><strong>Description:</strong><br> {{ promotion[0].description }}</p>
                <p><strong>Community:</strong> <br> {{ promotion[0].community }}</p>
                <p><strong>Time:</strong> <br> {{ promotion[0].start_time }}</p>
              </div>
            </div>
            <div class="back-button">
              <router-link :to="`/promotion`" class="bg-primary p-2">
                Volver
              </router-link>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.promotion-card {
  max-width: 650px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid black;
  text-align: center; /* Centra el contenido de la card */
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* Espacio entre la imagen y el contenido */
}

.image-container img {
  max-width: 100%; /* Ajusta el tamaño de la imagen según tus necesidades */
  height: auto;
}

.info-text {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el texto */
}

.info-text p {
  margin: 10px 0;
}

.back-button {
  text-align: center; /* Centra el botón dentro del contenedor */
  margin-top: 20px; /* Añade un margen superior para separar el botón del contenido */
}

.back-button .bg-primary {
  background-color: #007bff; /* Color de fondo del botón */
  color: white; /* Color del texto del botón */
  padding: 10px 20px; /* Espaciado interior del botón */
  border-radius: 5px; /* Bordes redondeados */
  text-decoration: none; /* Quitar subrayado del enlace */
  display: inline-block; /* Para ajustar el tamaño del botón */
}

.back-button .bg-primary:hover {
  background-color: #0056b3; /* Color de fondo del botón al pasar el ratón */
}
</style>

