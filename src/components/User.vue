<template>
  <div>
    <div class="card">
      <img class="card-img-top" :src="list.picture" alt="Card image cap" />
      <div class="card-body">
        <router-link class="h3 text-info pointer" :to="`/user/${list.id}`">{{list.name}}</router-link>
        <p class="card-text">{{list.about}}</p>
      </div>
      <div class="card-body">
        <p class="card-sub-title muted" v-if="list.posts.length>0">Posts</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="post in list.posts" :key="post.id">
            <router-link :to="`/post/${list.id}/${post.id}`">
              <b>{{post.title | capitalize}}</b>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="card-body">
        <p class="card-sub-title muted">Friends</p>
        <button
          class="btn btn-outlined btn btn-info btn-sm mr-2 mb-1"
          v-for="friend in list.friends"
          :key="friend.id"
        >{{friend.name}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'User',
  props: ['list'],
  data() {
    return {
      lists: [],
      frinedProfile: {},
      fetchUrl:
        'https://gist.githubusercontent.com/arunprabak/b3aab2e9601c440babbbaed5201c8e4f/raw/18fe6a1700a45d30990a202039785684a704212b/people.json'
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  created() {
    this.fetchData();
  },
  computed: {
    onSale() {
      return 'OnSale';
    }
  },
  methods: {
    fetchData() {
      axios.get(this.fetchUrl).then(res => {
        this.lists = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.list-group-item {
  cursor: pointer;
}
</style>


