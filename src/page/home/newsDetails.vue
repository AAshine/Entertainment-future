<template>
    <div class="DetailsPage">
      <div class="bannerImg"><img src="../../assets/images/home/banner1.png"></div>
<div class="doubleDD">
        <div class="detailLeft">
        <div class="title">{{caselID.title}}</div>
        <div class="titleBr"></div>
        <div class="simpleMess">
          <div class="simpletime">时间：<span>{{caselID.updateTime | formatDate}}</span></div>
          <div class="simpletime">来源：<span>{{caselID.sortNum}}</span></div>
          <div class="simpletime">作者：<span>{{caselID.operator}}</span></div>
          <div class="simpletime">点击：<span>{{caselID.click}}</span></div>
        </div>
        <div class="content">
          <div class="context" v-html="caselID.content">
            
          </div>
          <img :src="couldUrl+caselID.imgUrl" alt="">
        </div>
        <div class="updown">
          <span @click="_uppage(),jumpup(),_requestIDup()">上一篇:{{Uptitlename}}</span>
          <span @click="_downpage(),jump(),_requestID()">下一篇:{{Nptitlename}}</span>
        </div>
        <hotarticle :hotart="hotart" :key="key"></hotarticle>
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
import hotarticle from '../../components/hotarticle'
export default {
  name:'DetailPage',
  components:{
        GetNow,
        ContactUs,
        HotCourse,
        hotarticle
  },
    data(){
      return {
          hotart:[],//热门文章的调用
          caselID:[],
          //上下页的id
          titleData:0,
          titleDataup:0,
          //上下页的title
          Nptitlename:null,
          Uptitlename:null,
          couldUrl:'http://ppdeo8e31.bkt.clouddn.com/'
      }
  },
  watch: {
    //监听路由，只要路由有变化(路径，参数等变化)都有执行下面的函数，你可以
    $route: {
        handler: function (val, oldVal) {
    this._creatview(),
    this._requestID(),
    this._requestIDup(),
    this._hotart()
        },
        deep: true
    }
},
  computed:{
    key() {
// 或者 :key="$route.path" 只要保证key唯一就可以了
return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
}
  },
    created() {
    this._creatview(),
    this._requestID(),
    this._requestIDup(),
    this._hotart()
  },
  methods: {
      async _hotart(){
              //局部引用不用写this
              // 这里用try catch包裹，请求失败的时候就执行catch里的
            try{
              let hotres = await this.$api.matches.hotlist()
              this.hotart = hotres.data
              console.log(this.hotart)
            }catch(e){
              console.log('​catch -> e', e)
            }
          },
     async _creatview(){
              //局部引用不用写this
              // 这里用try catch包裹，请求失败的时候就执行catch里的
            let caselID=this.$route.params.id
            try{
              let current = await this.$api.matches.newArt()
              //拿到news api public
              const url = current+`${caselID}`
              axios.get(url).then((res)=>{
                this.caselID = res.data.data
              })
            }catch(e){
              console.log('​catch -> e', e)
            }

          },
          //router 路由id加1 下一篇
      jump (item) {
        this.$router.push({
        name:'newsDetails',
        params:{
          id:this.titleData
        }
      }),
      this._requestIDup()
　　},
      jumpup (item) {
        this.$router.push({
        name:'newsDetails',
        params:{
          id:this.titleDataup
        }
      }),
      this._requestID()
　　},
    //下一页的id ,获取下一页的title
     async _requestID(){
      let newID=this.$route.params.id
          newID++
            // const url = 'http://172.18.106.160:9201/api/yw/app/news/'+`${newID}`
            try{
              let current = await this.$api.matches.newArt()
              //拿到news api public
              const url = current+`${newID}`
              axios.get(url).then((res)=>{
                  this.titleData = res.data.data.id,
                this.Nptitlename = res.data.data.title
              })
            }catch(e){
              console.log('​catch -> e', e)
            }
    },
    //上一页的id ,获取上一页的title
    async _requestIDup(){
              let newUp = this.$route.params.id
              newUp--
                   try{
              let current = await this.$api.matches.newArt()
              //拿到news api public
              const url = current+`${newUp}`
              axios.get(url).then((res)=>{
                  this.Uptitlename = res.data.data.title
                  this.titleDataup = res.data.data.id
              })
            }catch(e){
              console.log('​catch -> e', e)
            }
    },
    //根据获得的id 获取下一页数据
     async  _downpage(){
   //局部引用不用写this
              // 这里用try catch包裹，请求失败的时候就执行catch里的
            let caselID=this.$route.params.id
            caselID++
            try{
              let current = await this.$api.matches.newArt()
              //拿到news api public
              const url = current+`${caselID}`
              axios.get(url).then((res)=>{
                this.caselID = res.data.data
              })
            }catch(e){
              console.log('​catch -> e', e)
            }
       },
      async  _uppage(){
            let caselID=this.$route.params.id
            caselID--
            try{
              let current = await this.$api.matches.newArt()
              //拿到news api public
              const url = current+`${caselID}`
              axios.get(url).then((res)=>{
                this.caselID = res.data.data
              })
            }catch(e){
              console.log('​catch -> e', e)
            }
       },
  },
  //时间格式

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
  & span 
      width 300px
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;  
      cursor pointer    
</style>