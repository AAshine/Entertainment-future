<template>
    <div class="NewsPage">
        <div class="bannerImg"><img src="../../assets/images/home/banner4.png"></div>
        <div class="classTwo">
            <div class="classLeft">
                <NewsTab/>
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
import NewsTab from '../home/component/NewsPage/NewsTab'
import HotCourse from '../../components/HotCourse'
import GetNow from '../../components/GetNow'
import ContactUs from '../../components/ContactUs'
export default {
    components:{
        NewsTab,
        HotCourse,
        GetNow,
        ContactUs
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
