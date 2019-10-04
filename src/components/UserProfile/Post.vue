<template>
  <div>
    <div class="card-body">
      <h5 class="card-title">{{post.title | capitalize }}</h5>
      <p class="card-text">
        <small class="text-muted">{{post.date}}</small>
      </p>
      <p class="card-text">{{post.post}}</p>
    </div>

    <div class="card-footer bg-transparent border-success">
      <div class="row justify-content-between">
        <div class="col pointer">
          <i class="fa fa-heart text-danger" aria-hidden="true"></i>
          <span class="text-muted ml-1" @click="post.likes++">{{post.likes}}</span>
        </div>
        <div class="col pointer" @click="showComments = !showComments">
          <i class="fa fa-comment" aria-hidden="true"></i>
          <span class="text-muted ml-1">{{post.comments.length}}</span>
        </div>
      </div>

      <ul v-if="showComments" class="list-group mt-1">
        <li class="list-group-item" v-for="comment in post.comments" :key="comment.id">
          <p class="text-info">{{comment.postedBy}}</p>
          <p>{{comment.comment}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'],
  data() {
    return {
      showComments: false
    };
  }
};
</script>

<style lang="scss" scoped>
</style>