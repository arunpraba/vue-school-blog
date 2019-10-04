<template>
  <div>
    <UserProfile :user="user" />
  </div>
</template>

<script>
import axios from 'axios';
import UserProfile from './UserProfile/UserProfile';

export default {
  name: 'AboutUser',
  components: {
    UserProfile
  },
  data() {
    return {
      userId: this.$route.params.id,
      fetchUrl:
        'https://gist.githubusercontent.com/arunprabak/b3aab2e9601c440babbbaed5201c8e4f/raw/18fe6a1700a45d30990a202039785684a704212b/people.json',
      user: {}
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
        this.user = res.data.find(el => el.id === this.userId);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>