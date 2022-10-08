<template>
  <div>
    <span>{{ counter.count }}</span>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
</script>
<style></style>
