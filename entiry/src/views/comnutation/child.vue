<template>
  <ul class="parent list-group">
    <li class="list-group-item" v-for="i in props.list" :key="i">{{ i }}</li>
    子组件传值:<input type="text" v-model="props.valsend" @input="changeVal" />
  </ul>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch, defineExpose } from "vue";
const value = ref("");
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  valsend: {
    type: String,
    default: () => "hi嗯哼IE",
  },
});
watch(value, (val) => {});
const emits = defineEmits(["add"]);
const changeVal = (target: Object) => {
  value.value = target.srcElement.value;
  emits("add", value.value);
};
const sendVal = (one: string) => {
  value.value = "用ref方法改了";
  console.log("子组件被处罚", one);
};
defineExpose({ sendVal });
</script>
