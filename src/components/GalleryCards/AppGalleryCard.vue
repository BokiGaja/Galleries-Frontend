<template>
  <div>
    <app-single-gallery-card v-if="singleGallery" :gallery="gallery"/>
    <app-gallery-list-card v-if="!singleGallery" :gallery="gallery"/>
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