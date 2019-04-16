<template>
  <div class="home">
    <div v-for="(gallery, index) in galleries" :key="index">
      <app-gallery-card :gallery="gallery"/>
    </div>
  </div>
</template>

<script>
  import {galleryService} from "../services/GalleryService";
  import GalleryCard from '@/components/AppGalleryCard'

  export default {
    name: 'AllGalleries',
    components: {
      appGalleryCard: GalleryCard
    },
    data() {
      return {
        galleries: []
      }
    },
    async created() {
      this.galleries = await galleryService.getAll();
    }
  }
</script>
