<template>
  <!-- 子组件 -->
  <child-components
    :list="list"
    @add="changeVal"
    :valsend="Val"
    ref="childComs"
  ></child-components>
  <!-- 父组件 -->
  <component :is="child1"></component>
  <div class="child-wrap input-group">
    <input
      v-model="value"
      type="text"
      class="form-control"
      placeholder="请输入"
    />
    <div class="input-group-append">
      <button @click="handleAdd" class="btn btn-primary">添加</button>
      <el-button type="primary" @click="sendFun">调用方法</el-button>
    </div>
  </div>
  子组件同步<input type="text" v-model="Val" @input="getVal" />
</template>
<script lang="ts" setup>
import { onMounted, ref, toRaw } from "vue";
import ChildComponents from "./child.vue";
import child1 from "./child1.vue";
const list = ref(["JavaScript", "HTML", "CSS"]);
const Val = ref("哈哈");
const value = ref("");
// add 触发后的事件处理函数
const handleAdd = () => {
  list.value.push(value.value);
  value.value = "";
};
const changeVal = (val: string) => {
  Val.value = val;
};
const childComs = ref<InstanceType<typeof Children>>();
const getVal = () => {
  console.log(Val.value, "是什么");
  ("[p");
  console.log(childComs.value, "子组件");
};
const sendFun = () => {
  console.log(childComs, "组件是什么");
  //   let obj = JSON.parse(JSON.stringify(childComs.value));
  childComs.value.sendVal("111");
};
onMounted(() => {});
</script>
