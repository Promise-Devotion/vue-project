<template>
  <div class="router-contain">
    <h2>detail</h2>
    <div>
      <el-button @click="goback">返回</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
let route = useRoute();
let router = useRouter();
onBeforeMount(() => {
  console.log(route.query);
  let id = route.query && route.query.id ? route.query.id : "";
  console.log(id);
});
const goback = () => {
  router.go(-1);
};
</script>
<style scoped lang="scss">
.router-contain {
  padding: 20px;
  h2 {
    font-size: 30px;
  }
  .detail-contain {
    ul {
      li {
        margin: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
