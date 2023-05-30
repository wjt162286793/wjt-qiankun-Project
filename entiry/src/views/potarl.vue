<template>
  <el-button type="primary">主要按钮</el-button>
  <span>姓名{{ obj.name }}</span>
  <br />
  <span>年龄{{ obj.age }}</span>
</template>

<script lang="ts" setup>
import { menuList } from "../json/test.json";
import {
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  defineProps,
  nextTick,
} from "vue";
import { storeToRefs } from "pinia";
import { testData } from "../pinia/index.js";
let getData = testData();
let giveData = storeToRefs(getData);
const obj = reactive({
  name: "树哥",
  age: 20,
});
let { name, age } = toRefs(obj);
const changeData = () => {
  console.log("修改了", giveData.name.value, giveData.age.value);
  name.value = giveData.name.value;
  age.value = giveData.age.value;
};
onMounted: {
  console.log("entity应用的window", window, menuList);
  setTimeout(() => {
    changeData();
  });
  nextTick(() => {
    // changeData();
    console.log("页面更新之后");
  });
}
onUpdated: {
  // console.log("数据发生变化", test);
}
// onBeforeUnmount: {
//   window.pubsub.unsubscribe(window.pubsub.publish("test1", () => {}));
// }
</script>