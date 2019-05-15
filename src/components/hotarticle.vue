<template>
    <div class="hotacrticle">
        <div class="hottitle">
            <p>热门文章</p>
        </div>
        <div class="articleDiv" v-for="(item,index) in hotart">
            <div @click="push(item)"  class="artImg">
                <img :src="coudUrl+item.imgUrl" alt="">
            </div>
            <div class="artText">
                <p>{{item.title}}</p>
                <p>时间：{{item.publishTime | formatDate}}<span></span> 点击：{{hotart[index].click}}<span></span> </p>
                <p>{{item.digest}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
      return {
          coudUrl:'http://file.kxdz2.com/'
      }  
    },
    props:{
        hotart:{}
    },
    methods:{
    push(item){
      this.$router.push({
        name:'newsDetails',
        params:{
          id:item.id
        }
      })
    }
    }
}
</script>
<style lang="stylus">
.hottitle
    display flex
    margin-left 20px
    font-size 22px
    color #000000
.articleDiv
    width 670px
    height 100px
    border 1px solid #f1f1f1
    margin 15px auto
    display flex
.articleDiv .artImg
    width 130px
    height 100px
.articleDiv img
    width 130px
    height 100px
    cursor pointer
.artText
    margin-top 8px
    margin-left 15px
    & p
        text-align:left
    & p:first-child
        font-size 18px
        color #000000
        font-weight 500
    & p:nth-child(2)
        font-size 14px
    & p:nth-child(2),& p:nth-child(3)
        margin-top:5px
        white-space: nowrap
        text-overflow ellipsis
        overflow:hidden;
        width 500px
</style>