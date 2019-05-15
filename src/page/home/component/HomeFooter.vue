<template>
  <transition>
    <div class="Homefooter">
      <div class="HomefooterL">
        <p>Contact Us</p>
        <p>
          <i class="icon-dizhiguanli"></i>地址:浙江省杭州市蓝都科创园
        </p>
        <p>
          <i class="icon-zuoji"></i>0571-5656-7488
        </p>
        <p>
          <i class="icon-zuoji"></i>0571-5656-7488
        </p>
        <p>
          <i class="icon-youxiang"></i>邮箱:kefu@yuwei.com
        </p>
      </div>
      <div class="HomefooterR">
        <form
          @submit.prevent="submit"
          action="http://172.18.106.160:9201/api/yw/app/message/home-save"
          method="post"
        >
          <div class="formPackage">
            <div class="formPackageA" :class="{ 'form-group--error': $v.user.name.$error }">
              <input
                @blur="$v.user.name.$touch()"
                v-model="user.name"
                class="input-line"
                v-model.trim="$v.user.name.$model"
                placeholder="请填写客户名*"
              >
              <div class="formDiv form-group__message" v-if="!$v.user.name.required">客户名是必须的</div>
              <div class="formDiv error form-group__message" v-if="!$v.user.name.nameZn">客户名格式错误</div>
            </div>

            <div class="formPackageA" :class="{ 'form-group--error': $v.user.phone.$error }">
              <input
                v-model.trim="$v.user.phone.$model"
                @blur="$v.user.phone.$touch()"
                v-model="user.phone"
                class="input-line"
                placeholder="请填写您的联系方式*"
              >
              <div class="formDiv form-group__message" v-if="!$v.user.phone.required">手机号码不能为空</div>
              <div class="formDiv form-group__message" v-if="!$v.user.phone.phone">请输入正确的手机号码</div>
            </div>
            <div class="formPackageA" :class="{ 'form-group--error': $v.user.course.$error }">
              <input
                v-model.trim="$v.user.course.$model"
                @blur="$v.user.course.$touch()"
                class="input-line"
                placeholder="请填写咨询课程*"
                v-model="user.course"
              >
              <div class="formDiv form-group__message" v-if="!$v.user.course.required">不能为空</div>
              <div class="formDiv form-group__message" v-if="!$v.user.course.classname">请填写中文</div>
            </div>
          </div>
          <div :class="{ 'form-group--error': $v.user.remark.$error }">
            <textarea
              v-model="user.remark"
              v-model.trim="$v.user.remark.$model"
              @blur="$v.user.remark.$touch()"
              name
              id
              cols="30"
              rows="10"
              placeholder="您有什么想说的或者困惑的告诉我们，我们为您解答"
            ></textarea>
            <div class="formDiv form-group__message" v-if="!$v.user.remark.required">不能为空</div>
          </div>
          <p class="BtnSubmit">
            <button
              :disabled="user.submitStatus === 'PENDING'"
              class="submitIn"
              type="submit"
              value="Submit"
            >提交</button>
          </p>
          <p class="typo__p" v-if="user.submitStatus === 'OK'">感谢您的留言,我们会尽快联系您</p>
          <p class="typo__p" v-if="user.submitStatus === 'ERROR'">请正确填写您的信息</p>
          <p class="typo__p" v-if="user.submitStatus === 'PENDING'">Sending...</p>
        </form>
      </div>
      <div class="HomefooterB"></div>
    </div>
  </transition>
</template>
<script>
import axios from "axios";
import { required, maxLength, sameAs } from "vuelidate/lib/validators";
import { regex } from "vuelidate/lib/validators/common";
var phone = regex("phoneNumber", /^1(3|4|5|7|8)\d{9}$/); // 手机号码校验
var nameZN = regex("username", /^[\u4e00-\u9fa5]+$/); // 用户名校验
var classname = regex("course", /^[\u4e00-\u9fa5]+$/);
export default {
  data() {
    return {
      user: {
        name: "",
        phone: "",
        course: "",
        remark: "",
        submitStatus: null
      }
    };
  },
  // 2.定义验证字段的规则
  validations: {
    user: {
      phone: {
        required,
        phone // 直接就是用的上面const设置的校验规则，自定义校验
      },
      name: {
        required,
        nameZN
      },
      course: {
        required,
        classname
      },
      remark: {
        required
      }
    }
  },
  methods: {
    setName(value) {
      this.user.name = value;
      this.$v.user.name.$touch();
    },
    submit() {
      this.$v.user.$touch();
      if (this.$v.$invalid) {
        this.user.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.user.submitStatus = "PENDING";
        setTimeout(() => {
          this.user.submitStatus = "OK";
          var data = this.user;
          axios
            .post(
              "http://test.haowaisp.cn/api/yw/app/message/home-save",
              data,
              {
                emulateJSON: false
              }
            )
            .then(
              response => {
                if (response.data.success === true) {
                  alert("提交成功！");
                  // this.user = response.data;
                  console.log(response.data.msg);
                  this.user.submitStatus = "OK";
                } else if (response.status === 401) {
                  alert("失败");
                  this.user.submitStatus = "PENDING";
                } else if (
                  (response.data.msg = "手机号码已存在，请核对手机号")
                ) {
                  alert("手机号码已存在，请核对手机号");
                }
              },
              response => {
                console.log("提交失败");
              }
            );
        }, 500);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.HomefooterL {
  & p {
    display: flex;
    align-items: center;
  }
}
.typo__p
  color #f79483
  margin 15px 0 15px 25px
</style>