<template>
  <el-input v-model="str"></el-input>
  <p>值是{{ str }}</p>
  <el-button type="primary" @click="changeVal">修改值</el-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const str: string = ref("字段值");
const changeVal = () => {
  str.value = "哈哈哈";
};
</script>

<style>
</style>