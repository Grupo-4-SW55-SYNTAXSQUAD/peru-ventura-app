<template>
  <div>
    <CardComponent v-for="owner in owners" :key="owner.id" :owner="owner" />
  </div>
</template>

<script>
import CardComponent from './card.component.vue';
import { BaseService } from '../../shared/services/base.service';

const service = new BaseService();

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      owners: [],
    };
  },
  created() {
    service.getAllOwners().then((response) => {
      console.log(response.data);
      this.owners = response.data;
    });
  },
};
</script>
