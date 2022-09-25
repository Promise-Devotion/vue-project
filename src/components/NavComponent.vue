<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/todolist">todolist</RouterLink>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<style scoped lang="scss">
.wrapper {
  padding: 10px;
  nav {
    a {
      margin: 8px 10px;
    }
  }
}
</style>
