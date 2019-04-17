<template>
  <div>
    <img class="card-img-top" :src="gallery.pictures[0].imageUrl" alt="Card image cap">
    <div class="card-footer text-muted">
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
  import {formatDate} from "../../mixins/DateMixin"

  export default {
    name: "GalleryListCard",
    props: ['gallery'],
    mixins: [formatDate],
  }
</script>

<style scoped>

</style>