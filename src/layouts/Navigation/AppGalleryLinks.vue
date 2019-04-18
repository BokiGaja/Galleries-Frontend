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
  @import "../../styles/NavGalleryLinks.css";
</style>