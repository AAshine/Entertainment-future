<template>
    <div class="TeacherPage">
        <div class="bannerImg"><img src="../../assets/images/home/banner2.png"></div>
       <div class="classTwo">
            <div class="classLeft">
                <teacherTab/>
                <!-- <Page :total="100" class="pageNumber"></Page> -->
            </div>
            <div class="classRight">
                <HotCourse/>
                <GetNow/>
                <ContactUs/>
            </div>
       </div>
    </div>
</template>
<script>
import teacherTab from '../home/component/TeacherPage/teacherTab'
import HotCourse from '../../components/HotCourse'
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
    display flex
    justify-content center
    margin-top:30px
</style>