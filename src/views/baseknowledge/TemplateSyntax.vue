<template>
  <div class="template-syntax">
    <h2>template-syntax</h2>
    <div>
      <p>
        最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：
      </p>
      <div>
        <span>Message: {{ msg }}</span>
      </div>
      <br />
      <p>
        原始 HTML 双大括号会将数据解释为纯文本，而不是 HTML。若想插入
        HTML，你需要使用 v-html 指令
      </p>
      <div>
        <p>
          Using v-html directive:
          <span v-html="rawHtml"></span>
        </p>
      </div>
      <h4>Attribute 绑定</h4>
      <p>
        双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个
        attribute，应该使用 v-bind 指令： 简写（：attribute）
      </p>
      <div>
        <div v-bind:id="dynamicId">v-bind:id="dynamicId"</div>
        <div :id="dynamicId">:id="dynamicId"</div>
      </div>
      <h4>动态绑定多个值</h4>
      <p>如果你有像这样的一个包含多个 attribute 的 JavaScript 对象：</p>
      <div>
        data() { return { objectOfAttrs: { id: 'container', class: 'wrapper' } }
        }
        <div v-bind="objectOfAttrs">v-bind="objectOfAttrs"</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const msg = "hello vue3";
const rawHtml = `<strong style="color: red">hello html</strong>`;
const dynamicId = "123";
const objectOfAttrs = { id: "container", class: "wrapper" };
</script>
<style scoped lang="scss">
.template-syntax {
  padding: 20px;
  h2 {
    font-size: 40px;
  }
  .red {
    color: red;
  }
}
</style>
