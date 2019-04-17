<template>
  <div>
    <app-search/>
    <div v-if="galleries.length !== 0" style="text-align: center">
      <div v-for="(gallery, index) in galleries.slice(0, currPage*10)" :key="index">
        <app-gallery-card :gallery="gallery" :singleGallery="false"/>
      </div>
      <button class="btn btn-info btn-lg" @click="currPage++" v-if="galleries.length > currPage*10">Load more
      </button>
    </div>
    <div class="alert alert-danger" v-if="galleries.length === 0" style="text-align: center">There is no gallery
    </div>
  </div>
</template>

<script>
  import AppGalleryCard from '@/components/AppGalleryCard'
  import AppSearch from '@/components/AppSearch'

  export default {
    name: "DisplayGalleries",
    props: ['galleries'],
    components: {
      AppGalleryCard,
      AppSearch
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

</style>