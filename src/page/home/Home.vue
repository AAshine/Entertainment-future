<template>
  <div class="home">
    <CouserDetails :couldUrl="couldUrl" :indexBanner="indexBanner"></CouserDetails>
    <!-- <home-swiper/> -->
    <home-summary :YWABOUTME="YWABOUTME"></home-summary>
    <div class="TitlePublic">
      <h3>课程介绍</h3>
    </div>
    <SubjectBrief/>
    <div class="addStrip">
      <div class="iconZero">
        <i class="icon-liwu"></i>
      </div>
      <div class="addtext">已经有四千万人加入了我们的俱乐部，这是第一步！</div>
      <div class="addBtn">点击加入</div>
    </div>
    <div class="TitlePublic">
      <h3>成功案例</h3>
    </div>
    <ClassmateChoice></ClassmateChoice>
    <CustomerReviews/>
    <LatestNews/>
    <div class="TitlePublic">
      <h3>师资力量</h3>
    </div>
    <TeacherPower/>
    <div class="TitlePublic">
      <h3>灵活选择</h3>
    </div>
    <Choice/>
    <HomeFooter :YWPHONE="YWPHONE" :YWADDRESS="YWADDRESS" :YWEMAIL="YWEMAIL"></HomeFooter>
    <!-- <back-top :scrollmyself="true"></back-top> -->
  </div>
</template>
<script scoped>
import axios from "axios";
import CouserDetails from "./component/table/CourseDetails";
import HomeSwiper from "./component/HomeSwiper";
import HomeSummary from "./component/HomeSummary";
import SubjectBrief from "./component/SubjectBrief";
import ClassmateChoice from "./component/ClassmateChoice";
import CustomerReviews from "./component/CustomerReviews";
import LatestNews from "./component/LatestNews";
import TeacherPower from "./component/TeacherPower";
import Choice from "./component/Choice";
import HomeFooter from "./component/HomeFooter";
// import Loading from './component/Loading'
import BackTop from "./component/BackTop/src/BackTop";
export default {
  name: "Home",
  components: {
    // Loading,
    HomeSwiper,
    HomeSummary,
    SubjectBrief,
    ClassmateChoice,
    CustomerReviews,
    LatestNews,
    TeacherPower,
    Choice,
    HomeFooter,
    BackTop,
    CouserDetails
  },
  data() {
    return {
      YWABOUTME: "YWABOUTME",
      YWPHONE: "YWPHONE",
      YWADDRESS: "YWADDRESS",
      YWEMAIL: "YWEMAIL",
      indexBanner: null,
      couldUrl: "http://file.kxdz2.com/"
    };
  },
  created() {
    this._companyGobel();
    this._indexBanner();
  },
  methods: {
    async _companyGobel() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let current = await this.$api.matches.companyGobel();
        axios
          .get(current, {
            params: {
              key: this.YWABOUTME
            }
          })
          .then(res => {
            this.YWABOUTME = res.data.data;
          });
        axios
          .get(current, {
            params: {
              key: this.YWADDRESS
            }
          })
          .then(res => {
            this.YWADDRESS = res.data.data;
          });
        axios
          .get(current, {
            params: {
              key: this.YWPHONE
            }
          })
          .then(res => {
            this.YWPHONE = res.data.data;
          });
        axios
          .get(current, {
            params: {
              key: this.YWEMAIL
            }
          })
          .then(res => {
            this.YWEMAIL = res.data.data;
          });
      } catch (e) {
        console.log("​catch -> e", e);
      }
    },
    //轮播
    async _indexBanner() {
      try {
        let indexBanner = await this.$api.matches.indexBanner();
        this.indexBanner = indexBanner.data;
      } catch (e) {
        console.log("​catch -> e", e);
      }
    }
  }
};
</script>
// 只在当前vue模板文件中有效
<style lang="stylus">
.bannerImg {
  height: 600px;
}

.bannerImg img {
  width: 100%;
  height: 100%;
  padding-top: 80px;
}
</style>