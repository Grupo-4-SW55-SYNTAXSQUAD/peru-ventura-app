<template>
  <div class="flex justify-center items-center flex-col">
    <Toolbar>
      <template #start>
        <div
          class="flex justify-content-center gap-4 border-t-2 border-l-2 border-b-2"
        >
          <!-- Activity Selection -->
          <MultiSelect
            v-model="selectedActivities"
            :options="activities"
            optionLabel="name"
            placeholder="Select Activities"
            display="chip"
            class="w-full md:w-20rem"
          >
            <template #option="slotProps">
              <div class="flex align-items-center">
                <i class="pi pi-map-marker mr-2"></i>
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
            <template #footer>
              <div class="py-2 px-3">
                <b>{{ selectedActivities ? selectedActivities.length : 0 }}</b>
                activit{{
                  (selectedActivities ? selectedActivities.length : 0) > 1
                    ? 'ies'
                    : 'y'
                }}
                selected.
              </div>
            </template>
          </MultiSelect>
        </div>
        <!-- Search Button -->
        <Button
          label="Search"
          icon="pi pi-search"
          class="p-button-info p-4 border-t-2 border-r-2 border-b-2"
          @click="handleSearchClick"
        />
        <!-- Clear Button -->
        <Button
          v-if="showResults"
          label="Clear"
          icon="pi pi-times"
          class="p-button-danger p-4 border-t-2 border-r-2 border-b-2"
          @click="handleClearClick"
        />
      </template>
    </Toolbar>

    <!-- Results Section -->
    <div v-if="showResults" class="results mt-4 p-4 border-2">
      <h3>Selected Items:</h3>
      <p>
        <strong>Activities:</strong>
        {{ selectedActivities.map((item) => item.name).join(', ') }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.p-button-info {
  background-color: var(--color-info);
  color: var(--kt-white);
}
.p-button-danger {
  background-color: var(--color-danger);
  color: var(--kt-white);
}
</style>

<script setup>
import Button from 'primevue/button';
import MultiSelect from 'primevue/multiselect';
import Toolbar from 'primevue/toolbar';
import { onMounted, ref } from 'vue';
import { BaseService } from '../../shared/services/base.service';

const baseService = new BaseService();

const selectedActivities = ref([]);
const activities = ref([]);
const showResults = ref(false);

onMounted(async () => {
  try {
    const response = await baseService.getAllActivities();
    console.log('Activities:', response.data);
    activities.value = response.data;
  } catch (error) {
    console.error('Error al obtener las actividades:', error);
  }
});

const handleSearchClick = () => {
  console.log('Search clicked');
  if (selectedActivities.value.length) {
    showResults.value = true;
  } else {
    showResults.value = false;
  }
};

const handleClearClick = () => {
  selectedActivities.value = [];
  showResults.value = false;
};
</script>
