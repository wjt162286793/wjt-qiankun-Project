<template>
  <div>
    <p>第{{ year }}年</p>
    <p>姓名:{{ user.nickname }}</p>
    <p>年龄:{{ user.age }}</p>
    <el-button @click="add" type="primary">增加</el-button>
    <div></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch } from "vue";
export default defineComponent({
  setup() {
    const year = ref(0);
    const user = reactive({
      nickname: "wjt",
      age: 26,
      gender: "男",
    });
    function add() {
      year.value++;
      console.log(window.shiyanshuju, "全局数据");
    }
    // setInterval(() => {
    //   year.value++; //ref代理的值,用value来获取
    //   user.age++; //reactie代理的对象,可以直接点属性
    // }, 1000);
    watch([() => user.age], ([curAge, newVal], [preAge, oldVal]) => {
      console.log("新值:", curAge, "老值:", preAge);
      console.log("新值:", newVal, "老值:", oldVal);
    });
    watch(
      () => year.value,
      (curAge, preAge) => {
        console.log("新值:", curAge, "老值:", preAge);
      }
    );
    return {
      year,
      user, //常规
      ...toRefs(user), //可以将user里面的每一个属性都变成响应式的
      add,
    };
  },
});
</script>