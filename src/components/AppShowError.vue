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
  .showError {
    text-align: center;
    width: 300px;
    margin: 10px auto
  }
</style>