<template>
  <div>
    <div class="card">
      <img class="card-img-top" :src="list.picture" alt="Card image cap" />
      <div class="card-body">
        <h3 class="card-title">{{list.name}}</h3>
        <p class="card-text">{{list.about}}</p>
      </div>
      <div class="card-body">
        <p class="card-sub-title muted" v-if="list.posts.length>0">Posts</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="post in list.posts" :key="post.id">
            <b>{{post.title | capitalize}}</b>
          </li>
        </ul>
      </div>

      <div class="card-body">
        <p class="card-sub-title muted">Friends</p>
        <span
          class="btn btn-outlined btn btn-info btn-sm mr-2 mb-1"
          v-for="friend in list.friends"
          :key="friend.id"
        >{{friend.name}}</span>
      </div>
      <div class="card-body">
        <p class="card-sub-title muted">Tags</p>
        <span
          class="badge badge-pill badge-info mr-2"
          v-for="(tag, index) in list.tags"
          :key="index"
        >{{tag}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['list'],
  filters: {
    capitalize: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.list-group-item {
  cursor: pointer;
}
</style>


