<template>
  <div class="card galleryCard">
    <!--    <img class="card-img-top" src="..." alt="Card image cap">-->
    <div class="card-body">
      <h5 class="card-title">{{gallery.title}}</h5>
      <p class="card-text">{{gallery.description}}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
      Created by: {{gallery.user.first_name}} {{gallery.user.last_name}}
      <br>
      Created {{gallery.created_at | formatDate}}
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../mixins/DateMixin";

  export default {
    name: "GalleryCard",
    props: ['gallery'],
    mixins: [formatDate]
  }
</script>

<style scoped>
  .galleryCard {
    width: 18rem;
    margin: 20px auto;
    text-align: center
  }
</style>