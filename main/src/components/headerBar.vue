<template>
  <div class="headMain">
    <div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
        :ellipsis="false"
      >
        <el-menu-item
          v-for="(item, index) in menuList"
          :key="index"
          :index="index + ''"
          >{{ item.cname }}</el-menu-item
        >
      </el-menu>
    </div>
    <div class="otherBar">
      <el-icon class="themeIcon" @click="openThemeChoose"><Tools /></el-icon>
      <span class="userName">ocean</span>
      <el-icon><User /></el-icon>
    </div>
    <el-dialog v-model="dialogVisible" title="主题选择" width="700px">
      <ul class="themeBox">
        <li
          v-for="(item, index) in themeList"
          :key="index"
          class="themeLi"
          @click="changeColor(item)"
        >
          <div
            :style="{ background: item.value }"
            :class="!item.choose ? 'colorBox' : 'colorBox-choose'"
          ></div>
          <span>{{ item.label }}</span>
        </li>
      </ul>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="changeTheme"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import themeList from "../data/theme.js";
import { menuList } from "../json/menuList.json";
export default {
  data() {
    return {
      activeIndex2: "1",
      themeValue: "",
      dialogVisible: false,
      menuList: [],
      themeList: themeList,
    };
  },
  created() {
    if (localStorage.getItem("DItheme")) {
      this.themeValue = localStorage.getItem("DItheme");
      document.body.dataset.theme = this.themeValue;
      this.menuList = JSON.parse(JSON.stringify(menuList));
      console.log(this.menuList, "菜单列表");
    } else {
      localStorage.setItem("DItheme", "red");
      document.body.dataset.theme = "red";
      this.themeValue = "red";
    }
    console.log(this.themeValue, "选定的值");
    themeList.forEach((val) => {
      if (val.name == this.themeValue) {
        console.log(val, this.themeValue, "这两个是啥");
        val.choose = true;
      }
    });
  },
  mounted() {
    // this.changeTheme();
    console.log(window, "主应用上的window");
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    changeColor(item) {
      // console.log(item);
      this.themeValue = item.name;
      this.themeList.map((Val) => {
        Val.choose = false;
      });
      this.themeList.forEach((val) => {
        if (item.value === val.value) {
          val.choose = true;
        }
      });
    },
    changeTheme() {
      // console.log("修改");
      this.dialogVisible = false;
      document.body.dataset.theme = this.themeValue;
      localStorage.setItem("DItheme", this.themeValue);
    },
    openThemeChoose() {
      this.dialogVisible = true;
    },
  },
};
</script>
<style scoped>
.headMain {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-menu--horizontal > .el-menu-item {
  min-height: 80px;
  height: 100px;
}
.el-icon {
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  margin-right: 40px;
  margin-left: 10px;
}
.themeLi {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  float: left;
  cursor: pointer;
}
/* .themeBox {
  
} */
.otherBar {
  display: flex;
}
.colorBox {
  width: 50px;
  height: 50px;
}
.colorBox-choose {
  width: 60px;
  height: 60px;
}
.el-dialog > .el-dialog__header {
  min-height: 0px !important;
  height: 0px !important;
}
.userName {
  color: #fff;
}
</style>
