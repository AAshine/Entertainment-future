<template>
    <div class="teacherOneTab">
        <div class="teacherContent" v-for="(item, index) in studentUser" :key="index">
            <div class="teacherTxtImg">
                <div class="teacherImg">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="teacherTxt">
                    <p>{{item.studentName}}</p>
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
          studentUser:[
              {
				  studentName:'一号学生',
                  imgUrl:require('../../../../assets/images/teacher1.png')
              },
              {
                  studentName:'5号学生',
                  imgUrl:require('../../../../assets/images/teacher1.png')
			  },
			  {
				  studentName:'4号学生',
                  imgUrl:require('../../../../assets/images/teacher1.png')
              },
                {
                  studentName:'3号学生',
                  imgUrl:require('../../../../assets/images/teacher1.png')
              },
                {
				  studentName:'2号学生',
                  imgUrl:require('../../../../assets/images/teacher1.png')
              },
                {
                  studentName:'1号学生',
                  imgUrl:require('../../../../assets/images/teacher1.png')
			  },
			  {
				  studentName:'9号学生',
                  imgUrl:require('../../../../assets/images/teacher1.png')
              },
                {
                  studentName:'1号学生',
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
    flex-wrap wrap
    width 960px
    justify-content center
    margin: 0 auto
.teacherContent
    display flex
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