<template>
  <div class="comments">
    <h2>Comments</h2>
    <hr>
    <div v-for="(comment, index) in comments" :key="index" class="commentCard">
      <h4>{{ comment.content }}</h4>
      <p class="text-muted">by {{comment.user.first_name}}</p>
    </div>
    <hr>
    <h4>Add Comment</h4>
    <form @submit.prevent="createComment">
      <textarea class="form-control inputTextarea" id="" cols="20" rows="10" v-model="credentials.content"/>
      <div class="alert alert-danger" role="alert" v-if="error" style="margin-top: 30px">
        {{ errorMessage }}
      </div>
      <button type="submit" class="btn btn-primary">Add comment</button>
    </form>
  </div>
</template>

<script>
  import {commentService} from "../services/CommentService"
  import {mapGetters} from 'vuex'

  export default {
    name: "CommentsCard",
    props: ['galleryId'],
    data() {
      return {
        comments: [],
        credentials: {
          content: '',
          gallery_id: this.galleryId,
          user_id: null
        },
        error: false,
        errorMessage: ''
      }
    },
    computed: {
      ...mapGetters(['getUserId', 'getUserName'])
    },
    methods: {
      async createComment() {
        const data = await commentService.createComment({...this.credentials, user_id: this.getUserId});
        if (data) {
          this.error = true;
          this.errorMessage = data.error;
        } else {
          this.comments.push({content: this.credentials.content, user: {first_name: this.getUserName}});
          this.credentials = {...this.credentials, content: ''};
          this.error = false;
        }
      }
    },
    async created() {
      const data = await commentService.getCommentsForGallery(this.galleryId);
      this.comments = [...data];
    }
  }
</script>

<style scoped>
  .comments {
    margin-top: 20px;
  }

  .commentCard {
    width: 200px;
    height: 100px;
    margin: 10px auto;
    border: 2px skyblue solid;
    background-color: whitesmoke;
    font-family: SansSerif;
    padding-top: 15px;
    border-radius: 20px;
  }

  .inputTextarea {
    width: 300px;
    height: 100px;
    margin: 10px auto
  }
</style>