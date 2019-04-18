<template>
  <div class="home">
    <app-display-galleries :galleries="getGalleries"/>
  </div>
</template>

<script>
  import AppDisplayGalleries from '@/components/DisplayGalleries/AppDisplayGalleries'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'AllGalleries',
    components: {
      AppDisplayGalleries
    },
    computed: {
      ...mapGetters(['getGalleries', 'getUserId'])
    },
    methods: {
      ...mapActions(['fetchAll'])
    },
    async created() {
      await this.fetchAll();
    },
  }
</script>
