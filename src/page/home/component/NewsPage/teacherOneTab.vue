<template>
    <div class="teacherOneTab">
        <div class="teacherContent" v-for="(item,index) in newsList" :key="index">
            <div @click="push(item)" class="teacherTxtImg">
                <div class="teacherImg">
                    <img :src="couldUrl+item.imgUrl" alt="">
                </div>
                <div class="teacherTxt">
                    <p>{{item.title}}</p>
                    <div class="teacherBottom">
                        <span><i class="icon-yanjing-"></i>{{item.click}}</span>
                        <span><i class="icon-fensi"></i>{{item.click}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        newsList:{},
        couldUrl:null
    },
    methods:{
            //跳转页面到指定的路由上
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
<style lang="stylus" scoped>
.teacherOneTab
    display flex    
    flex-flow row wrap
    margin-top:40px
.teacherContent
    display flex
    width 250px
    height 362px
    padding 5px
    max-width 250px
    max-height 362px
    cursor pointer
.teacherContent img
    width 250px
    height 260px
    overflow hidden
.teacherTxtImg
    display: flex;
    flex-direction: column;
.teacherTxt p
    text-align center
    padding 10px
    font-size 18px
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    width:240px;
.teacherBottom
    display flex
    height 32px
    justify-content space-around
    background: #f5f5f5
    line-height 32px
.teacherBottom i
    margin-right 5px
</style>