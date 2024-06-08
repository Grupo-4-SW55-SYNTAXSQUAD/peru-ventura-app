<template>
  <div class="card">
    <DataView :value="owners" :sortOrder="sortOrder" :sortField="sortField">
      <template #header>
        <Dropdown
          v-model="sortKey"
          :options="sortOptions"
          optionLabel="label"
          placeholder="Sort By Price"
          @change="onSortChange($event)"
        />
        <!-- <Button
          class="btn-custom-shorted"
          v-if="owners.length > 0"
          label="Clear"
          @click="clearOwners"
        /> -->
      </template>
      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div
            v-for="(item, index) in slotProps.items"
            :key="index"
            class="col-12"
          >
            <div
              class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3"
              :class="{ 'border-top-1 surface-border': index !== 0 }"
            >
              <div class="md:w-10rem relative">
                <img
                  class="block xl:block mx-auto border-round w-24"
                  :src="item.imageUrl"
                  :alt="item.nameActivity"
                />
              </div>
              <div
                class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4 justify-between items-center"
              >
                <div
                  class="flex flex-row md:flex-column justify-content-between align-items-start gap-2"
                >
                  <div>
                    <span class="font-medium text-secondary text-sm">{{
                      item.destiny
                    }}</span>
                    <div class="text-lg font-medium text-900 mt-2">
                      {{ item.nameActivity }}
                    </div>
                  </div>
                  <div class="surface-100 p-1" style="border-radius: 30px">
                    <div
                      class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                      style="
                        border-radius: 30px;
                        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                          0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                      "
                    >
                      <span class="text-900 font-medium text-sm">{{
                        item.hours
                      }}</span>
                      <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div class="flex flex-column md:align-items-end gap-5">
                  <span class="text-xl font-semibold text-900"
                    >${{ item.price }}</span
                  >
                  <div
                    class="flex flex-row-reverse md:flex-row gap-2 items-center justify-center"
                  >
                    <!--<Button icon="pi pi-heart" outlined></Button> -->
                    <router-link
                      :to="`/${item.id}`"
                      class="flex-auto md:flex-initial white-space-nowrap p-2 bg-primary bg-black text-white text-center rounded-lg"
                      >Ver Detalles</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { BaseService } from '../../shared/services/base.service';

const service = new BaseService();
const owners = ref([]);
const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
  { label: 'Price High to Low', value: '!price' },
  { label: 'Price Low to High', value: 'price' },
]);

onMounted(() => {
  service.getAllOwners().then((response) => {
    if (Array.isArray(response.data)) {
      owners.value = response.data
        .map((item) => ({
          nameActivity: item.nameActivity,
          destiny: item.destiny,
          imageUrl: item.imageUrl,
          hours: item.hours,
          price: item.price,
          description: item.description,
          nameAgency: item.nameAgency,
          ruc: item.ruc,
          id: item.id,
        }))
        .slice(0, 5);
    } else {
      console.error('data is not an array:', response.data);
    }
  });
});

const onSortChange = (event) => {
  const value = event.value.value;
  const sortValue = event.value;

  if (value.indexOf('!') === 0) {
    sortOrder.value = -1;
    sortField.value = value.substring(1, value.length);
    sortKey.value = sortValue;
  } else {
    sortOrder.value = 1;
    sortField.value = value;
    sortKey.value = sortValue;
  }
};

const clearOwners = () => {
  owners.value = [];
};
</script>

<style scoped>
.p-dropdown {
  border: 1px solid var(--kt-black);
}
</style>
