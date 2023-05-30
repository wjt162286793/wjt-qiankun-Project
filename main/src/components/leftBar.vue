<template>
  <el-menu
    active-text-color="#ffd04b"
    class="el-menu-vertical-demo"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item
      v-for="item in menuList"
      :key="item.index"
      :index="item.index"
      @click="clickItem"
    >
      <span class="menuSpan">{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { menuList } from "../json/menuList.json";
export default {
  data() {
    return {
      menuList: [],
    };
  },
  created() {
    this.menuList = JSON.parse(JSON.stringify(menuList));
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      //   if (key == "1") {
      //     this.$router.push({
      //       path: "/charts",
      //     });
      //   } else if (key == "2") {
      //     this.$router.push({
      //       path: "/entity",
      //     });
      //   }
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickItem(item) {
      console.log(item, "点击的是很么");
      let menuItem = this.menuList.find((obj) => {
        return obj.index == item.index;
      });
      console.log(menuItem, "对象");
      this.$router.push({
        path: menuItem.path,
      });
    },
  },
};
</script>

<style scoped>
.menuSpan {
  font-size: 18px;
}
</style>