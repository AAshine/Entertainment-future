<template>
    <div class="teacherOneTab">
        <div class="teacherContent" v-for="(item,index) in teacherUser" :key="index" @click="push(item)">
            <div class="teacherTxtImg">
                <div class="teacherImg">
                    <img :src="couldUrl+item.imgUrl" alt="">
                </div>
                <div class="teacherTxt">
                    <div class="teachername"><p>{{item.musictName}}</p></div>
                    <div class="teacherBottom">
                        <span><i class="icon-yanjing-"></i>9999阅读</span>
                        <span><i class="icon-fensi"></i>666喜欢</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
        data() {
      return {
          teacherUser:[
              {
				  musictName:'一号老师',
                  imgUrl:require('../../../../assets/images/teacher1.png')
              },
              {
                  musictName:'一号老师',
                  imgUrl:require('../../../../assets/images/teacher1.png')
			  },
			  {
				  musictName:'一号老师',
                  imgUrl:require('../../../../assets/images/teacher1.png')
              },
                {
                  musictName:'一号老师',
                  imgUrl:require('../../../../assets/images/teacher1.png')
              },
                {
				  musictName:'一号老师',
                  imgUrl:require('../../../../assets/images/teacher1.png')
              },
                {
                  musictName:'一号老师',
                  imgUrl:require('../../../../assets/images/teacher1.png')
			  }
          ],
          couldUrl:'http://ppdeo8e31.bkt.clouddn.com/'
      }
    },
    created(){
        this.teacher()
    },
      methods: {
    async teacher() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let res = await this.$api.matches.teacher()
        this.teacherUser = res.data
        console.log(res)
      } catch (e) {
        console.log('​catch -> e', e)
      }
    },
    //跳转页面，到指定的路由上，修改浏览器中的url
    push(item){
      this.$router.push({
        name:'teacher',
        params:{
          id:item.id
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.teacherImg
    width 240px
    height 300px
.teacherOneTab
    margin-top:30px
    display flex    
    flex-flow row wrap
.teacherContent
    display flex
    margin-bottom 15px
    margin-left 15px
    cursor pointer
.teacherOneTab .teacherContent:nth-child(1),.teacherOneTab .teacherContent:nth-child(4)
    margin-left 0
.teacherContent img
    width 100%
    height 100%
    max-height 300px
    overflow hidden
.teacherTxtImg
    width 240px;
    height 400px
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
.teachername
    border-left 1px solid #f5f5f5
    border-right 1px solid #f5f5f5
.teacherBottom
    border 1px solid #e1e1e1
.teacherTxt p
    text-align center
    padding 10px
    font-size 18px
.teacherBottom
    display flex
    justify-content space-around
    background: #f5f5f5
    padding 10px
.pageNumber
    margin 0px auto
.teacherBottom i
    margin-right 5px
</style>