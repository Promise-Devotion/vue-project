<template>
  <div class="directives">
    <h2>指令 Directives</h2>
    <div>
      <p>
        指令是带有 v- 前缀的特殊 attribute。Vue 提供了许多内置指令，指令
        attribute 的期望值为一个 JavaScript 表达式
        (除了少数几个例外，即之后要讨论到的 v-for、v-on 和
        v-slot)。一个指令的任务是在其表达式的值变化时响应式地更新 DOM。以 v-if
        为例：
      </p>
      <div>
        <p>这里，v-if 指令会基于表达式 seen 的值的真假来移除/插入该元素。</p>
      </div>
      <div>
        <p>Has published books:</p>
        <span>{{ publishedBooksMessage }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
const books = ref([
  {
    name: "a",
  },
  {
    name: "b",
  },
]);
const publishedBooksMessage = computed(() => {
  return books.value.length > 0 ? "Yes" : "No";
});
</script>
<style scoped lang="scss">
.directives {
  padding: 20px;
  h2 {
    font-size: 40px;
  }
}
</style>
