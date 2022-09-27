<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/home">Vue基础</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/todolist">接口调用</RouterLink>
      <RouterLink to="/pinia">Pinia学习</RouterLink>
      <RouterLink to="/router">Router学习</RouterLink>
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
