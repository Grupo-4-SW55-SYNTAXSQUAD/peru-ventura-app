<template>
  <div class="">
    <Carousel
      :value="trips"
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
                :alt="slotProps.data.name"
                class="w-full border-round"
              />
            </div>
          </div>
          <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
          <div class="flex justify-content-between align-items-center">
            <div class="mt-0 font-semibold text-xl">
              {{ slotProps.data.nameAgency }}
            </div>
            <span class="flex justify-content-center flex-wrap">
              <Button icon="pi pi-heart" severity="secondary" outlined />
              <router-link
                :to="'/destination-trip/' + slotProps.data.id"
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
import { onMounted, ref } from 'vue';
import { BaseService } from '../../shared/services/base.service';

const service = new BaseService();
const trips = ref([]);

onMounted(() => {
  service.getAllDestinationTrips().then((res) => {
    trips.value = res.data;
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
