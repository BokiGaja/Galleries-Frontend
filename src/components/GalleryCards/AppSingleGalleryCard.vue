<template>
  <div>
  <h1 class="cardTitle">{{gallery.title}}</h1>
  <div class="cardFrame">
    <div style="margin-right:30px">
      <pictures-carousel :pictures="gallery.pictures" style="width: 700px; height: 400px"/>
      <div class="cardBody">
        <h2 style="font-style: italic; font-family: SansSerif">Description</h2>
        <h4 class="card-text" style="font-family: SansSerif">"{{gallery.description}}"</h4>
        <router-link :to="{name: 'authorsGallery', params:{id: this.gallery.user.id}}"
                     class="card-text text-muted">Author: {{gallery.user.first_name}} {{gallery.user.last_name}}
        </router-link>
        <p class="card-text text-muted">{{gallery.created_at | formatDate}}</p>
      </div>
      <div v-if="gallery.user.id == getUserId">
        <router-link :to="{name: 'editGallery', params: {id: gallery.id}}" class="btn btn-primary" style="margin-right: 10px">Edit
        </router-link>
        <button class="btn btn-danger" @click="deleteGallery(gallery.id)">Delete</button>
      </div>
    </div>
    <app-comments-card :galleryId="gallery.id"/>
  </div>
  </div>
</template>

<script>
  import {formatDate} from "../../mixins/DateMixin"
  import {galleryService} from "../../services/GalleryService";
  import {mapGetters} from 'vuex'
  import PicturesCarousel from '@/components/GalleryCards/PicturesCarousel'
  import AppCommentsCard from '@/components/Comments/AppCommentsCard'

  export default {
    name: "SingleGalleryCard",
    props: ['gallery'],
    components: {
      PicturesCarousel,
      AppCommentsCard
    },
    computed: {
      ...mapGetters(['getUserId'])
    },
    mixins: [formatDate],
    methods: {
      async deleteGallery(id) {
        await galleryService.deleteGallery(id);
        this.$router.push('/my-galleries')
      }
    },
  }
</script>

<style scoped>
  @import "../../styles/SingleGalleryCard.css";
</style>