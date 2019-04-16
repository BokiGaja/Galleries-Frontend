<template>
  <app-gallery-card/>
</template>

<script>
  import GalleryCard from './AppGalleryCard'
  export default {
    name: "SingleGallery",
    components: {
      appGalleryCard: GalleryCard
    }
  }
</script>