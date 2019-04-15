<template>
  <nav class="navbar navbar-light bg-light">
    <form class="form-inline" style="margin: auto">
      <router-link :to="{name: 'home'}" class="btn btn-outline-info navButton" type="button"
      >All Galleries
      </router-link>
      <img src="../assets/logo.png" alt="logo" class="logo">
      <router-link :to="{name: 'register'}" class="btn btn-outline-info navButton" type="button"
      >Register
      </router-link>
      <router-link :to="{name: 'login'}" class="btn btn-outline-info navButton" type="button"
      >Login
      </router-link>
    </form>
  </nav>
</template>

<script>

  export default {
    name: "AppNavigation",
  }
</script>

<style scoped>
  .navButton {
    color: black;
    height: 40px;
    background-color: skyblue;
    margin-right: 20px;
    font-size: 18px;
    font-family: SansSerif;
  }

  .logo {
    height: 100px;
  }
</style>