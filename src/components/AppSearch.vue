<template>
  <div style="text-align: center">
    <form class="form-inline" style="width: 350px; margin: 20px auto"
          @submit.prevent="route === 'home' ? searchAllGalleries(searchParams) : searchAuthorsGalleries(searchParams)">
      <input class="form-control mr-sm-1" type="text" placeholder="Search" aria-label="Search" v-model="searchParams">
      <button class="btn btn-outline-info btn-rounded my-0" type="submit">Filtriraj</button>
    </form>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "Search",
    props: ['searchType'],
    data() {
      return {
        searchParams: '',
        route: this.$route.name
      }
    },
    methods: {
      ...mapActions(['searchAllGalleries', 'searchAuthorsGalleries']),
    },
  }
</script>

<style scoped>

</style>