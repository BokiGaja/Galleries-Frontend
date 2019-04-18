<template>
  <div class="alert alert-danger showError" role="alert" v-if="error">
    {{ errorMessage }}
  </div>
</template>

<script>
  export default {
    name: "ShowError",
    props: ['error', 'errorMessage'],

  }
</script>

<style scoped>
  @import "../styles/ShowError.css";
</style>