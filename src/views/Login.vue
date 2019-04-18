<template>
  <div style="height: 100vh">
    <div class="loginForm">
      <h1 class="loginTitle">Login</h1>
      <form @submit.prevent="loginAndRedirect">
        <div>
          <input type="email" class="form-control loginInput" placeholder="email" v-model="credentials.email">
        </div>
        <div>
          <input type="password" class="form-control loginInput" placeholder="password" v-model="credentials.password">
        </div>
        <button type="submit" class="btn btn-primary">Log in</button>
      </form>
      <div class="alert alert-danger" role="alert" v-if="error" style="margin-top: 20px">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "Login",
    data() {
      return {
        credentials: {
          email: '',
          password: ''
        },
        error: false,
        errorMessage: ''
      }
    },
    methods: {
      ...mapActions(['login']),
      async loginAndRedirect() {
        const loginError = await this.login(this.credentials);
        if (loginError) {
          this.error = true;
          this.errorMessage = loginError;
        } else {
          this.$router.push('/');
        }
      }
    },
  }
</script>

<style scoped>
  .loginForm {
    margin: 150px auto;
    text-align: center;
    padding-top: 20px;
    background-color: whitesmoke;
    width: 300px;
    height: 270px;
    border: 3px skyblue solid;
    border-radius: 20px;
  }

  .loginTitle {
    padding: 20px;
    font-style: italic;
    font-family: SansSerif;
  }

  .loginInput {
    width: 250px;
    margin: 10px auto;
  }
</style>