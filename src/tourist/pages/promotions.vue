<template>
  <section class="promotions py-5">
    <div v-if="promotions.length">
      <PromotionCard
        v-for="promotion in promotions"
        :key="promotion.promotionId"
        :promotion="promotion"
      />
    </div>
    <p v-else>No promotions available</p>
  </section>
</template>

<script>
import { BaseService } from '../../shared/services/base.service';
import PromotionCard from '../components/promotion-card.component.vue';

export default {
  name: 'PromotionDetails',
  components: {
    PromotionCard,
  },
  data() {
    return {
      promotions: [],
      baseService: new BaseService(),
    };
  },
  async created() {
    try {
      const response = await this.baseService.getAllPromotions();
      this.promotions = response.data;
    } catch (error) {
      console.error('Error fetching promotions:', error);
    }
  },
};
</script>
<style scoped>
.promotions {
  display: flex;
  justify-content: space-around;
  & div {
    display: flex;
    & .card-item {
      display: flex;
      flex-direction: column;
      max-width: 350px;
      width: 100%;
    }
  }
}

@media (max-width: 798px) {
  .promotions {
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    & div {
      flex-wrap: wrap;
      justify-content: center;
      & .card-item {
        display: flex;
        flex-direction: column;
        max-width: 350px;
        width: 100%;
      }
    }
  }
}
</style>
