<template>
    <div class="classmate">
        <div class="classmateChoice" v-for="classmateDates in classmateDate">
        <div class="classmateNumber">
            <div class="classmateImage">
                <img :src="classmateDates.imgUrl">
            </div>
            <p>{{classmateDates.programName}}</p>
            <div class="classmateIntro">
                <div class="classLook">
                    <i class="icon-fensi iconfontfensi"></i>
                    <span>108.6w</span>
                    </div>
                <div class="classPeople">
                    <i class="icon-fensi icon-renyuanguanli1"></i>
                    <span>咸鱼怎么翻身</span>
                    </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'classmateChoice',
    data(){
      return {
          classmateDate:[
                      {
                          id:'001',
                          programName:'项目一案例测试',
                          imgUrl: require('../../../assets/images/1.jpg'),
                          //        imgUrl:tImg
                          LookNumber:'108.6w',
                          wirter:'咸鱼是怎么翻身的'
                      },
                        {
                          id:'002',
                          programName:'项目一案例测试',
                          imgUrl: require('../../../assets/images/1.jpg'),
                          //        imgUrl:tImg
                          LookNumber:'108.6w',
                          wirter:'咸鱼是怎么翻身的'
                      },
                        {
                          id:'003',
                          programName:'项目一案例测试',
                          imgUrl: require('../../../assets/images/1.jpg'),
                          //        imgUrl:tImg
                          LookNumber:'108.6w',
                          wirter:'咸鱼是怎么翻身的'
                      },
                                            {
                          id:'004',
                          programName:'项目一案例测试',
                          imgUrl: require('../../../assets/images/1.jpg'),
                          //        imgUrl:tImg
                          LookNumber:'108.6w',
                          wirter:'咸鱼是怎么翻身的'
                      }
          ]
      }
  },
}
</script>
<style lang="stylus">
.classLook
    display flex
    align-items center
.classmateIntro span 
    margin-left 5px
</style>