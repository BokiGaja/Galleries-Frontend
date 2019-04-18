<template>
  <div id="app">
    <app-navigation/>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
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
  @import "./styles/App.css";
  @import "./styles/InOutAnimation.css";
</style>
