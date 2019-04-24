<template>
    <div class="teacherOneTab">
        <div class="teacherContent" v-for="(item,index) in teacherUser" :key="index">
            <div class="teacherTxtImg">
                <div class="teacherImg">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="teacherTxt">
                    <div class="teachername"><p>{{item.musictName}}</p></div>
                    <div class="teacherBottom">
                        <span><i class="icon-yanjing-"></i>9999</span>
                        <span><i class="icon-fensi"></i>666</span>
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
          ]
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
.teacherOneTab .teacherContent:nth-child(1),.teacherOneTab .teacherContent:nth-child(4)
    margin-left 0
.teacherContent img
    width 100%
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