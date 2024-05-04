<template>
  <div v-if="owner">
    <img :alt="owner.nameAgency" :src="owner.imageUrl" />
    <Card :owner="owner">
      <template #title>{{ owner.nameActivity }}</template>
      <template #content>
        <p class="m-0">{{ owner.description }}</p>
      </template>
    </Card>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { BaseService } from '../../shared/services/base.service';

const service = new BaseService();
export default {
  components: {},
  props: {
    ownerId: String,
  },
  data() {
    return {
      owner: null,
    };
  },
  created() {
    service.getOwnerById(this.ownerId).then((response) => {
      this.owner = response.data;
    });
  },
};
</script>
