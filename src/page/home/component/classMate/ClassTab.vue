<template>
  <Tabs value="name1" id="classTab">
    <Tab-pane label="抖音培训" name="name1">
      <div class="douyin">
        <CouserDetails :classCase="classCase" :couldUrl="couldUrl"></CouserDetails>
        <ClassObject :classCase="classCase"></ClassObject>
      </div>
    </Tab-pane>
  </Tabs>
</template>
<script>
import CouserDetails from "../table/CourseDetails";
import ClassObject from "../table/ClassObject";
export default {
  name: "ClassTab",
  components: {
    CouserDetails, //图片切换
    ClassObject //切换内容
  },
  data(){
    return {
      classCase:[],
       couldUrl: "http://ppdeo8e31.bkt.clouddn.com/"
    }
  },
  created(){
    this._classCase()
  },
  methods: {
    async _classCase() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let classCase = await this.$api.matches.classCase();
        this.classCase = classCase.data;
        console.log(this.classCase)
      } catch (e) {
        console.log("​catch -> e", e);
      }
    }
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
