<template>
  <div class="hello">
    <!-- <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table> -->
    <el-button type="primary" @click="sendValue">传递值</el-button>
    <br />
    姓名<el-input v-model="name" class="textInput"></el-input>
    <br />
    年龄<el-input v-model="age" class="textInput"></el-input>
  </div>
</template>
 
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      // tableData: [
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //   },
      //   {
      //     date: "2016-05-04",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1517 弄",
      //   },
      //   {
      //     date: "2016-05-01",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1519 弄",
      //   },
      //   {
      //     date: "2016-05-03",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1516 弄",
      //   },
      // ],
      name: "骆驼祥子",
      age: "35",
    };
  },
  created() {},
  methods: {
    sendValue() {
      if (window.qiankunUse) {
        window.pubsub.publish("test1", {
          name: this.name,
          age: this.age,
        });
        this.$router.options.base = "";
        this.$router.history.base = "";
        this.$router.push({
          path: "/entity/potarl",
        });
      }
      console.log(document, "charts应用的window");
    },
  },
  destroyed() {
    // window.pubsub.unsubscribe("test1", () => {
    //   console.log("销毁2");
    // });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.textInput {
  width: 240px !important;
}
</style>
