<script>
  export default {
    name:"traveler-register-component",
    data() {
      return {
        traveler: {
          name: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
      registerTraveler() {
        console.log('Viajero registrado:', this.traveler);
      }
    }
  };
</script>

<template>
  <div class="traveler-registration">
    <h2>Registro de Viajero</h2>
    <form @submit.prevent="registerTraveler">
      <div class="form-group">
        <label for="traveler-name">Nombre</label>
        <input type="text" v-model="traveler.name" id="traveler-name" required />
      </div>
      <div class="form-group">
        <label for="traveler-email">Correo Electrónico</label>
        <input type="email" v-model="traveler.email" id="traveler-email" required />
      </div>
      <div class="form-group">
        <label for="traveler-password">Contraseña</label>
        <input type="password" v-model="traveler.password" id="traveler-password" required />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<style scoped>
  .traveler-registration {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin-bottom: 20px;
    color: #333;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: #555;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
  }

  button:hover {
    background-color: #45a049;
  }
</style>