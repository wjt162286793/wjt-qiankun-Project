<template>
  <child>
    <template #one> </template>
    <template #two> </template>
    <template #three> </template>
  </child>
  <child v-slot="slotProps">
    My name is {{ slotProps.personName }} and I am {{ slotProps.age }} years old
    this year
  </child>
</template>

<script lang="ts" setup>
import child from "./child.vue";
</script>

<style  scoped>
</style>
