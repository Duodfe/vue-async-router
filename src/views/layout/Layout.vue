<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import { Sidebar, AppMain } from './components';

  export default {
    name: 'layout',
    components: {
      Sidebar,
      AppMain
    },
    data() {
      return {};
    }
  };
</script>

<style lang="stylus" scoped>
  .app-wrapper
    position relative
    height 100%
    width 100%
</style>


