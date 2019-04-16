<template>
  <div v-if="gallery !== null">
    <app-gallery-card :gallery="gallery" :singleGallery="true"/>
  </div>
</template>

<script>
  import GalleryCard from './AppGalleryCard'
  import {galleryService} from "../services/GalleryService";

  export default {
    name: "SingleGallery",
    components: {
      appGalleryCard: GalleryCard
    },
    data() {
      return {
        gallery: null,
      }
    },
    async beforeRouteEnter(to, from, next) {
      next(async (vm) => {
        const {data} = await galleryService.getOne(vm.$route.params.id);
        vm.gallery = {...data}
      })
    }
  }
</script>