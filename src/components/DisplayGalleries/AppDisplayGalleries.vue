<template>
  <div>
    <app-search/>
    <app-list-galleries :galleries="galleries" :numberOfCardsOnPage="10"/>
  </div>
</template>

<script>
  import AppSearch from '@/components/DisplayGalleries/AppSearch'
  import AppListGalleries from '@/components/DisplayGalleries/AppListGalleries'

  export default {
    name: "DisplayGalleries",
    props: ['galleries'],
    components: {
      AppSearch,
      AppListGalleries
    },
  }
</script>

<style scoped>
</style>