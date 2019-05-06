<template>
    <Tabs value="name1" id="tabTeacher">
        <Tab-pane label="导师推荐" name="name1">
          <teacherMess/>
        </Tab-pane>
    </Tabs>
</template>
<script>
import teacherMess from '../component/table/teacherMess'
    export default {
        components:{
          teacherMess
        }
    }
</script>
<style lang="stylus">
// 首页 师资力量组件
#tabTeacher .ivu-tabs-nav-scroll
  width 1200px
  display flex
#tabTeacher .ivu-tabs-bar
  width 1200px
  margin 0 auto
#tabTeacher .ivu-tabs-tabpane
  display flex
  justify-content center
#tabTeacher .ivu-tabs-ink-bar
  background-color #9208c5
</style>
