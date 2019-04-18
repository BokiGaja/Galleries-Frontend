<template>
  <div class="authLinks">
    <div class="authBox">
      <router-link :to="{name: 'login'}" v-if="!loggedIn" class="nav-link navLink" active-class="active"
      >Login
      </router-link>
    </div>
    <div class="authBox">
      <router-link :to="{name: 'register'}" v-if="!loggedIn" class="nav-link navLink" active-class="active"
      >Register
      </router-link>
    </div>
    <div class="authBox">
      <button class="btn btn-outline-info btn-rounded waves-effect" type="button" v-if="loggedIn" @click="logoutAndRedirect">
        Logout({{getUserName}})
      </button>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "AuthLinks",
    computed: {
      ...mapGetters(['loggedIn', 'getUserName'])
    },
    methods: {
      ...mapActions(['logout']),
      async logoutAndRedirect() {
        await this.logout();
        this.$router.go('/');
      }
    },
  }
</script>

<style scoped>
  .authLinks {
    position: absolute;
    right: 0;
  }

  .authBox {
    float: left;
    margin-top: 60px;
  }

  .navButton {
    color: black;
    height: 40px;
    background-color: skyblue;
    margin-right: 20px;
    font-size: 18px;
    font-family: SansSerif;
  }

  .navLink {
    color: grey;
    font-weight: bold;
    font-family: Arial;
    margin-left: 30px;
    font-size: 18px;
  }

  .active {
    border-bottom: grey 3px solid;
  }
</style>