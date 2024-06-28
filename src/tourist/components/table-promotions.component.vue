<template>
  <div class="card flex md:justify-center">
    <ul
      class="m-0 list-none border border-surface-200 dark:border-surface-700 rounded p-4 flex flex-col gap-2 w-full md:w-[30rem]"
    >
      <li
        v-for="promotion in promotions"
        :key="promotion.promotionId"
        :class="[
          'p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded border border-transparent transition-all transition-duration-200',
          { 'border-primary': selectedId === promotion.promotionId },
        ]"
        @contextmenu="onRightClick($event, promotion.promotionId)"
      >
        <div class="flex flex-wrap p-2 items-center gap-4">
          <img
            class="w-16 shrink-0 rounded"
            :src="
              'https://example.com/images/' +
              promotion.destinationTrip.activity.category.typeName.toLowerCase() +
              '.jpg'
            "
            :alt="promotion.destinationTrip.name"
          />
          <div class="flex-1 flex flex-col gap-1">
            <div v-if="editId === promotion.promotionId">
              <input v-model="promotion.name" class="input" />
              <input v-model="promotion.description" class="input" />
              <input v-model="promotion.offer" class="input" />
              <button @click="savePromotion(promotion)" class="btn btn-primary">
                Save
              </button>
              <button @click="cancelEdit" class="btn btn-secondary">
                Cancel
              </button>
            </div>
            <div v-else>
              <span class="font-bold">{{ promotion.name }}</span>
              <div class="flex items-center gap-2">
                <i class="pi pi-tag text-sm"></i>
                <span>{{ promotion.description }}</span>
              </div>
            </div>
          </div>
          <span class="font-bold ml-8">{{
            promotion.destinationTrip.activity.category.typeName
          }}</span>
          <div>
            <button
              v-if="editId !== promotion.promotionId"
              @click="startEdit(promotion)"
              class="btn btn-primary"
            >
              Edit
            </button>
            <button @click="deletePromotion(promotion)" class="btn btn-danger">
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
const promotions = ref([]);
const selectedId = ref(null);
const editId = ref(null);

onMounted(async () => {
  try {
    const response = await service.getAllPromotions();
    promotions.value = response.data;
  } catch (error) {
    console.error('Failed to fetch promotions:', error);
  }
});

const onRightClick = (event, id) => {
  selectedId.value = id;
  menu.value.show(event);
};

const startEdit = (promotion) => {
  editId.value = promotion.promotionId;
};

const cancelEdit = () => {
  editId.value = null;
};

const savePromotion = async (promotion) => {
  try {
    const updatedPromotion = await service.updatePromotion(
      promotion.promotionId,
      promotion
    );
    console.log('Promotion updated successfully:', updatedPromotion);
    promotions.value = promotions.value.map((p) =>
      p.promotionId === updatedPromotion.promotionId ? updatedPromotion : p
    );
    editId.value = null;
    alert('Promoción actualizada exitosamente');
  } catch (error) {
    console.error('Error updating promotion:', error);
    alert('Error al actualizar la promoción');
  }
};

const deletePromotion = async (promotion) => {
  try {
    await service.deletePromotion(promotion.promotionId);
    console.log('Promotion deleted successfully:', promotion);
    promotions.value = promotions.value.filter(
      (p) => p.promotionId !== promotion.promotionId
    );
    alert('Promoción eliminada exitosamente');
  } catch (error) {
    console.error('Error deleting promotion:', error);
    alert('Error al eliminar la promoción');
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
