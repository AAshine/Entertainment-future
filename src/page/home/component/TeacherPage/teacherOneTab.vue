<template>
    <div class="teacherOneTab">
        <div class="teacherContent" v-for="(item,index) in teacherUser" :key="index">
            <div class="teacherTxtImg">
                <div class="teacherImg">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="teacherTxt">
                    <p>{{item.musictName}}</p>
                    <div class="teacherBottom">
                        <span><i class="icon-yanjing-"></i>9999</span>
                        <span><i class="icon-fensi"></i>666</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="pageNumber">
            <Page :total="100" />
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
.teacherOneTab
    display flex    
    flex-flow row wrap
.teacherContent
    display flex
    width 220px
    margin 10px
    max-width 220px
    max-height 400px
.teacherContent img
    width 100%
    max-height 300px
    overflow hidden
.teacherTxtImg
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
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
    margin 30px auto
.teacherBottom i
    margin-right 5px
</style>