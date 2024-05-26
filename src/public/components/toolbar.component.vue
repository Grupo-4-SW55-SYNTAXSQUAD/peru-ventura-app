<template>
  <header class="card" :class="darkModeClass">
    <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
      <template #start>
        <nav class="flex align-items-center gap-2">
          <router-link to="/home" class="no-underline">
            <h1 class="text-4xl text-red-600 font-semibold">PeruVentura</h1>
          </router-link>
          <router-link to="/home">
            <Button label="Home" text plain />
          </router-link>
          <router-link to="/destinations">
            <Button label="Destinos" text plain />
          </router-link>
          <router-link to="/activities">
            <Button label="Actividades" text plain />
          </router-link>
          <router-link to="/promotion">
            <Button label="Promociones" text plain />
          </router-link>
          <router-link to="/contact">
            <Button label="Contactos" text plain />
          </router-link>
        </nav>
      </template>
      <template #end>
        <div class="card flex justify-content-center mr-4">
          <InputSwitch v-model="checked" />
        </div>
        <div v-if="tourist" class="flex align-items-center gap-2">
          <router-link to="/profile">
            <Avatar
              :image="tourist.avatar"
              style="width: 32px; height: 32px; border-radius: 50%"
            />
          </router-link>
        </div>
        <div v-else>
          <router-link to="/profile">
            <i class="pi pi-user" style="font-size: 24px"></i>
          </router-link>
        </div>
      </template>
    </Toolbar>
  </header>
</template>

<script>
import { BaseService } from '../../shared/services/base.service';
const service = new BaseService();

export default {
  components: {},
  props: {
    touristId: String,
  },
  data() {
    return {
      tourist: null,
      localTouristId: null,
      checked: false,
    };
  },
  computed: {
    darkModeClass() {
      return this.checked ? 'dark-mode' : '';
    },
  },
  created() {
    this.localTouristId =
      this.touristId || Math.floor(Math.random() * 20).toString();
    service.getTouristById(this.localTouristId).then((response) => {
      this.tourist = response.data;
    });
  },
};
</script>
