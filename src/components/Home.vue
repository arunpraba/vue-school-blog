<template>
  <div>
    <div class="d-flex flex-wrap row">
      <div class="card-columns">
        <div v-for="list in lists" :key="list.id">
          <User :list="list" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from './User';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    User
  },
  data: function() {
    return {
      lists: [],
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
      axios;
      axios.get(this.fetchUrl).then(res => {
        this.lists = res.data;
      });
    }
  }
};
</script>


<style scoped>
</style>
