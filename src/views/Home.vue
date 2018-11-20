<template>
  <div>{{ token }}</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    token() {
      return this.$store.state.token;
    }
  }
}
</script>

