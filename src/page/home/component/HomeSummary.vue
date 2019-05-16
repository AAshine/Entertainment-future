<template>
  <div class="InSummary">
    <div class="SummaryLeft">
      <div class="summaryTitle">
        <div class="summaryTop">娱未文化科技有限公司</div>
        <div
          class="summaryContent"
        >{{YWABOUTME}}</div>
        <div class="SummaryBtn">
          <a href="#">联系我们</a>
        </div>
      </div>
    </div>
    <div class="SummaryRight">
      <img src="../../../assets/images/home/company.png" alt>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props:{
    YWABOUTME:{}
  },
  data(){
    return {
      key: null
    }
  },
  created() {
    this._companyGobel();
  },
  methods: {
    async _companyGobel() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let current = await this.$api.matches.companyGobel();
        axios.get(current,{
          params:{
            key: this.ABOUT_ME
          }
        }).then(res => {
            this.aboutMe = res.data.data;
        });
      } catch (e) {
        console.log("​catch -> e", e);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
// @import "../../../assets/css/index.styl"
.InSummary {
  display: flex;
  justify-content: center;
  margin-top: 80px;
}

.InSummary .SummaryLeft {
  position: relative;
  min-width: 400px;
  max-width: 600px;
  margin-right: 32px;
}

.SummaryRight img {
  max-width: 570px;
  height: 350px;
}

.InSummary .summaryTop {
  font-size: 21px;
  font-weight: 600;
  padding: 10px 0 10px 15px;
  color: black;
}

.InSummary .summaryContent {
  text-indent: 2em;
  padding: 5px;
  line-height: 21px;
  letter-spacing: 1px;
}

.InSummary .SummaryBtn {
  position: absolute;
  bottom: 25px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 5px 0 5px 0;
  width: 200px;
  height: 50px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 600;
  color: black;
  border: 1px solid #a21fcd;
  border-radius: 30px;
}

.InSummary .SummaryBtn a {
  color: #a21fcd;
}

.InSummary .SummaryBtn a:hover {
  color: #4BAFD3;
}
</style>