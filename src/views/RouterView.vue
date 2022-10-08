<template>
  <div class="router-contain">
    <h2>router 学习</h2>
    <div class="detail-contain">
      <ul>
        <li v-for="item in items" :key="item.id" @click="gotoDetail(item)">
          <div>
            <span>{{ item.date }}</span>
            <span>---</span>
            <span>{{ item.name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const items: any[] = [
  {
    id: "00001",
    name: "跳转到详情1",
    date: "2020-12-12",
  },
  {
    id: "00002",
    name: "跳转到详情2",
    date: "2020-12-12",
  },
  {
    id: "00003",
    name: "跳转到详情3",
    date: "2020-12-12",
  },
  {
    id: "00004",
    name: "跳转到详情4",
    date: "2020-12-12",
  },
  {
    id: "00005",
    name: "跳转到详情5",
    date: "2020-12-12",
  },
  {
    id: "00006",
    name: "跳转到详情6",
    date: "2020-12-12",
  },
];
const gotoDetail = (data: any) => {
  router.push({
    name: "Detail",
    query: { id: data.id },
  });
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
