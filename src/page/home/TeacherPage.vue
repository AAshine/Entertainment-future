<template>
    <div class="TeacherPage">
        <div class="bannerImg"><img src="../../assets/images/home/banner2.png"></div>
       <div class="classTwo">
            <div class="classLeft">
                <teacherTab/>
            </div>
            <div class="classRight">
                <HotCourse/>
                <GetNow/>
                <ContactUs/>
            </div>
       </div>
        <div class="pageNumber">
            <Page :total="100" />
        </div>
    </div>
</template>
<script>
import teacherTab from '../home/component/TeacherPage/teacherTab'
import HotCourse from '../home/component/TeacherPage/HotCourse'
import GetNow from '../../components/GetNow'
import ContactUs from '../../components/ContactUs'
export default {
    name:'TeacherPage',
    components:{
        teacherTab,
        GetNow,
        ContactUs,
        HotCourse
    }
}
</script>
<style lang="stylus" scoped>
.pageNumber
    margin 25px auto
    width 1200px
    height 70px
    background #f5f5f5
    border 1px soild #e1e1e1
 .pageNumber  >>> .ivu-page
     display flex
     justify-content center
     padding 19px 0 19px 0
 .pageNumber  >>> .ivu-page-item-active
     border-color #9208c5
</style>