<template>
  <div class="todolist">this is todolist page!</div>
  <div>
    <ul>
      <li v-for="item in state.arr" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
  <div>
    <button type="button" @click="getlist">点击</button>
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import { queryProse } from "../api/user";

export default {
  setup() {
    const state = reactive({
      arr: [],
    });

    function getlist() {
      // let url = `http://localhost:5000/api/users/userlist?name=jim`;
      queryProse({ name: "jim" }).then((res) => {
        console.log(res);
        state.arr = res.data;
      });
      // axios.get(url).then((res) => {
      //   console.log(res);
      //   state.arr = res.data.data;
      // });
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
