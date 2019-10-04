<template>
  <div>
    <div class="card mb-4">
      <div class="card-body">
        <div class="row justify-content-center align-items-center">
          <img :src="user.picture" class="profile-img" alt="Picture of `${user.name}`" />
        </div>
        <div class="row justify-content-center align-items-center">
          <h3 class="text-info h3">{{user.name}}</h3>
        </div>
      </div>
    </div>
    <div class="card mb-4">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h3 class="text-info h3 text-center">About</h3>
            <div class="text-center text-info">
              <i
                class="fa"
                :class="{'fa-chevron-up':showAbout, 'fa-chevron-down':!showAbout}"
                @click="showAbout=!showAbout"
              ></i>
            </div>
            <div v-if="showAbout">
              <p class="text-dark p text-center">{{user.about}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-4">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h3 class="text-info h3 text-center">Personal</h3>
            <div class="text-center text-info">
              <i
                class="fa"
                :class="{'fa-chevron-up':showPersonal, 'fa-chevron-down':!showPersonal}"
                @click="showPersonal=!showPersonal"
              ></i>
            </div>
            <div v-if="showPersonal">
              <Personal :personal="user.personal" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-4">
      <div class="card-body">
        <h3 class="text-info h3 text-center">Posts</h3>
        <div class="text-center text-info">
          <i
            class="fa"
            :class="{'fa-chevron-up':showPost, 'fa-chevron-down':!showPost}"
            @click="showPost=!showPost"
          ></i>
        </div>
        <div v-if="showPost">
          <Posts :posts="user.posts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from './Posts';
import Personal from './Personal';

export default {
  name: 'UserProfile',
  components: {
    Posts,
    Personal
  },
  props: ['user'],
  data() {
    return {
      showAbout: true,
      showPersonal: false,
      showPost: false
    };
  }
};
</script>

<style lang="scss" scoped>
</style>