
<script>
// import { BaseService } from '../../shared/services/base.service';
// import Home from "../../tourist/pages/home.vue";
// const service = new BaseService();

export default {
  //components: {},
  // props: {
  //   touristId: String,
  // },
  data() {
    return {
      // tourist: null,
      // localTouristId: null,
      // checked: false,
      items:[
        {
          label:"Home",
          icon: "pi pi-home",
          to:"/home",
        },
        {
          label:"Destination",
          icon: "pi pi-home",
          to:"/destinations",
        },
        {
          label:"Activities",
          icon: "pi pi-home",
          to:"/activities",
        },
        {
          label:"Promotions",
          icon: "pi pi-home",
          to:"/promotions",
        }
      ]
    }
  },
  // computed: {
  //   darkModeClass() {
  //     return this.checked ? 'dark-mode' : '';
  //   },
  // },
  // created() {
  //   this.localTouristId =
  //       this.touristId || Math.floor(Math.random() * 20).toString();
  //   service.getTouristById(this.localTouristId).then((response) => {
  //     this.tourist = response.data;
  //   });
  // },
};
</script>

<template>
  <div class="fixed-menu fixed top-0 left-0 w-full z-5">
    <div class="relative card">
      <Menubar :model="items">
        <template #start>
          <h1 class="title ">PERUVENTURA</h1>
        </template>
        <template #item="{ item, props, }">
          <router-link :to="item.to" class="flex align-items-center" v-bind="props.action">
            <span :class="item.icon"></span>
            <span class="ml-2">{{ item.label }}</span>
          </router-link>
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
          <div >
            <router-link to="/profile">
              <i class="pi pi-user" style="font-size: 24px"></i>
            </router-link>
          </div>
        </template>
      </Menubar>
    </div>
  </div>

</template>
<style scoped>
.title{
  font-size: 20px;
}
</style>