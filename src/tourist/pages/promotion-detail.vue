<script >
import PromotionDetail from "../components/card-promotion-detail.component.vue";
export default {
  components: {
    PromotionDetail,
  },
  data() {
    return {
      promotionId: String,
    };
  },
  created() {
    this.promotionId = this.$route.params.id;
  },
};
</script>

<template>
  <PromotionDetail :promotion-id="promotionId"></PromotionDetail>
</template>
