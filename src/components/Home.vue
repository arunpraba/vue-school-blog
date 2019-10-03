<template>
  <div>
    <div class="container app-container">
      <div class="d-flex flex-wrap row">
        <div class="card-columns">
          <div v-for="list in lists" :key="list.id">
            <!-- <div class="card">
              <img class="card-img-top" :src="list.picture" alt="Card image cap" />
              <div class="card-body">
                <h3 class="card-title">{{list.name}}</h3>
                <p class="card-text">{{list.about}}</p>
              </div>
              <div class="card-body bg-warning">
                <h5 class="card-title text-center" v-if="list.posts.length>0">Posts</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="post in list.posts" :key="post.id">
                  <b>{{post.title | capitalize}}</b>
                </li>
              </ul>

              <div class="card-body">
                <span
                  class="badge badge-pill badge-info mr-2"
                  v-for="(tag, index) in list.tags"
                  :key="index"
                >{{tag}}</span>
              </div>
            </div>-->
            <User :list="list" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from './User';
import lists from '../data.json';

export default {
  name: 'Home',
  components: {
    User
  },
  data: function() {
    return {
      lists
    };
  }
};
</script>


<style scoped>
</style>
