<template>
    <div class="teacherOneTab">
        <div class="teacherContent" v-for="(item,index) in newList" :key="index">
            <div class="teacherTxtImg">
                <div class="teacherImg">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="teacherTxt">
                    <p>{{item.newTitle}}</p>
                    <div class="teacherBottom">
                        <span><i class="icon-yanjing-"></i>{{item.newRead}}</span>
                        <span><i class="icon-fensi"></i>666</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            newList:[
                {
                    newTitle:'大V1号',
                    imgUrl:require('../../../../assets/images/teacher1.png'),
                    newRead:'980'
                },
                {
                    newTitle:'大V1号',
                    imgUrl:require('../../../../assets/images/teacher1.png'),
                    newRead:'983'
                },
                {
                    newTitle:'大V1号',
                    imgUrl:require('../../../../assets/images/teacher1.png'),
                    newRead:'982'
                },
                                {
                    newTitle:'大V1号',
                    imgUrl:require('../../../../assets/images/teacher1.png'),
                    newRead:'981'
                },
                {
                    newTitle:'大V1号',
                    imgUrl:require('../../../../assets/images/teacher1.png'),
                    newRead:'981'
                },
                {
                    newTitle:'大V1号',
                    imgUrl:require('../../../../assets/images/teacher1.png'),
                    newRead:'981'
                },
                {
                    newTitle:'大V1号',
                    imgUrl:require('../../../../assets/images/teacher1.png'),
                    newRead:'981'
                },
                {
                    newTitle:'大V1号',
                    imgUrl:require('../../../../assets/images/teacher1.png'),
                    newRead:'981'
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
    width 1200px
    margin 0 auto
.teacherContent
    display flex
    width 25%
    margin 5px
    max-width 280px
    max-height 450px
.teacherContent img
    width 100%
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
</style>