<template>
  <div class="commentsList">
    <div v-if="comments.length === 0">
      <h4>No comments</h4>
    </div>
    <div v-for="(comment, index) in comments" :key="index" class="commentCard">
      <h5>{{ comment.content }}</h5>
      <p class="text-muted">by {{comment.user.first_name}} at {{comment.created_at | formatDate}}</p>
      <button class="btn btn-danger" v-if="comment.user_id == getUserId" @click="deleteComment(comment.id)">Delete
      </button>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {formatDate} from "../../mixins/DateMixin"

  export default {
    name: "CommentsList",
    props: ['comments'],
    mixins: [formatDate],
    computed: {
      ...mapGetters(['getUserId', 'getUserName'])
    },
    methods: {
      deleteComment(id) {
        this.$emit('commentDeleted', id);
      }
    },
  }
</script>

<style scoped>
  @import "../../styles/CommentsList.css";
</style>