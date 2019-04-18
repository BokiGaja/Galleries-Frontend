<template>
  <div class="comments">
    <h2>Comments</h2>
    <hr>
    <app-comments-list :comments="comments" @commentDeleted="deleteComment"/>
    <hr>
    <div v-if="loggedIn">
      <app-create-comment :galleryId="galleryId" @commentCreated="updateComments"/>
    </div>
  </div>
</template>

<script>
  import {commentService} from "../../services/CommentService"
  import {mapGetters} from 'vuex'
  import AppCreateComment from '@/components/Comments/AppCreateComment'
  import AppCommentsList from '@/components/Comments/AppCommentsList'

  export default {
    name: "CommentsCard",
    props: ['galleryId'],
    components: {
      AppCreateComment,
      AppCommentsList
    },
    data() {
      return {
        comments: [],
      }
    },
    computed: {
      ...mapGetters(['loggedIn'])
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

</style>