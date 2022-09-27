<script setup lang="ts">
import NavComponent from "./components/NavComponent.vue";
import HeaderComponentVue from "./components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponentVue />
  <NavComponent />
  <RouterView />
</template>

<style scoped></style>
