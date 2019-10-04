<template>
  <div>
    <div class="card-columns">
      <div class="card" v-for="post in posts" :key="post.id">
        <Post :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import Post from './Post';

export default {
  name: 'Posts',
  components: {
    Post
  },
  props: ['posts']
};
</script>

<style lang="scss" scoped>
</style>