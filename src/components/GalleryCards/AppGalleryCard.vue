<template>
  <div>
    <div :class="singleGallery? 'card singleGalleryCard' : 'card galleryCard'">
      <div class="card-body">
        <h5 class="card-title cardLink" @click="seeGallery">{{gallery.title}}</h5>
        <div v-if="singleGallery">
          <app-single-gallery-card :gallery="gallery"/>
        </div>
        <div v-if="!singleGallery">
          <app-gallery-list-card :gallery="gallery"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../mixins/DateMixin"
  import AppSingleGalleryCard from '@/components/GalleryCards/AppSingleGalleryCard'
  import AppGalleryListCard from '@/components/GalleryCards/AppGalleryListCard'

  export default {
    name: "GalleryCard",
    components: {
      AppSingleGalleryCard,
      AppGalleryListCard
    },
    props: {
      gallery: Object,
      singleGallery: Boolean
    },
    methods: {
      seeGallery() {
        this.$router.push('/galleries/' + this.gallery.id)
      }
    },
    mixins: [formatDate]
  }
</script>

<style scoped>
  .galleryCard {
    width: 18rem;
    margin: 20px auto;
    text-align: center
  }

  .singleGalleryCard {
    width: 800px;
    text-align: center;
    margin: auto;
  }

  .cardLink {
    cursor: pointer;
  }
</style>