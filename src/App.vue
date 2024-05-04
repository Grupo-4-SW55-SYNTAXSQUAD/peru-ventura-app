<template>
  <div>
    <ToolbarComponent />
    <main class="main">
      <router-view />
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
