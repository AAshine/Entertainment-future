<template>
    <div class="classmate">
        <div class="classmateChoice" v-for="(classmateDates,index) in classmateDate" :key="index">
        <div class="classmateNumber">
            <div class="classmateImage">
                <img :src="couldUrl+classmateDates.imgUrl">
            </div>
            <p>{{classmateDates.name}}</p>
            <div class="classmateIntro">
                <div class="classLook">
                    <i class="icon-fensi iconfontfensi"></i>
                    <span>{{classmateDates.fans}}</span>
                    </div>
                <div class="classPeople">
                    <i class="icon-fensi icon-renyuanguanli1"></i>
                    <span>{{classmateDates.click}}</span>
                    </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
// import axios from 'axios'
export default {
    name:'classmateChoice',
    data(){
      return {
          classmateDate:[],
          couldUrl:'http://ppdeo8e31.bkt.clouddn.com/'
      }
  },
created() {
    this.matches()
  },
  methods: {
    async matches() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let res = await this.$api.matches.matches()
        this.classmateDate = res.data
        console.log(res)
      } catch (e) {
        console.log('​catch -> e', e)
      }
    }
  }
}
</script>
<style lang="stylus">
.classLook
    display flex
    align-items center
.classmateIntro span 
    margin-left 5px
    // https://api.nytimes.com/svc/topstories/v2/home.json?api-key=6ho9ezO7mWKMqXLAD4pFdopZRUfpQCYH
</style>