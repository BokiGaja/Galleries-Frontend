<template>
  <div class="comments">
    <h2>Comments</h2>
    <hr>
    <div v-for="(comment, index) in comments" :key="index" class="commentCard">
      <h5>{{ comment.content }}</h5>
      <p class="text-muted">by {{comment.user.first_name}} at {{comment.created_at | formatDate}}</p>
      <button class="btn btn-danger" v-if="comment.user_id == getUserId" @click="deleteComment(comment.id)">Delete
      </button>
    </div>
    <hr>
    <div v-if="loggedIn">
      <h4>Add Comment</h4>
      <form @submit.prevent="createComment">
        <textarea class="form-control inputTextarea" id="" cols="20" rows="10" v-model="credentials.content" required
                  maxlength="7"/>
        <div class="alert alert-danger" role="alert" v-if="error" style="margin-top: 30px">
          {{ errorMessage }}
        </div>
        <button type="submit" class="btn btn-primary">Add comment</button>
      </form>
    </div>
  </div>
</template>

<script>
  import {commentService} from "../services/CommentService"
  import {mapGetters} from 'vuex'
  import {formatDate} from "../mixins/DateMixin";

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
    mixins: [formatDate],
    computed: {
      ...mapGetters(['getUserId', 'getUserName', 'loggedIn'])
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
      },
      async deleteComment(id) {
        if (confirm('Click ok to delete this comment or cancel this action')) {
          try {
            await commentService.deleteComment(id);
            this.comments = this.comments.filter(comment => comment.id !== id);
          } catch (e) {
            return e
          }
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
    width: 300px;
    height: 130px;
    margin: 10px auto;
    border: 2px skyblue solid;
    background-color: whitesmoke;
    font-family: SansSerif;
    padding-top: 15px;
    border-radius: 20px;
    overflow: auto;
  }

  .inputTextarea {
    width: 300px;
    height: 100px;
    margin: 10px auto
  }
</style>