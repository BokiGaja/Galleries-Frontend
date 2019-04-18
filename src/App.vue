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
  #app {
    background-image: url("./assets/background.jpg") ;
    height: 100%;
    /* Center and scale the image nicely */
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
