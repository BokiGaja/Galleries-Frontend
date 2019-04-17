<template>
  <div>
    <router-link :to="{name: 'authorsGallery', params:{id: this.gallery.user.id}}"
                 class="cardLink"> {{gallery.user.first_name}} {{gallery.user.last_name}}
    </router-link>
    <p> Created at: {{gallery.created_at | formatDate}}</p>
    <p class="card-text">{{gallery.description}}</p>
    <pictures-carousel :pictures="gallery.pictures" style="width: 600px; height: 400px"/>
    <div v-if="gallery.user.id == getUserId">
      <router-link :to="{name: 'editGallery', params: {id: gallery.id}}" class="btn btn-primary">Edit
      </router-link>
      <button class="btn btn-danger" @click="deleteGallery(gallery.id)">Delete</button>
    </div>
    <app-comments-card :galleryId="gallery.id"/>
  </div>
</template>

<script>
  import {formatDate} from "../../mixins/DateMixin"
  import {galleryService} from "../../services/GalleryService";
  import {mapGetters} from 'vuex'
  import PicturesCarousel from '@/components/PicturesCarousel'
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