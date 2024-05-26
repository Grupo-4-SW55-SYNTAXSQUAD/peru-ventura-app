<template>
  <div class="container">
    <div class="center">
      <div class="card">
        <div class="card-header">
          <h1>Crear Perfil de Taller</h1>
        </div>
        <div class="card-body">
          <form @submit.prevent="createPromotion">
            <div class="form-group">
              <label for="promotionName">Nombre de la Promoción:</label>
              <input type="text" id="promotionName" v-model="promotionName" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="description">Descripción:</label>
              <textarea id="description" v-model="description" class="form-control" required></textarea>
            </div>

            <div class="form-group">
              <label for="photos">Fotos:</label>
              <input type="file" id="photos" accept="image/*" class="form-control-file" multiple >
            </div>

            <div class="form-group">
              <label for="schedule">Horarios:</label>
              <input type="text" id="schedule" v-model="schedule" class="form-control" required>
            </div>

            <div class="form-group">
              <label for="community">Comunidad:</label>
              <input type="text" id="community" v-model="community" class="form-control" required>
            </div>

            <div class="form-group">
              <label for="location">Lugar:</label>
              <input type="text" id="location" v-model="location" class="form-control" required>
            </div>

            <div class="form-group">
              <label for="offer">Oferta:</label>
              <input type="text" id="offer" v-model="offer" class="form-control" required>
            </div>

            <div class="form-group">
              <label for="price">Precio:</label>
              <input type="number" id="price" v-model="price" class="form-control" required>
            </div>

            <div v-if="loading" class="loading-message">
              <p>Cargando...</p>
            </div>

            <button :disabled="loading" type="submit" class="btn btn-primary">
              {{ loading ? 'Creando Perfil...' : 'Crear Perfil' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseService } from '../../shared/services/base.service';

export default {
  name: "create-promotion",

  data() {
    return {
      loading: false,
      promotionName: '',
      description: '',
      photos: [],
      schedule: '',
      community: '',
      location: '',
      offer: '',
      price: '0',
      nextId: '11', // Cambia el ID a texto
      service: new BaseService(),
      promotions: [] // Inicializa promotions como un array vacío
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
        this.promotions = response.data; // Asigna los datos de la respuesta directamente
        this.isLoading = false; // Establece isLoading en falso una vez que se obtienen los datos
      } catch (error) {
        console.error('Failed to fetch promotions:', error);
        this.isLoading = false; // Establece isLoading en falso incluso en caso de error
      }
    },
    async createPromotion() {
      this.loading = true;
      const newPromotion = {
        id: this.nextId,
        name: this.promotionName,
        description: this.description,
        community: this.community,
        location: this.location,
        start_time: this.schedule,
        offer: this.offer,
        price: (this.price).toString(),
      };

      try {
        // Utiliza la misma instancia de BaseService
        const response = await this.service.addPromotion(newPromotion);
        console.log('Promotion created:', response.data);

        // Incrementa el ID para la próxima promoción
        this.nextId = (parseInt(this.nextId) + 1).toString();

        // Obtén las promociones actualizadas después de agregar la nueva

        await this.getPromotions();

        // Después de crear la promoción, redirige al usuario al perfil
        this.$router.push('/profile');
      } catch (error) {
        console.error('Error creating promotion:', error);
        // Maneja el error, si es necesario
      } finally {
        this.loading = false; // Desactiva el estado de carga
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
}

.center {
  max-width: 600px;
  width: 100%;
}

.card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.card-header {
  padding: 20px;
  background-color: #007bff;
  color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

textarea,
input[type="text"],
input[type="number"],
input[type="file"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
