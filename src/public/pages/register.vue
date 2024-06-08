<script>
  import TravelerRegisterComponent from "../components/traveler-register.component.vue";
  import OwnerRegisterComponent from "../components/owner-register.component.vue";

  export default {
    name:"register",
    components: {
      TravelerRegisterComponent,
      OwnerRegisterComponent,
    },
    data() {
      return {
        formType: ''
      };
    },
    methods: {
      showForm(type) {
        this.formType = type;
      }
    }
  };
</script>

<template>
  <div class="registration-container">
    <h1>Regístrate</h1>
    <div class="button-group">
      <button :class="{ active: formType === 'traveler' }" @click="showForm('traveler')">Traveler</button>
      <button :class="{ active: formType === 'owner' }" @click="showForm('owner')">Owner</button>
    </div>

    <div v-if="formType === 'traveler'">
      <traveler-register-component />
    </div>

    <div v-if="formType === 'owner'">
      <owner-register-component />
    </div>
  </div>
</template>

<style scoped>
  .registration-container {
    text-align: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    max-width: 500px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h1 {
    margin-bottom: 20px;
    color: #333;
  }

  .button-group {
    margin-bottom: 20px;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #45a049;
  }

  button.active {
    background-color: #45a049;
  }
</style>