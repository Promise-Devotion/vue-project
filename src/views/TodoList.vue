<template>
  <div class="todolist">this is todolist page!</div>
  <div>
    <ul>
      <li v-for="item in state.arr" :key="item.bill_id">
        {{ item.bill_name }}
      </li>
    </ul>
  </div>
  <div>
    <button type="button" @click="getlist">点击</button>
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import billService from "../api/bill";

export default {
  setup() {
    const state = reactive<StateConfig>({
      arr: [],
    });
    interface StateConfig {
      arr: Item[];
    }
    interface Item {
      bill_id: string;
      bill_name: string;
    }
    function getlist() {
      // let url = `http://localhost:5000/api/users/userlist?name=jim`;
      billService.getBillList({ id: "1235" }).then((res) => {
        console.log(res);
        state.arr = res.data;
        console.log(res.data);
      });
    }

    return {
      state,
      getlist,
    };
  },
};
</script>

<style scoped>
.todolist {
  padding: 10px;
}
</style>
