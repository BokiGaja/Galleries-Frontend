<template>
  <div class="home">
    <div v-if="getGalleries.length !== 0">
      <div v-for="(gallery, index) in getGalleries" :key="index">
        <app-gallery-card :gallery="gallery" :singleGallery="false"/>
      </div>
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
    computed: {
      ...mapGetters(['getGalleries'])
    },
    watch: {
      '$route'(to, from) {
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
