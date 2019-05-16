<template>
    <div class="DetailsPage">
      <div class="bannerImg"><img src="../../assets/images/home/banner1.png"></div>
<div class="doubleDD">
        <div class="detailLeft">
        <div class="title">{{teacherData.name}}</div>
        <div class="titleBr"></div>
        <div class="simpleMess">
          <div class="simpletime">时间：<span>{{teacherData.updateTime}}</span></div>
          <div class="simpletime">来源：<span>{{teacherData.nikeName}}</span></div>
          <div class="simpletime">作者：<span>{{teacherData.operator}}</span></div>
          <div class="simpletime">点击：<span>{{teacherData.click}}</span></div>
        </div>
        <div class="content">
          <div class="context" v-html="teacherData.context">
            
          </div>
          <img :src="couldUrl+teacherData.imgUrl" alt="">
        </div>
        <div class="updown">
          <span>上一篇:</span>
          <span>下一篇:</span>
        </div>
      </div>
      <div class="detailRight">
        <HotCourse/>
        <GetNow/>
        <ContactUs/>
      </div>
</div>
    </div>
</template>
<script>
import axios from 'axios'
import HotCourse from '../../components/HotCourse'
import GetNow from '../../components/GetNow'
import ContactUs from '../../components/ContactUs'
export default {
  name:'DetailPage',
  components:{
        GetNow,
        ContactUs,
        HotCourse
  },
    data(){
      return {
          teacherData:[],
          couldUrl:'http://ppdeo8e31.bkt.clouddn.com/'
      }
  },
    created() {
    this._creatview()
  },
  methods: {
           _creatview:function(){
              //局部引用不用写this
              // 这里用try catch包裹，请求失败的时候就执行catch里的
            let detailID=this.$route.params.id
            const url = `http://172.18.106.160:9201/api/yw/app/teacher/${detailID}`
            try{
              axios.get(url).then((res)=>{
                this.teacherData = res.data.data
              })
            }catch(e){
              console.log('​catch -> e', e)
            }
          }
  }
}
</script>
<style lang="stylus" scoped>
.doubleDD
  display flex
  justify-content center
  margin-top 80px
  margin-bottom 80px
.detailLeft
  width 750px
  border 1px solid #f1f1f1
  text-align center
  margin-right 40px
  & .title 
    padding-top 40px
    font-size 24px
    color #333333
.titleBr
  width 135px
  border 1px solid #000000
  margin 16px auto
.detailRight
  width 420px
.simpleMess 
  display flex
  justify-content center
.simpleMess > div
  margin-right 16px
.content img
  width 400px
  height 300px
.context >>> img 
  width 400px
  height 300px
.context
  padding 15px 0 15px 0
.updown
  display flex
  justify-content space-around
  padding 20px 0 20px 0
  color #000000
</style>