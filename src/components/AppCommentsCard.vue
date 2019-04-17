<template>
  <div class="comments">
    <h2>Comments</h2>
    <hr>
    <div v-for="(comment, index) in comments" :key="index" class="commentCard">
      <h4>{{ comment.content }}</h4>
      <p class="text-muted">by {{comment.user.first_name}} {{comment.user.last_name}}</p>
    </div>
  </div>
</template>

<script>
  import {commentService} from "../services/CommentService";

  export default {
    name: "CommentsCard",
    props: ['galleryId'],
    data() {
      return {
        comments: []
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
</style>