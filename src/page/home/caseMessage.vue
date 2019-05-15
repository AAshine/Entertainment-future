<template>
  <div class="caseMessage">
    <div class="bannerImg">
      <img src="../../assets/images/home/banner2.png">
    </div>
    <div class="TitlePublic">
      <h3>优秀案例</h3>
    </div>
    <div class="caseMessages">
      <div class="demo" v-for="(item,index) in example" :key="index">
        <figure class="imghvr-reveal-right">
          <img :src="couldUrl+item.imgUrl" alt="example-image">
          <figcaption>
            <h3>案例介绍</h3>
            <p>{{item.name}}</p>
            <p>{{item.details}}</p>
          </figcaption>
          <a href="javascript:;"></a>
        </figure>
      </div>
    </div>
    <div class="TitlePublic">
      <h3>现有大V号</h3>
    </div>
    <div class="bigV">
      <bigVnumber :caseEight="caseEight" :couldUrl="couldUrl"></bigVnumber>
    </div>
  </div>
</template>
<script>
import "../../assets/css/caseMessage.css";
import bigVnumber from "../home/component/caseMessage/bigVnumber";
export default {
  data() {
    return {
      example: [],
      caseEight:[],
      couldUrl:'http://file.kxdz2.com/'
    };
  },
  components: {
    bigVnumber
  },
  created() {
    this._caseFour()
    this._caseEight()
  },
  methods: {
    async _caseFour() {
      //局部引用不用写this
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let caseFour = await this.$api.matches.caseFour();
        this.example = caseFour.data;
      } catch (e) {
        console.log("​catch -> e", e);
      }
    },
    async _caseEight() {
      //局部引用不用写this
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let caseEight = await this.$api.matches.caseEight();
        this.caseEight = caseEight.data;
      } catch (e) {
        console.log("​catch -> e", e);
      }
    }
  }
};
</script>
<style lang="css" scoped>
.caseMessages {
  width: 1200px;
  margin: 0 auto;
}
.demo {
  display: inline-block;
  width: 285px;
  height: 334px;
  margin: 5px;
  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
}
.demo textarea {
  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
  font-family: "Roboto";
  font-size: 0.9em;
  height: 32px;
  padding: 6px 0px;
  resize: none;
  text-align: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.demo img {
  width: 285px;
  height: 334px;
}
img {
  border: none;
}
.effects {
  margin: 3em 15em;
}
@media only screen and (max-width: 959px) {
  .demo {
    width: 32.5%;
  }
}
@media only screen and (max-width: 659px) {
  .demo {
    width: 49%;
  }
}
@media only screen and (max-width: 360px) {
  .demo {
    width: 100%;
  }
}
</style>
