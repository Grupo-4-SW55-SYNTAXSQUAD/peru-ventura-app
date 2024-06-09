<script>
  export default {
    name: 'home-owner',
    methods: {
      addDestination() {
        alert('Navigate to Add Destination');
      },
      viewActivities() {
        alert('Navigate to Activities');
      }
    }
  }
</script>

<template>
  <div class="home-owner">
    <h1>Welcome, Owner!</h1>
    <div class="sections">
      <div class="section" @click="addDestination">
        <h2>Add Destination</h2>
      </div>
      <div class="section" @click="viewActivities">
        <h2>Activities</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .home-owner {
    padding: 40px;
    text-align: center;
    font-family: 'Arial', sans-serif;
  }

  h1 {
    color: #333;
    margin-bottom: 30px;
  }

  .sections {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .section {
    flex: 1 1 300px;
    max-width: 400px;
    height: 250px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .section:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .section h2 {
    color: #555;
    margin-bottom: 10px;
  }

  .section p {
    color: #777;
  }

  .add-destination {
    background: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
    color: white;
  }

  .view-activities {
    background: linear-gradient(135deg, #ff9a9e 10%, #fad0c4 100%);
    color: white;
  }

  .add-destination h2, .view-activities h2 {
    color: white;
  }

  .add-destination p, .view-activities p {
    color: #f0f0f0;
  }

  @media (max-width: 768px) {
    .sections {
      flex-direction: column;
      align-items: center;
    }

    .section {
      flex: 1 1 100%;
      max-width: none;
    }
  }
</style>