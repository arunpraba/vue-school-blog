<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand mx-auto" to="/">{{name}}</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function() {
    return {
      name: 'People Blog',
      about: 'About'
    };
  }
};
</script>

<style lang="scss" scoped>
</style>