<template>
  <div class="event">
    <h2>事件处理</h2>
    <div class="contain">
      <div>
        <p>
          监听事件# 我们可以使用 v-on 指令 (简写为 @) 来监听 DOM
          事件，并在事件触发时执行对应的
          JavaScript。用法：v-on:click="methodName" 或 @click="handler"。
          事件处理器的值可以是： 内联事件处理器：事件被触发时执行的内联
          JavaScript 语句 (与 onclick 类似)。
          方法事件处理器：一个指向组件上定义的方法的属性名或是路径。
        </p>
        <div>
          内联事件处理器# 内联事件处理器通常用于简单场景，例如： data() { return
          { count: 0 } } button @click="count++"> Add 1 button p>Count is: count
          p
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.event {
  h2 {
    font-size: 40px;
  }
  padding: 20px;
}
</style>
