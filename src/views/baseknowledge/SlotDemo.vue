<template>
  <div class="slot-contain">
    <h3>slot demo</h3>
    <div>
      <h4>demo1 默认插槽</h4>
      <div>
        <defaultslotVue />
      </div>
      <h4>demo2 具名插槽</h4>
      <div>
        <namedslotVue>
          <template #demo2></template>
          <template>
            <div>hello</div>
          </template>
        </namedslotVue>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import defaultslotVue from "@/components/slotcomponent/defaultslot.vue";
import namedslotVue from "@/components/slotcomponent/namedslot.vue";
</script>
<style scoped lang="scss">
.slot-contain {
  padding: 20px;
  h3 {
    text-align: center;
  }
}
</style>
