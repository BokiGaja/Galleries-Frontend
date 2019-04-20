<template>
  <div class="listGalleries">
    <div   class="wrapper" v-if="galleries.length !== 0">
      <div v-for="(gallery, index) in galleries.slice(0, currPage*numberOfCardsOnPage)" :key="index">
        <app-gallery-card :gallery="gallery" :singleGallery="false" />
      </div>
    </div>
    <button class="btn btn-info btn-lg showMoreButton" style="margin-top: 30px" @click="currPage++" v-if="galleries.length > currPage*numberOfCardsOnPage">
      Load more
    </button>
    <div class="alert alert-danger" v-if="galleries.length === 0" style="text-align: center">There is no gallery
    </div>
  </div>
</template>

<script>
  import AppGalleryCard from '@/components/GalleryCards/AppGalleryCard'

  export default {
    name: "ListGalleries",
    props: ['galleries', 'numberOfCardsOnPage'],
    components: {
      AppGalleryCard,
    },
    data() {
      return {
        currPage: 1,
      }
    },
  }
</script>

<style scoped>
  @import "../../styles/ListGalleries.css";
</style>