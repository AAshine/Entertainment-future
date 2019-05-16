<template>
  <Tabs value="name1" id="classTab">
    <Tab-pane label="抖音培训" name="name1">
      <div class="douyin">
        <!-- <CouserDetails :couldUrl="couldUrl" :navList="navList"></CouserDetails> -->
        <ClassObject :couldUrl="couldUrl" :navList="navList"></ClassObject>
      </div>
    </Tab-pane>
  </Tabs>
</template>
<script>
import axios from "axios";
import CouserDetails from "../table/CourseDetails";
import ClassObject from "../table/ClassObject";
export default {
  props: {
    show: {},
    navList: {}
  },
  name: "ClassTab",
  components: {
    CouserDetails, //图片切换
    ClassObject //切换内容
  },
  data() {
    return {
      classCase: [],
      couldUrl: this.GLOBAL.couldurl,
      currentIndex: 0,
      buttons: [0, 1, 2],
      timer: null,
      componentName: "",
      categoryId: null
    };
  }
};
</script>
<style lang="stylus">
#classTab .ivu-tabs-nav-scroll {
  width: 720px;
  display: flex;
}

#classTab .ivu-tabs-bar {
  width: 720px;
  margin: 0 auto;
}

#classTab .ivu-tabs-tabpane {
  display: flex;
  justify-content: center;
}

#classTab .ivu-tabs-ink-bar {
  background-color: #9208c5;
}
</style>
