<template>
  <div class="card">
    <Carousel
      :value="owners"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 p-3">
          <div class="mb-3">
            <div class="relative mx-auto">
              <img
                :src="slotProps.data.imageUrl"
                :alt="slotProps.data.nameAgency"
                class="w-full border-round"
              />
            </div>
          </div>
          <div class="mb-3 font-medium">{{ slotProps.data.nameActivity }}</div>
          <div class="flex justify-content-between align-items-center">
            <div class="mt-0 font-semibold text-xl">
              {{ slotProps.data.nameAgency }}
            </div>
            <span class="flex justify-content-center flex-wrap">
              <Button icon="pi pi-heart" severity="secondary" outlined />
              <router-link
                :to="'/' + slotProps.data.id"
                label="Ver Detalles"
                class="p-button p-component ml-2 no-underline text-white"
              >
                Ver Detalles
              </router-link>
            </span>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { BaseService } from '../../shared/services/base.service';
import { ref, onMounted } from 'vue';

const service = new BaseService();
const owners = ref([]);

onMounted(() => {
  service.getAllOwners().then((res) => {
    owners.value = res.data;
  });
});
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>
