<template>
    <div class="hotCourse">
        <div class="courseRecom">
            <span>热点课程推荐</span>
            <span>查看更多</span>
        </div>
        <div class="courseContent" v-for="(item,index) in classmate" :key="index">
            <div class="courseLeft">
                 <img :src="couldUrl+item.imgUrl" alt="">
            </div>
            <div class="courseRight">
                <p>{{item.name}}</p>
                {{item.digest}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            classmate:[],
            couldUrl:'http://ppdeo8e31.bkt.clouddn.com/'
        }
    },
    created(){
        this._classmate()
    },
    methods: {
        async  _classmate(){
      try {
        let res = await this.$api.matches.hotclass()
        this.classmate = res.data
      } catch (e) {
        console.log('​catch -> e', e)
      }
          }
        }
}
</script>
<style lang="stylus">
//代码重复可合并

</style>