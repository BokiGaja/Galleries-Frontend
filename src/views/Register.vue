<template>
  <div class="registerPage">
    <h1 class="registerTitle">Register page</h1>
    <form @submit.prevent="registerAndRedirect">
      <div>
        <input type="text" placeholder="First name" class="form-control registerInput" v-model="credentials.first_name">
      </div>
      <div>
        <input type="text" placeholder="Last name" class="form-control registerInput" v-model="credentials.last_name">
      </div>
      <div>
        <input type="email" placeholder="Email" class="form-control registerInput" v-model="credentials.email">
      </div>
      <div>
        <input type="password" placeholder="Password" class="form-control registerInput" v-model="credentials.password">
      </div>
      <div>
        <input type="password" placeholder="Confirm password" class="form-control registerInput"
               v-model="credentials.password_confirmation">
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <div class="alert alert-danger" role="alert" v-if="error" style="margin-top: 30px">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {authService} from "../services/AuthService";

  export default {
    name: "Register",
    data() {
      return {
        credentials: {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          password_confirmation: ''
        },
        error: false,
        errorMessage: ''
      }
    },
    methods: {
      async registerAndRedirect() {
        try {
          const data = await authService.register({...this.credentials});
          if (data) {
            this.error = true;
            this.errorMessage = data.error;
          } else {
            this.$router.push('/');
          }
        } catch (e) {
          return e;
        }
      }
    },
  }
</script>

<style scoped>
  .registerPage {
    margin: 150px auto;
    text-align: center;
    padding-top: 20px;
    background-color: whitesmoke;
    width: 300px;
    height: 420px;
    border: 3px skyblue solid;
    border-radius: 20px;
  }

  .registerTitle {
    padding: 20px;
    font-style: italic;
    font-family: SansSerif;
  }

  .registerInput {
    width: 250px;
    margin: 10px auto;
  }
</style>