<template>
  <div>
    <h3>Post</h3>
    <h3>{{userId}}</h3>
    <h3>{{postId}}</h3>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PostFullView',
  data() {
    return {
      userId: this.$route.params.userId,
      postId: this.$route.params.id,
      user: {},
      post: {},
      fetchUrl:
        'https://gist.githubusercontent.com/arunprabak/b3aab2e9601c440babbbaed5201c8e4f/raw/18fe6a1700a45d30990a202039785684a704212b/people.json'
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      axios.get(this.fetchUrl).then(res => {
        // this.user = res.data.find(el => el.id === this.userId);
        // this.post = this.user.find(post => post.id === this.post);
        // console.log(this.user);
        // console.log(this.post);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>