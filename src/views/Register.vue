<template>
  <div style="height: 100vh; margin-top: 100px">
    <app-show-error :error="error" :errorMessage="errorMessage"/>
    <div class="registerPage">
      <h1 class="registerTitle">Register page</h1>
      <form @submit.prevent="registerAndRedirect">
        <div>
          <input type="text" placeholder="First name" class="form-control registerInput"
                 v-model="credentials.first_name" required>
        </div>
        <div>
          <input type="text" placeholder="Last name" class="form-control registerInput" v-model="credentials.last_name"
                 required>
        </div>
        <div>
          <input type="email" placeholder="Email" class="form-control registerInput" v-model="credentials.email"
                 required>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" class="form-control registerInput"
                 v-model="credentials.password" required>
        </div>
        <div>
          <input type="password" placeholder="Confirm password" class="form-control registerInput"
                 v-model="credentials.password_confirmation" required>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="checked" required>
          <label class="form-check-label" for="exampleCheck1">I accept terms and coditions</label>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
  import {authService} from "../services/AuthService"
  import AppShowError from '@/components/AppShowError'
  import {mapActions} from 'vuex'

  export default {
    name: "Register",
    components: {
      AppShowError
    },
    data() {
      return {
        credentials: {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          password_confirmation: ''
        },
        checked: false,
        error: false,
        errorMessage: ''
      }
    },
    methods: {
      ...mapActions(['login']),
      async registerAndRedirect() {
        if (this.checked) {
          try {
            const data = await authService.register({...this.credentials});
            if (data) {
              this.error = true;
              this.errorMessage = data.error;
            } else {
              this.login({...this.credentials});
              this.$router.push('/');
            }
          } catch (e) {
            return e;
          }
        } else {
          this.error = true;
          this.errorMessage = "Please check and agree with our terms and conditions"
        }
      }
    },
  }
</script>

<style scoped>
  .registerPage {
    margin: auto;
    text-align: center;
    padding-top: 20px;
    background-color: whitesmoke;
    width: 300px;
    height: 450px;
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