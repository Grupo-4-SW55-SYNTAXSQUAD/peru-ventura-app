<script>
  export default {
    name:"owner-register-component",
    data() {
      return {
        owner: {
          name: '',
          email: '',
          password: '',
          business: '',
          address: ''
        }
      };
    },
    methods: {
      registerOwner() {
        console.log('Propietario registrado:', this.owner);
      }
    }
  };
</script>

<template>
  <div class="owner-registration">
    <h2>Registro de Propietario</h2>
    <form @submit.prevent="registerOwner">
      <div class="form-group">
        <label for="owner-name">Nombre</label>
        <input type="text" v-model="owner.name" id="owner-name" required />
      </div>
      <div class="form-group">
        <label for="owner-email">Correo Electrónico</label>
        <input type="email" v-model="owner.email" id="owner-email" required />
      </div>
      <div class="form-group">
        <label for="owner-password">Contraseña</label>
        <input type="password" v-model="owner.password" id="owner-password" required />
      </div>
      <div class="form-group">
        <label for="owner-business">Nombre del Negocio</label>
        <input type="text" v-model="owner.business" id="owner-business" required />
      </div>
      <div class="form-group">
        <label for="owner-address">Dirección</label>
        <input type="text" v-model="owner.address" id="owner-address" required />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<style>
  .owner-registration {
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