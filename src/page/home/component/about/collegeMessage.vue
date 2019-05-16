<template>
  <div class="collegeMessage">
    <div class="collegeTitle">娱未新视听学院线上报名系统</div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="姓名" prop="name">
        <Input v-model="formValidate.name" placeholder="姓名"></Input>
      </FormItem>
      <FormItem label="年龄" prop="age">
        <Input type="text" v-model="formValidate.age" number placeholder="年龄"></Input>
      </FormItem>
      <FormItem label="电话" prop="phone">
        <Input v-model="formValidate.phone" placeholder="电话"></Input>
      </FormItem>
      <FormItem label="留言" prop="remark">
        <Input
          v-model="formValidate.remark"
          type="textarea"
          :autosize="{minRows: 5,maxRows: 5}"
          placeholder="您有什么想法疑问.."
        ></Input>
      </FormItem>
      <FormItem>
        <Button @click="handleSubmit('formValidate')">提交</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formValidate: {
        name: "",
        age: "",
        phone: "",
        remark: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "姓名不能为空",
            trigger: "blur"
          },
          {
            type: "string",
            pattern: /^[\u4e00-\u9fa5]+$/,
            message: "请输入名或者您的姓氏+先生/女士",
            trigger: "blur"
          }
        ],
        age: [
          {
            type: "number",
            pattern: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/,
            message: "请填写您的年龄 例如|18",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "电话不能为空",
            trigger: "blur"
          },
          {
            type: "string",
            pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
            message: "请输入正确的电话",
            trigger: "blur"
          }
        ],
        remark: [
          { required: true, message: "请填写留言", trigger: "blur" },
          {
            type: "string",
            min: 2,
            message: "请输入信息",
            trigger: "blur"
          }
        ]
      }
    };
  },

  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          var that = this.formValidate;
          var url = 'http://test.haowaisp.cn/api/yw/app/message/home-save';
          axios
            .post(url, {
              name: that.name,
              age: that.age,
              phone: that.phone,
              remark: that.remark
            })
            .then(response => {
              console.log(response);
            })
            .cath(function(error) {
              console.log(error);
              vm.errorMsg = error;
            });
        } else {
          this.$Message.error("请填写正确信息!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
<style lang="stylus">
.collegeTitle {
  font-size: 24px;
  color: #000;
  text-align: center;
  padding: 20px 0 20px 0;
}
</style>
