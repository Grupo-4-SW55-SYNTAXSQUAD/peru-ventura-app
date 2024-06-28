<template>
  <div class="">
    <DataView
      :value="filteredActivities"
      :sortOrder="sortOrder"
      :sortField="sortField"
    >
      <template #header>
        <Dropdown
          v-model="sortKey"
          :options="sortOptions"
          optionLabel="label"
          placeholder="Sort By"
          @change="onSortChange"
        />
      </template>
      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div
            v-for="(activity, index) in slotProps.items"
            :key="index"
            class="p-2"
          >
            <div
              class="card-activity flex flex-column sm:flex-wrap sm:align-items-center p-4 gap-3 bg-slate-300 rounded-md"
              :class="{ 'border-top-1 surface-border': index !== 0 }"
            >
              <div class="md:w-10rem relative">
                <img
                  class="block xl:block mx-auto border-round w-24"
                  :src="getActivityImageUrl(activity)"
                  :alt="activity.name"
                />
              </div>
              <div
                class="flex flex-column md:flex-wrap justify-content-between md:align-items-center flex-1 gap-4 justify-between items-center items-activity"
              >
                <div
                  class="flex flex-row md:flex-column justify-content-between align-items-start gap-2 items-activity"
                >
                  <div>
                    <span class="font-medium text-secondary text-sm">{{
                      activity.category.typeName
                    }}</span>
                    <div class="text-lg font-medium text-900 mt-2">
                      {{ activity.name }}
                    </div>
                  </div>
                  <div class="surface-100 p-1" style="border-radius: 30px">
                    <div
                      class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2 bg-slate-50"
                      style="
                        border-radius: 30px;
                        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                          0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                      "
                    >
                      <span class="text-900 font-medium text-sm">{{
                        activity.schedule
                      }}</span>
                      <i class="pi pi-calendar text-blue-500"></i>
                    </div>
                  </div>
                </div>
                <div class="flex flex-column md:align-items-end gap-5">
                  <span class="text-xl font-semibold text-900"
                    >Max Capacity: {{ activity.maxPeople }}</span
                  >
                  <span class="text-lg font-semibold text-900"
                    >Cost: ${{ activity.cost }}</span
                  >
                  <div
                    class="flex flex-row-reverse md:flex-row gap-2 items-center justify-center"
                  >
                    <router-link
                      :to="`/activity/${activity.activityId}`"
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
import { computed, defineProps, ref, watch } from 'vue';
import { BaseService } from '../../shared/services/base.service';

const props = defineProps({
  selectedActivities: {
    type: Array,
    default: () => [],
  },
});

const service = new BaseService();
const activities = ref([]);
const sortKey = ref(null);
const sortOrder = ref(1); // Default sort order ascending
const sortField = ref(null);
const sortOptions = ref([
  { label: 'Price High to Low', value: '!cost' },
  { label: 'Price Low to High', value: 'cost' },
]);

// Fetch data on component mount
const fetchActivities = async () => {
  try {
    const response = await service.getAllActivities();
    if (Array.isArray(response.data)) {
      activities.value = response.data.map((activity) => ({
        activityId: activity.activityId,
        name: activity.name,
        description: activity.description,
        schedule: activity.schedule,
        maxPeople: activity.maxPeople,
        cost: activity.cost,
        category: {
          categoryId: activity.category.categoryId,
          typeName: activity.category.typeName,
        },
      }));
    } else {
      console.error('Data is not an array:', response.data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Fetch activities on component mount
fetchActivities();

// Function to handle sorting change
const onSortChange = (event) => {
  const value = event.value.value;
  sortKey.value = event.value;
  if (value.startsWith('!')) {
    sortOrder.value = -1; // Descending order
    sortField.value = value.substring(1);
  } else {
    sortOrder.value = 1; // Ascending order
    sortField.value = value;
  }
};

// Function to clear activities
const clearActivities = () => {
  activities.value = [];
};

// Function to get activity image URL
const getActivityImageUrl = (activity) => {
  // Implement logic to get image URL from activity data
  // For example, if activity has imageUrl property:
  return activity.imageUrl || ''; // Replace with actual image URL logic
};

// Computed property for filtered activities based on sort options
const filteredActivities = computed(() => {
  if (!sortField.value || !sortOrder.value || !activities.value.length) {
    return activities.value;
  }

  // If no activities are selected, return all activities
  if (!props.selectedActivities.length) {
    return activities.value;
  }

  // Filter activities based on selected activities
  const selectedActivityIds = props.selectedActivities.map(
    (activity) => activity.activityId
  );
  const filtered = activities.value.filter((activity) =>
    selectedActivityIds.includes(activity.activityId)
  );

  // Perform sorting
  const sortedActivities = [...filtered].sort((a, b) => {
    const fieldA = a[sortField.value];
    const fieldB = b[sortField.value];

    if (typeof fieldA === 'string' && typeof fieldB === 'string') {
      return sortOrder.value * fieldA.localeCompare(fieldB);
    }
    return sortOrder.value * (fieldA - fieldB);
  });

  return sortedActivities;
});

watch(props.selectedActivities, () => {
  // Trigger re-computation when selected activities change
  filteredActivities.value;
});
</script>

<style scoped>
.p-dropdown {
  border: 1px solid var(--kt-black);
}

@media screen and (width <= 666px) {
  .p-dropdown {
    width: 100%;
  }
  .card-activity {
    max-width: 350px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .items-activity {
      flex-wrap: wrap;
    }
  }
}
</style>
