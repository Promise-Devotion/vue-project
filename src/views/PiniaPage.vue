<template>
  <div class="pinia-contain">
    <h2>pinia 学习</h2>
    <div>
      <p>demo1 count累增</p>
      <div>
        <div>
          <span>{{ counter.count }}</span>
        </div>
        <el-button type="primary" @click="btnclick">count++</el-button>
        <el-button type="primary" @click="btnclick2">count*2</el-button>
      </div>
      <p>demo2 公共数据</p>
      <div>
        <p>userId</p>
        <el-button @click="getUserid">获取最新userid</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
let count: number = 0;
count = counter.count;

const btnclick = () => {
  counter.increment();
};
const btnclick2 = () => {
  counter.count = counter.doubleCount;
};
const getUserid = () => {};
</script>
<style scoped lang="scss">
.pinia-contain {
  padding: 20px;
}
</style>
