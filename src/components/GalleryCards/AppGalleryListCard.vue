<template>
  <div>
    <div class="card card-image"
         :style="{
         background: ' linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url('+gallery.pictures[0].imageUrl+')',
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         borderRadius: '25px'}">
      <div class="text-white text-center d-flex flex-column align-items-center rgba-black-strong py-5 px-5">
        <router-link :to="{name: 'singleGallery', params: {id: gallery.id}}" style="color: white">
          <h3 class="card-title text-center"><strong>{{gallery.title}}</strong></h3>
        </router-link>
        <p style="font-style: italic">Created by:
          <br>
          <router-link :to="{name: 'authorsGallery', params:{id: this.gallery.user.id}}" class="cardLink">
            {{gallery.user.first_name}} {{gallery.user.last_name}}
          </router-link>
          <br>
          {{gallery.created_at | formatDate}}
          <router-link :to="{name: 'singleGallery', params: {id: gallery.id}}" style="margin-top: 10px"
                       class="btn btn-outline-secondary">See Gallery
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../mixins/DateMixin"

  export default {
    name: "GalleryListCard",
    props: ['gallery'],
    mixins: [formatDate],
  }
</script>

<style scoped>
  .card-image {
    display: block;
    width: 250px;
    height: 250px;
    background-size: cover;
  }
</style>