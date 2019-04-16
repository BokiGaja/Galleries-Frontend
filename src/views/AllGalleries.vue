<template>
  <div class="home">
    <div v-if="getGalleries.length !== 0" style="text-align: center">
      <div v-for="(gallery, index) in getGalleries.slice(0, currPage*10)" :key="index">
        <app-gallery-card :gallery="gallery" :singleGallery="false"/>
      </div>
      <button class="btn btn-info btn-lg" @click="currPage++" v-if="getGalleries.length > currPage*10">Load more
      </button>
    </div>
    <div class="alert alert-danger" v-if="getGalleries.length === 0" style="text-align: center">There is no gallery
    </div>
  </div>
</template>

<script>
  import GalleryCard from '@/components/AppGalleryCard'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'AllGalleries',
    components: {
      appGalleryCard: GalleryCard
    },
    data() {
      return {
        currPage: 1
      }
    },
    computed: {
      ...mapGetters(['getGalleries'])
    },
    watch: {
      '$route'() {
        this.$router.go(this.$router.currentRoute)
      }
    },
    methods: {
      ...mapActions(['fetchAll', 'setAuthorsGalleries']),
    },
    async created() {
      await this.fetchAll();
      if (this.$route.params.id) {
        await this.setAuthorsGalleries(this.$route.params.id);
      }
    },
  }
</script>
