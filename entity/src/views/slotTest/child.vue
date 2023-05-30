
<template>
  <div>
    <slot name="one">1111</slot>
    <br />
    <slot name="two">2222</slot>
    <br />
    <slot name="three">3333</slot>
    <br />
    <slot personName="xiaoyue" age="18"></slot>
    <br />
    <el-button @click="back">返回首页</el-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import router from "../../router";
import store from "../../store";
const back = () => {
  router.push({
    path: "/entity",
  });
};
onMounted(() => {
  console.log(router, "路由");
  let userInfo = JSON.parse(JSON.stringify(store.state));
  console.log(userInfo.user.userInfo, "状态管理");
});
</script>

<style  scoped>
</style>
