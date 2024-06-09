<script>
  export default {
    name: 'destination-owner',
    data() {
      return {
        destinationName: '',
        location: '',
        description: ''
      };
    },
    methods: {
      submitForm() {
        alert('Destination added successfully!');
        this.destinationName = '';
        this.location = '';
        this.description = '';
      }
    }
  }
</script>

<template>
  <div class="add-destination">
    <h1>Add a New Destination</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="destinationName">Destination Name:</label>
        <input type="text" id="destinationName" v-model="destinationName" required>
      </div>
      <div class="form-group">
        <label for="location">Location:</label>
        <input type="text" id="location" v-model="location" required>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>
      <button type="submit">Add Destination</button>
    </form>
  </div>
</template>

<style scoped>
  .add-destination {
    padding: 40px;
    text-align: left;
    font-family: 'Arial', sans-serif;
  }

  h1 {
    color: #333;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    color: #555;
    margin-bottom: 5px;
  }

  input, textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
</style>