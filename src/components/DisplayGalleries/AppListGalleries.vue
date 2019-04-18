<template>
  <div class="listGalleries">
    <div   class="wrapper" v-if="galleries.length !== 0">
      <div v-for="(gallery, index) in galleries.slice(0, currPage*numberOfCardsOnPage)" :key="index">
        <app-gallery-card :gallery="gallery" :singleGallery="false" />
      </div>
    </div>
    <button class="btn btn-info btn-lg showMoreButton" @click="currPage++" v-if="galleries.length > currPage*numberOfCardsOnPage">
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
        searchParams: '',
      }
    },

  }
</script>

<style scoped>
  .listGalleries {
    /*margin-left: 100px;*/
    margin: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto auto auto auto;
  }
  .showMoreButton {
    width: 150px;
    margin: auto;
  }
</style>