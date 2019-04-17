<template>
  <div :class="singleGallery? 'card singleGalleryCard' : 'card galleryCard'">
    <div class="card-body">
      <h5 class="card-title cardLink" @click="seeGallery">{{gallery.title}}</h5>
      <img class="card-img-top" :src="gallery.pictures[0].imageUrl" alt="Card image cap" v-if="!singleGallery">
      <pictures-carousel v-if="singleGallery" :pictures="gallery.pictures" style="width: 600px; height: 400px"/>
      <router-link v-if="singleGallery" :to="{name: 'authorsGallery', params:{id: this.gallery.user.id}}"
                   class="cardLink"> {{gallery.user.first_name}} {{gallery.user.last_name}}
      </router-link>
      <p v-if="singleGallery"> Created at: {{gallery.created_at | formatDate}}</p>
      <p class="card-text" v-if="singleGallery">{{gallery.description}}</p>
    </div>
    <div class="card-footer text-muted" v-if="!singleGallery">
      Created by:
      <router-link :to="{name: 'authorsGallery', params:{id: this.gallery.user.id}}" class="cardLink">
        {{gallery.user.first_name}} {{gallery.user.last_name}}
      </router-link>
      <br>
      {{gallery.created_at | formatDate}}
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../mixins/DateMixin"
  import PicturesCarousel from '@/components/PicturesCarousel'

  export default {
    name: "GalleryCard",
    components: {
      PicturesCarousel
    },
    props: {
      gallery: Object,
      singleGallery: Boolean
    },
    methods: {
      seeGallery() {
        this.$router.push('/galleries/' + this.gallery.id)
      },
      seeAuthor() {
        this.$router.push();
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