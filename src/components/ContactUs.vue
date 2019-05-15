<template>
  <div class="contactUs">
    <div class="Usborder">
      <p class="contactUsTitle">Contact Us</p>
    </div>
    <div class="contactUsCT">
      <p>
        <i class="icon-dizhiguanli"></i>地址地址地址地地址地址地址地址地址址地址
      </p>
      <p>
        <i class="icon-zuoji"></i>电话：4007676-566
      </p>
      <p>
        <i class="icon-youxiang"></i>邮箱:kefu@yuwei.com
      </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      ABOUT_ME: "ABOUT_ME",
      aboutMe:null,
      ASD: "ASD"
    };
  },
  created() {
    this._companyGobel();
  },
  methods: {
    async _companyGobel() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let current = await this.$api.matches.companyGobel();
        axios
          .get(current, {
            params: {
              key: this.ABOUT_ME
            }
          })
          .then(res => {
            this.aboutMe = res.data.data;
            console.log(this.aboutMe)
          });
        axios
          .get(current, {
            params: {
              key: this.ASD
            }
          })
          .then(res => {
            this.ASD = res.data.data;
            console.log(this.ASD)
          });
      } catch (e) {
        console.log("​catch -> e", e);
      }
    }
  }
};
</script>
<style lang="stylus">
.contactUs {
  width: 420px;
}

.Usborder {
  border-bottom: 1px solid #f1f1f1;
}

.contactUsTitle {
  padding: 15px 0 15px 0;
  font-size: 18px;
  color: #333333;
}

.contactUsCT {
  margin-top: 2px;
  border-top: 1px solid #f1f1f1;

  & p {
    margin-top: 20px;
  }
}
</style>