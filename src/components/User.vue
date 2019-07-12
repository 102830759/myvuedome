<template>
  <div>
    <div>User {{ $route.params.id }}</div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "User"
  }
</script>

<style scoped>

</style>
