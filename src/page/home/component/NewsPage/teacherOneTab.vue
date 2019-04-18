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
        
        <div class="pageNumber">
            <Page :total="100" />
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            newList:[
                {
                    newTitle:'一号新闻',
                    imgUrl:require('../../../../assets/images/1.jpg'),
                    newRead:'980'
                },
                {
                    newTitle:'一号新闻',
                    imgUrl:require('../../../../assets/images/1.jpg'),
                    newRead:'983'
                },
                {
                    newTitle:'一号新闻',
                    imgUrl:require('../../../../assets/images/1.jpg'),
                    newRead:'982'
                },
                                {
                    newTitle:'一号新闻',
                    imgUrl:require('../../../../assets/images/1.jpg'),
                    newRead:'981'
                },
                {
                    newTitle:'一号新闻',
                    imgUrl:require('../../../../assets/images/1.jpg'),
                    newRead:'981'
                },
                {
                    newTitle:'一号新闻',
                    imgUrl:require('../../../../assets/images/1.jpg'),
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