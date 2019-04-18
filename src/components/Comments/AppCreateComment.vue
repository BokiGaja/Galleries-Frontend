<template>
  <div>
    <h4>Add Comment</h4>
    <form @submit.prevent="createComment">
        <textarea class="form-control inputTextarea" id="" cols="20" rows="10" v-model="credentials.content" required
                  maxlength="1000" style="height: 100px; margin: 10px auto"/>
      <div class="alert alert-danger" role="alert" v-if="error" style="margin-top: 30px">
        {{ errorMessage }}
      </div>
      <button type="submit" class="btn btn-primary">Add comment</button>
    </form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {commentService} from "../../services/CommentService";

  export default {
    name: "AddComment",
    props: ['galleryId'],
    data() {
      return {
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
      ...mapGetters(['getUserId', 'getUserName', 'loggedIn'])
    },
    methods: {
      async createComment() {
        const data = await commentService.createComment({...this.credentials, user_id: this.getUserId});
        if (data) {
          this.error = true;
          this.errorMessage = data.error;
        } else {
          const newComment = {content: this.credentials.content, user: {first_name: this.getUserName}};
          this.$emit('commentCreated', newComment);
          this.credentials = {...this.credentials, content: ''};
          this.error = false;
        }
      },
    },
  }
</script>