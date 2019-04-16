<template>
  <div class="createPage">
    <h1 class="createTitle">Create new Gallery</h1>
    <form @submit.prevent="createNewGallery">
      <input type="text" class="form-control createInput" placeholder="Title" v-model="credentials.title">
      <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Description"
                v-model="credentials.description"/>
      <button class="btn btn-primary" type="submit">Add Gallery</button>
      <router-link class="btn btn-danger" :to="{name: 'myGalleries'}">Cancel</router-link>
    </form>
    <div class="alert alert-danger" role="alert" v-if="error" style="margin-top: 30px">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
  import {galleryService} from "../services/GalleryService";
  import {mapGetters} from 'vuex'

  export default {
    name: "NewGallery",
    data() {
      return {
        credentials: {
          title: '',
          description: '',
          user_id: 0
        },
        error: false,
        errorMessage: ''
      }
    },
    computed: {
      ...mapGetters(['getUserId'])
    },
    methods: {
      async createNewGallery() {
        const data = await galleryService.createGallery({...this.credentials, user_id: parseInt(this.getUserId)});
        if (data) {
          this.error = true;
          this.errorMessage = data.error;
        } else {
          this.$router.push('/my-galleries');
        }
      }
    },
  }
</script>

<style scoped>
  .createPage {
    margin: 150px auto;
    text-align: center;
    padding-top: 20px;
    background-color: whitesmoke;
    width: 300px;
    height: 450px;
    border: 3px skyblue solid;
    border-radius: 20px;
  }

  .createTitle {
    padding: 20px;
    font-style: italic;
    font-family: SansSerif;
  }

  .createInput {
    width: 250px;
    margin: 10px auto;
  }
</style>