<template>
  <div class="home">
    <app-display-galleries :galleries="getAuthorsGalleries"/>
  </div>
</template>

<script>
  import AppDisplayGalleries from '@/components/DisplayGalleries/AppDisplayGalleries'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'AllGalleries',
    data() {
      return {
        galleries: [],
      }
    },
    components: {
      AppDisplayGalleries
    },
    computed: {
      ...mapGetters(['getUserId', 'getAuthorsGalleries'])
    },
    methods: {
      ...mapActions(['setAuthorsGalleries'])
    },
    async created() {
      if (this.$route.params.id) {
        this.setAuthorsGalleries(this.$route.params.id);
      } else {
        this.setAuthorsGalleries(this.getUserId);
      }
    },
  }
</script>
