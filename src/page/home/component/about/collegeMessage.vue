<template>
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
        <FormItem label="留言" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="您有什么想法疑问.."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    age:'',
                    phone:'',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '联系方式不能为空', trigger: 'blur' }
                    ],
                    age: [
                        { required: true, message: '请填写您的年龄', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '电话不能为空', trigger: 'blur' }
                    ],
                    desc: [
                        { required: true, message: '请填写留言', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
            }
        },  
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
