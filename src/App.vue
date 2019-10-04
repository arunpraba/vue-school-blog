<template>
  <div id="app">
    <Navbar />
    <div class="container app-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    Home,
    Navbar
  }
};
</script>

<style>
</style>
