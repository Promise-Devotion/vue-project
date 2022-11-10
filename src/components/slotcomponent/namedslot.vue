<template>
  <slot>
    <div class="named-slot">
      <p>具名插槽</p>
    </div>
  </slot>
  <slot name="demo2"></slot>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.named-slot {
  color: red;
}
</style>
