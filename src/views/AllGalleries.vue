<template>
  <div class="home">
    <div v-for="(gallery, index) in getGalleries" :key="index">
      <app-gallery-card :gallery="gallery"/>
    </div>
    <div class="alert alert-danger" v-if="getGalleries.length === 0" style="text-align: center">There is no gallery</div>
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
    methods: {
      ...mapActions(['fetchAll'])
    },
    async beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.fetchAll()
      })
    }
  }
</script>
