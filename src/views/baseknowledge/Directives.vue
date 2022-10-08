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
      <div class="item">
        <p>
          v-for# 我们可以使用 v-for 指令基于一个数组来渲染一个列表。v-for
          指令的值需要使用 item in items 形式的特殊语法，其中 items
          是源数据的数组，而 item 是迭代项的别名：
        </p>
      </div>
      <div class="item">
        <p>
          v-for 与对象 你也可以使用 v-for
          来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 Object.keys()
          的返回值来决定。 可以通过提供第二个参数表示属性名 (例如 key)：
          template
          <!-- <li v-for="(value, key) in myObject">
						{{ key }}: {{ value }}
					</li> -->
        </p>
      </div>
      <div class="item">
        <p>
          在 v-for 里使用范围值# v-for
          可以直接接受一个整数值。在这种用例中，会将该模板基于 1...n
          的取值范围重复多次。 template span v-for="n in 10"> n span 注意此处 n
          的初值是从 1 开始而非 0
        </p>
      </div>
      <div class="item">
        通过 key 管理状态# Vue 默认按照“就地更新”的策略来更新通过 v-for
        渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM
        元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。
        默认模式是高效的，但只适用于列表渲染输出的结果不依赖子组件状态或者临时
        DOM 状态 (例如表单输入值) 的情况。 为了给 Vue
        一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的
        key attribute： template div v-for="item in items" :key="item.id">
        <!-- 内容 -->
        div
      </div>
      <div class="item">
        <h4>数组变化侦测</h4>
        <p>
          变更方法# Vue
          能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。这些变更方法包括：
          push() pop() shift() unshift() splice() sort() reverse()
        </p>
        <p>替换一个数组</p>
        <p>
          变更方法，顾名思义，就是会对调用它们的原数组进行变更。相对地，也有一些不可变
          (immutable) 方法，例如 filter()，concat() 和
          slice()，这些都不会更改原数组，而总是返回一个新数组。当遇到的是非变更方法时，我们需要将旧的数组替换为新的：
          js this.items = this.items.filter((item) => item.message.match(/Foo/))
        </p>
        <p>
          在计算属性中使用 reverse() 和 sort()
          的时候务必小心！这两个方法将变更原始数组，计算函数中不应该这么做。请在调用这些方法之前创建一个原数组的副本：
          diff - return numbers.reverse() + return [...numbers].reverse()
        </p>
      </div>
      <div class="item">
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
  height: 90vh;
  overflow-y: auto;
  h2 {
    font-size: 40px;
  }
  .item {
    margin: 10px 0;
    border-bottom: 2px solid #e0e0e0;
    padding: 10px 0;
  }
}
</style>
