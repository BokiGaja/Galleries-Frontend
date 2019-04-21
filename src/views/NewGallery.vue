<template>
  <div style="height: 100vh; margin-top: 150px;">
    <app-show-error :error="error" :errorMessage="errorMessage"/>
    <div class="createPage">
      <h1 class="createTitle">{{editing ? 'Edit your' : 'Create New'}} Gallery</h1>
      <form @submit.prevent="submitGallery">
        <button type="button" class="btn btn-success" @click="addUrlInput">Add image
        </button>
        <button class="btn btn-primary" type="submit"  style="margin: auto 10px">{{editing ? 'Edit' : 'Create New'}} Gallery</button>
        <router-link class="btn btn-danger" type="button"
                     :to="editing ? {name: 'singleGallery', params: {id: this.$route.params.id}} : {name: 'myGalleries'}">
          Cancel
        </router-link>
        <input type="text" class="form-control createInput" placeholder="Title" v-model="credentials.title" required>
        <textarea class="form-control D" rows="3" placeholder="Description"
                  v-model="credentials.description"/>
        <div v-for="(image, index) in credentials.images" :key="index">
          <div style="display: flex; flex-direction: row">
            <div style="display: flex; flex-direction: row; align-items: center">
              <button type="button" class="btn btn-danger" @click="removeUrlInput(index)">-</button>
              <input type="text" placeholder="Image URL" class="form-control createInput"
                     v-model="credentials.images[index]" required>
              <button type="button" class="btn btn-success" v-if="index !== 0" @click="moveInput(index, 'up')">↑
              </button>
              <button type="button" class="btn btn-danger" v-if="index !== credentials.images.length - 1"
                      @click="moveInput(index, 'down')">↓
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {galleryService} from "../services/GalleryService";
  import AppShowError from '@/components/AppShowError'
  import {mapGetters} from 'vuex'
  import {catchError} from "../mixins/CatchError";

  export default {
    name: "NewGallery",
    components: {
      AppShowError
    },
    mixins: [catchError],
    data() {
      return {
        galleryId: null,
        credentials: {
          title: '',
          description: '',
          images: [''],
          user_id: 0
        },
        editing: false
      }
    },
    computed: {
      ...mapGetters(['getUserId'])
    },
    watch: {
      '$route'() {
        this.$router.go(this.$router.currentRoute)
      }
    },
    methods: {
      addUrlInput() {
        this.credentials.images.push('');
      },
      removeUrlInput(index) {
        this.credentials.images = this.credentials.images.filter((image, currIndex) => currIndex !== index);
      },
      moveInput(index, direction) {
        let currArr = [...this.credentials.images];
        if (direction === 'up') {
          const currInput = currArr[index - 1];
          currArr[index - 1] = currArr[index];
          currArr[index] = currInput;
        }
        if (direction === 'down') {
          const currInput = this.credentials.images[index + 1];
          currArr[index + 1] = currArr[index];
          currArr[index] = currInput;
        }
        this.credentials.images = [...currArr];
      },
      async submitGallery() {
        if (this.editing) {
          const data = await galleryService.editGallery(this.$route.params.id, {...this.credentials});
          if (data) {
            this.catchError(data);
          } else {
            this.$router.push('/galleries/' + this.$route.params.id);
          }
        } else {
          const data = await galleryService.createGallery({...this.credentials, user_id: parseInt(this.getUserId)});
          if (data) {
            this.catchError(data);
          } else {
            this.$router.push('/my-galleries');
          }
        }
      }
    },
    async created() {
      if (this.$route.params.id) {
        const {data} = await galleryService.getOne(this.$route.params.id);
        if (data.user_id != this.getUserId) {
          this.$router.push('/my-galleries');
        }
        this.credentials.title = data.title;
        this.credentials.description = data.description;
        this.credentials.user_id = data.user_id;
        this.credentials.images = [];
        data.pictures.forEach(picture => {
          this.credentials.images.push(picture.imageUrl);
        });
        this.editing = true;
      }
    }
  }
</script>

<style scoped>
  @import "../styles/NewGallery.css";
</style>