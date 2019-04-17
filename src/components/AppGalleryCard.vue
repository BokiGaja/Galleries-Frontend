<template>
  <div>
    <div :class="singleGallery? 'card singleGalleryCard' : 'card galleryCard'">
      <div class="card-body">
        <h5 class="card-title cardLink" @click="seeGallery">{{gallery.title}}</h5>
        <div v-if="singleGallery">
          <!-- If page of single gallery -->
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
        <div v-if="!singleGallery">
          <!-- If page of multiple galleries -->
          <img v-if="!singleGallery" class="card-img-top" :src="gallery.pictures[0].imageUrl" alt="Card image cap">
          <div class="card-footer text-muted" v-if="!singleGallery">
            Created by:
            <router-link :to="{name: 'authorsGallery', params:{id: this.gallery.user.id}}" class="cardLink">
              {{gallery.user.first_name}} {{gallery.user.last_name}}
            </router-link>
            <br>
            {{gallery.created_at | formatDate}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../mixins/DateMixin"
  import {galleryService} from "../services/GalleryService";
  import PicturesCarousel from '@/components/PicturesCarousel'
  import AppCommentsCard from '@/components/AppCommentsCard'
  import {mapGetters} from 'vuex'

  export default {
    name: "GalleryCard",
    components: {
      PicturesCarousel,
      AppCommentsCard
    },
    computed: {
      ...mapGetters(['getUserId'])
    },
    props: {
      gallery: Object,
      singleGallery: Boolean
    },
    methods: {
      seeGallery() {
        this.$router.push('/galleries/' + this.gallery.id)
      },
      deleteGallery(id) {
        galleryService.deleteGallery(id);
        this.$router.push('/my-galleries')
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