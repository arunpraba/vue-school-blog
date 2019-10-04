<template>
  <div>
    <ul class="list-group list-group-flush">
      <li class="text-center list-group-item" v-for="(p, k, i) of personal" :key="i">
        <span class="text-info">{{k | capitalize}}</span> :
        <span class="text-dark">{{p | capitalize}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Personal',
  props: ['personal']
};
</script>

<style lang="scss" scoped>
</style>