<template>
  <div class="galleryLinks">
    <img src="../../assets/logo.png" alt="logo" class="logo">
    <div class="navBox">
      <router-link :to="{name: 'home'}" class="nav-link navLink" active-class="active" exact>All Galleries
      </router-link>
    </div>
    <div class="navBox">
      <router-link :to="{name: 'myGalleries'}" class="nav-link navLink" active-class="active" v-if="loggedIn"
      >My Galleries
      </router-link>
    </div>
    <div class="navBox">
      <router-link :to="{name: 'newGallery'}" class="nav-link navLink" active-class="active" v-if="loggedIn"
      >Create New Gallery
      </router-link>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "GalleryLinks",
    computed: {
      ...mapGetters(['loggedIn'])
    },
  }
</script>

<style scoped>
  .galleryLinks {
    position: absolute;
    left: 5px;
  }

  .logo {
    height: 100px;
    float: left;
  }

  .navBox {
    float: left;
    margin-top: 60px;
    margin-left: 30px
  }

  .navLink {
    color: grey;
    font-weight: bold;
    font-family: Arial;
    margin-left: 30px;
    font-size: 18px;
  }

  .active {
    border-bottom: grey 3px solid;
  }
</style>