<template>
  <div class="card galleryCard">
    <div class="card-body">
      <h5 class="card-title cardLink" @click="seeGallery">{{gallery.title}}</h5>
      <!--    <img class="card-img-top" src="..." alt="Card image cap">-->
      <router-link v-if="singleGallery" :to="{name: 'authorsGallery', params:{id: this.gallery.user.id}}" class="cardLink"> {{gallery.user.first_name}} {{gallery.user.last_name}}</router-link>
      <p v-if="singleGallery"> Created at: {{gallery.created_at | formatDate}}</p>
      <p class="card-text" v-if="singleGallery">{{gallery.description}}</p>
    </div>
    <div class="card-footer text-muted" v-if="!singleGallery">
      Created by:<router-link :to="{name: 'authorsGallery', params:{id: this.gallery.user.id}}" class="cardLink"> {{gallery.user.first_name}} {{gallery.user.last_name}}</router-link>
      <br>
      {{gallery.created_at | formatDate}}
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../mixins/DateMixin";

  export default {
    name: "GalleryCard",
    props: {
      gallery: Object,
      singleGallery: Boolean
    },
    methods: {
      seeGallery() {
        this.$router.push('/galleries/'+ this.gallery.id)
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
  .cardLink {
    cursor: pointer;
  }
</style>