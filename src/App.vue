<template>
  <div id="app">
    <app-navigation/>
    <router-view/>
  </div>
</template>

<script>
  import Navigation from '@/layouts/AppNavigation'
  export default {
    components: {
      appNavigation: Navigation
    }
  }
</script>

<style>
</style>
