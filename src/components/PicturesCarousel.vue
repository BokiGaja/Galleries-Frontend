<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="margin: auto">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" v-for="(picture, index) in pictures" :data-slide-to="index"
          :class="index === 0 ? 'active' : null" :key="index"/>
    </ol>
    <div class="carousel-inner">
      <div :class="index === 0 ? 'carousel-item active' : 'carousel-item'" v-for="(picture, index) in pictures"
           :key="index">
        <img class="d-block carousel-image" :src="picture.imageUrl" alt="First slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "PicturesCarousel",
    props: ['pictures']
  }
</script>

<style scoped>
  .carousel-image {
    width: 600px;
    height: 400px;
  }
</style>