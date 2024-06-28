<template>
  <div class="card-item">
    <h2>{{ promotion.name }}</h2>
    <p>{{ promotion.description }}</p>
    <div v-if="promotion.destinationTrip" class="destination-trip">
      <h3>Destination Trip Details</h3>
      <p><strong>Name:</strong> {{ promotion.destinationTrip.name }}</p>
      <p><strong>Location:</strong> {{ promotion.destinationTrip.location }}</p>
      <div v-if="promotion.destinationTrip.activity" class="activity-details">
        <h4>Activity Details</h4>
        <p>
          <strong>Name:</strong> {{ promotion.destinationTrip.activity.name }}
        </p>
        <p>
          <strong>Max People:</strong>
          {{ promotion.destinationTrip.activity.maxPeople }}
        </p>
        <p>
          <strong>Category:</strong>
          {{ promotion.destinationTrip.activity.category.typeName }}
        </p>
      </div>
    </div>
    <div class="flex gap-3 mt-1">
      <router-link
        :to="'/' + promotion.id"
        class="w-full btn-primary py-2 text-center"
      >
        Ver Detalles
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromotionCard',
  props: {
    promotion: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-item {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  margin: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.destination-trip,
.activity-details {
  margin-top: 16px;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fafafa;
}

.activity-details {
  margin-top: 12px;
}
</style>
