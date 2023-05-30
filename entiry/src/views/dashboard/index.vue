<template>
  <el-button
    type="primary"
    v-for="(item, index) in MenuList"
    :key="index"
    @click="jumpPage(item)"
    >{{ item.cname }}</el-button
  >
</template>

<script lang="ts" setup>
import { onMounted, reactive, toRaw } from "vue";
import constantRoutes from "../../router/constantRoutes";
import store from "../../store/index";
import router from "../../router/index";
import { useRouter, useRoute } from "vue-router";
const MenuList: Array = reactive([]);

const userInfo: Object = JSON.parse(JSON.stringify(store.state.user.userInfo));
const jumpPage = (item: Object) => {
  router.push(item.path);
};
// const route = JSON.parse(JSON.stringify(useRoute()));
const route = toRaw(useRoute());
onMounted(() => {
  console.log(userInfo, route.path.value, "个人信息呢");
  console.log(import.meta.env.VITE_SOME_STATE, "变量值");
  userInfo.menuRole.forEach((item: string, index: number) => {
    constantRoutes.forEach((val: Object, index: number) => {
      if (item === val.name) {
        MenuList.push(val);
      }
    });
  });
});
</script>
<style>
</style>