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
      <app-create-comment :galleryId="galleryId" @commentCreated="updateComments"/>
    </div>
  </div>
</template>

<script>
  import {commentService} from "../../services/CommentService"
  import {mapGetters} from 'vuex'
  import {formatDate} from "../../mixins/DateMixin"
  import AppCreateComment from '@/components/Comments/AppCreateComment'

  export default {
    name: "CommentsCard",
    props: ['galleryId'],
    components: {
      AppCreateComment
    },
    data() {
      return {
        comments: [],
      }
    },
    mixins: [formatDate],
    computed: {
      ...mapGetters(['getUserId', 'getUserName', 'loggedIn'])
    },
    methods: {
      updateComments(newComment) {
        this.comments.push(newComment)
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

</style>