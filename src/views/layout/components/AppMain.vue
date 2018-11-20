<template>
  <div>
    <keep-alive>
      <router-view :key="key"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'AppMain',
    data() {
      return {};
    },
    computed: {
      key() {
        return this.$route.fullPath;
      }
    }
  };
</script>

<style lang="stylus" scoped>
</style>


