<template>
  <div id="app">
    <app-navigation/>
    <router-view/>
  </div>
</template>

<script>
  import Navigation from '@/layouts/AppNavigation'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      appNavigation: Navigation
    },
    computed: {
      ...mapGetters(['getUserId'])
    },
    created() {
      if (this.getUserId === null) {
        localStorage.removeItem('token')
      }
    }
  }
</script>

<style>
</style>
