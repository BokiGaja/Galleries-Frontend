<template>
  <div style="height: 100vh; margin-top: 150px">
    <app-show-error :error="error" :errorMessage="errorMessage"/>
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
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import AppShowError from '@/components/AppShowError'
  import {catchError} from "../mixins/CatchError";

  export default {
    name: "Login",
    components: {
      AppShowError
    },
    mixins: [catchError],
    data() {
      return {
        credentials: {
          email: '',
          password: ''
        },
      }
    },
    methods: {
      ...mapActions(['login']),
      async loginAndRedirect() {
        const data = await this.login(this.credentials);
        if (data.error) {
          this.catchError(data);
        } else {
          this.$router.push('/');
        }
      }
    },
  }
</script>

<style scoped>
  .loginForm {
    margin: auto;
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