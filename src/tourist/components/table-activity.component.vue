<template>
  <div class="card flex md:justify-center">
    <ul
      class="m-0 list-none border border-surface-200 dark:border-surface-700 rounded p-4 flex flex-col gap-2 w-full md:w-[30rem]"
    >
      <li
        v-for="activity in activities"
        :key="activity.activityId"
        :class="[
          'p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded border border-transparent transition-all transition-duration-200',
          { 'border-primary': selectedId === activity.activityId },
        ]"
        @contextmenu="onRightClick($event, activity.activityId)"
      >
        <div class="flex flex-wrap p-2 items-center gap-4">
          <img
            class="w-16 shrink-0 rounded"
            :src="
              'https://example.com/images/' +
              activity.category.typeName.toLowerCase() +
              '.jpg'
            "
            :alt="activity.name"
          />
          <div class="flex-1 flex flex-col gap-1">
            <div v-if="editId === activity.activityId">
              <input v-model="activity.name" class="input" />
              <input v-model="activity.description" class="input" />
              <input v-model="activity.schedule" class="input" />
              <input v-model="activity.maxPeople" class="input" type="number" />
              <input v-model="activity.cost" class="input" type="number" />
              <button @click="saveActivity(activity)" class="btn btn-primary">
                Save
              </button>
              <button @click="cancelEdit" class="btn btn-secondary">
                Cancel
              </button>
            </div>
            <div v-else>
              <span class="font-bold">{{ activity.name }}</span>
              <div class="flex items-center gap-2">
                <i class="pi pi-tag text-sm"></i>
                <span>{{ activity.description }}</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="pi pi-calendar text-sm"></i>
                <span>{{ activity.schedule }}</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="pi pi-users text-sm"></i>
                <span>{{ activity.maxPeople }} people</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="pi pi-dollar text-sm"></i>
                <span>{{ activity.cost }} USD</span>
              </div>
            </div>
          </div>
          <span class="font-bold ml-8">{{ activity.category.typeName }}</span>
          <div>
            <button
              v-if="editId !== activity.activityId"
              @click="startEdit(activity)"
              class="btn btn-primary"
            >
              Edit
            </button>
            <button @click="deleteActivity(activity)" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { BaseService } from '../../shared/services/base.service';

const service = new BaseService();
const menu = ref();
const activities = ref([]);
const selectedId = ref(null);
const editId = ref(null);

onMounted(async () => {
  try {
    const response = await service.getAllActivities();
    activities.value = response.data;
  } catch (error) {
    console.error('Failed to fetch activities:', error);
  }
});

const onRightClick = (event, id) => {
  selectedId.value = id;
  menu.value.show(event);
};

const startEdit = (activity) => {
  editId.value = activity.activityId;
};

const cancelEdit = () => {
  editId.value = null;
};

const saveActivity = async (activity) => {
  try {
    const updatedActivity = await service.updateActivity(
      activity.activityId,
      activity
    );
    console.log('Activity updated successfully:', updatedActivity);
    activities.value = activities.value.map((a) =>
      a.activityId === updatedActivity.activityId ? updatedActivity : a
    );
    editId.value = null;
    alert('Actividad actualizada exitosamente');
  } catch (error) {
    console.error('Error updating activity:', error);
    alert('Error al actualizar la actividad');
  }
};

const deleteActivity = async (activity) => {
  try {
    await service.deleteActivity(activity.activityId);
    console.log('Activity deleted successfully:', activity);
    activities.value = activities.value.filter(
      (a) => a.activityId !== activity.activityId
    );
    alert('Actividad eliminada exitosamente');
  } catch (error) {
    console.error('Error deleting activity:', error);
    alert('Error al eliminar la actividad');
  }
};
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}
</style>
