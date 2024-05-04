<template>
  <div>
    <ToolbarComponent />
    <main>
      <router-view class="main" />
    </main>
    <!-- <footer>Hola</footer> -->
  </div>
</template>

<script>
import ToolbarComponent from './public/components/toolbar.component.vue';

export default {
  components: {
    ToolbarComponent,
  },
};
</script>
