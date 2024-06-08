<template>
  <div class="card flex justify-center items-center flex-col">
    <Toolbar>
      <template #start>
        <div
          class="card flex justify-content-center gap-4 border-t-2 border-l-2 border-b-2"
        >
          <!-- Country Selection -->
          <MultiSelect
            v-model="selectedCountries"
            :options="countries"
            optionLabel="name"
            placeholder="Select Countries"
            display="chip"
            class="w-full md:w-20rem"
          >
            <template #option="slotProps">
              <div class="flex align-items-center">
                <img
                  :alt="slotProps.option.name"
                  src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                  :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
                  style="width: 18px"
                />
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
            <template #footer>
              <div class="py-2 px-3">
                <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b>
                item{{
                  (selectedCountries ? selectedCountries.length : 0) > 1
                    ? 's'
                    : ''
                }}
                selected.
              </div>
            </template>
          </MultiSelect>

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
                <i class="pi pi-tag mr-2"></i>
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
            <template #footer>
              <div class="py-2 px-3">
                <b>{{ selectedActivities ? selectedActivities.length : 0 }}</b>
                activity{{
                  (selectedActivities ? selectedActivities.length : 0) > 1
                    ? 'ies'
                    : 'y'
                }}
                selected.
              </div>
            </template>
          </MultiSelect>

          <!-- Duration Selection -->
          <MultiSelect
            v-model="selectedDurations"
            :options="durations"
            optionLabel="name"
            placeholder="Select Durations"
            display="chip"
            class="w-full md:w-20rem"
          >
            <template #option="slotProps">
              <div class="flex align-items-center">
                <i class="pi pi-clock mr-2"></i>
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
            <template #footer>
              <div class="py-2 px-3">
                <b>{{ selectedDurations ? selectedDurations.length : 0 }}</b>
                duration{{
                  (selectedDurations ? selectedDurations.length : 0) > 1
                    ? 's'
                    : ''
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
        <strong>Countries:</strong>
        {{ selectedCountries.map((item) => item.name).join(', ') }}
      </p>
      <p>
        <strong>Activities:</strong>
        {{ selectedActivities.map((item) => item.name).join(', ') }}
      </p>
      <p>
        <strong>Durations:</strong>
        {{ selectedDurations.map((item) => item.name).join(', ') }}
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
import { ref } from 'vue';
import MultiSelect from 'primevue/multiselect';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';

const selectedCountries = ref([]);
const countries = ref([
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' },
  { name: 'China', code: 'CN' },
  { name: 'Egypt', code: 'EG' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Spain', code: 'ES' },
  { name: 'United States', code: 'US' },
]);

const selectedActivities = ref([]);
const activities = ref([
  { name: 'Hiking' },
  { name: 'Swimming' },
  { name: 'Sightseeing' },
  { name: 'Dining' },
  { name: 'Shopping' },
]);

const selectedDurations = ref([]);
const durations = ref([
  { name: '1-3 days' },
  { name: '4-7 days' },
  { name: '1-2 weeks' },
  { name: '2+ weeks' },
]);

const showResults = ref(false);

const handleSearchClick = () => {
  console.log('Search clicked');
  if (
    selectedCountries.value.length &&
    selectedActivities.value.length &&
    selectedDurations.value.length
  ) {
    showResults.value = true;
  } else {
    showResults.value = false;
  }
};

const handleClearClick = () => {
  selectedCountries.value = [];
  selectedActivities.value = [];
  selectedDurations.value = [];
  showResults.value = false;
};
</script>
