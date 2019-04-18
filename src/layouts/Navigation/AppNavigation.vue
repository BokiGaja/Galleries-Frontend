<template>
  <nav class="navbar navigation">
    <div class="form-inline" style="margin: auto">
      <app-gallery-links/>
      <app-auth-links/>
    </div>
  </nav>
</template>

<script>
  import AppGalleryLinks from '@/layouts/Navigation/AppGalleryLinks'
  import AppAuthLinks from '@/layouts/Navigation/AppAuthLinks'

  export default {
    name: "AppNavigation",
    components: {
      AppGalleryLinks,
      AppAuthLinks
    },
  }
</script>

<style scoped>
  .navigation {
    background: transparent;
    height: 100px;
  }
</style>