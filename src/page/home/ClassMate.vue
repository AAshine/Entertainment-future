<template>
  <div class="classMate">
    <div class="bannerImg">
      <img src="../../assets/images/home/banner2.png">
    </div>
    <div class="classTwo">
      <div class="classLeft">
        <ClassTab :navList="navList"></ClassTab>
        <div class="classType">
          <Row :gutter="32">
            <Col class="demo-tabs-style2">
              <Tabs type="card" v-model="currenTab" @on-click="hideAccountDialog">
                <Tab-pane
                  v-for="(item,index) in classBrief"
                  :label="item.details"
                  :name="item[index]"
                >
                  <div class="textTitle">
                    {{item.name}}
                    {{item.jianjie}}
                  </div>
                </Tab-pane>
              </Tabs>
            </Col>
          </Row>
        </div>
      </div>
      <div class="classRight">
        <panelDoubt/>
        <GetNow/>
        <ContactUs/>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ClassTab from "../home/component/classMate/ClassTab";
import CourseDetails from "../home/component/table/CourseDetails";
import ClassTypeTab from "../home/component/classMate/ClassTypeTab";
import panelDoubt from "../home/component/table/panelDoubt";
import GetNow from "../../components/GetNow";
import ContactUs from "../../components/ContactUs";
export default {
  name: "ClassMate",
  data() {
    return {
      valueDisabled: 5,
      classBrief: [],
      navList: "",
      currenTab: 0,
      categoryId: null,
      name: 0,
      currentNumbe:0
    };
  },
  components: {
    ClassTab, //tab切换
    CourseDetails, //图片切换组件
    ClassTypeTab, //课程类型切换
    panelDoubt, //疑难解答
    GetNow,
    ContactUs
  },
  created() {
    this._classCase();
  },
  methods: {
    //根据不同的参数   获取分类的课程数据
    hideAccountDialog: function(name) {
      let that = this;
      that.change(name);
      console.log("列表id",this.categoryId);
      try {
        let url = this.$api.matches.classCase();
        axios
          .get(url, {
            params: {
              categoryId: that.categoryId
            }
          })
          .then(res => {
            that.classBrief = res.data.data.listCategory;
            that.navList = res.data.data.listDetail;
            this.categoryId = that.classBrief[that.currenTab].id;
          });
      } catch (e) {
        console.log("​catch -> e", e);
      }
    },
    change(name) {
      this.currenTab = name;
      this.categoryId = this.classBrief[name].id;
    },
    //获取id及其分类 课程简介
    async _classCase(name) {
      let that = this;
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let url = await this.$api.matches.classCase();
        axios.get(url).then(res => {
          that.classBrief = res.data.data.listCategory;
          that.navList = res.data.data.listDetail;
          this.categoryId = that.classBrief[that.currenTab].id;
        });
      } catch (e) {
        console.log("​catch -> e", e);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.classType {
  margin: 30px 0 30px 0;
}

.classRight {
  padding: 10px;
}
</style>
