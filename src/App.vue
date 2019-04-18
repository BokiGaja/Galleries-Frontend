<template>
  <div id="app">
    <app-navigation/>
    <router-view/>
  </div>
</template>

<script>
  import Navigation from '@/layouts/Navigation/AppNavigation'
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
  #app {
    background-image: url("./assets/background.jpg") ;
    height: 100%;
    /* Center and scale the image nicely */
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
