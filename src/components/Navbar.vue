<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand mx-auto" href="/">{{name}}</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function() {
    return {
      name: 'School Blog'
    };
  }
};
</script>

<style lang="scss" scoped>
</style>