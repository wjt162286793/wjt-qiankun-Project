<template>
  <div class="box">
    <div class="layout">
      <aside>
        <div class="logo">
          <h1>DI大数据平台</h1>
        </div>
        <LeftBar></LeftBar>
      </aside>
      <div class="content">
        <div class="header">
          <HeaderBar />
          <!-- header
          <br />
          <router-link to="/">主应用</router-link>
          <br />
          <router-link to="/charts">跳转到子应用1</router-link>
          <router-link to="/entity">跳转到子应用2</router-link> -->
        </div>
        <article>
          <router-view></router-view>
          <div id="container"></div>
        </article>
        <!-- <footer>footer</footer> -->
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from "./components/headerBar.vue";
import LeftBar from "./components/leftBar.vue";
export default {
  name: "App",
  components: {
    HeaderBar,
    LeftBar,
  },
};
</script>
<style>
.layout {
  display: flex;
  flex-flow: row;
  height: 100%;
}

.layout aside {
  background-color: var(--background-color1);
  width: 180px;
  position: relative;
}
.layout aside .logo {
  /* background-color: red; */
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-h1-color);
  min-height: 80px;
  height: 98px;
  border-bottom: 2px solid var(--border-color);
  border-right: 2px solid var(--border-color);
  width: 178px;
}
.logo h1 {
  font-size: 26px;
}
.layout .content {
  display: flex;
  flex: 1 0 auto;
  flex-flow: column;
  height: 100vh;
}

.layout article {
  flex: 1 0 auto;
}

.layout .header {
  min-height: 80px;
  height: 100px;
  background-color: var(--background-color1);
}
.logo {
  background: var(--background-color1);
}
</style>