<template>
  <div class="contactUs">
    <div class="Usborder">
      <p class="contactUsTitle">Contact Us</p>
    </div>
    <div class="contactUsCT">
      <p>
        <i class="icon-dizhiguanli"></i>
        {{YWADDRESS}}
      </p>
      <p>
        <i class="icon-zuoji"></i>
        电话：{{YWPHONE}}
      </p>
      <p>
        <i class="icon-youxiang"></i>
        邮箱:{{YWEMAIL}}
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      YWPHONE: "YWPHONE",
      YWADDRESS: "YWADDRESS",
      YWEMAIL: "YWEMAIL"
    };
  },
  created() {
    this._companyGobel();
  },
  methods: {
    async _companyGobel() {
      try {
        let current = await this.$api.matches.companyGobel();
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