<template>
    <div class="teacherOneTab">
        <div class="teacherContent" v-for="(item,index) in caseEight" :key="index">
            <div class="teacherTxtImg">
                <div class="teacherImg">
                    <img :src="couldUrl+item.imgUrl" alt="">
                </div>
                <div class="teacherTxt">
                    <div class="bigVname"><p>{{item.name}}</p></div>
                    <div class="teacherBottom">
                        <span><i class="icon-yanjing-"></i>{{item.click}}</span>
                        <span><i class="icon-fensi"></i>{{item.fans}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        caseEight:{},
        couldUrl:{}
    }
}
</script>

<style lang="stylus" scoped>
.teacherOneTab
    display flex    
    flex-flow row wrap
    width 1200px
    margin 0 auto
    margin-bottom 80px
.teacherContent
    display flex
    width 285px
    height 400px
    margin 5px
    max-width 285px
    max-height 450px
.teacherContent img
    width 285px
    height 300px
    overflow hidden
.teacherTxtImg
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
.bigVname
    height 50px
    border-left 1px solid #f5f5f5
    border-right 1px solid #f5f5f5
.teacherTxt p
    text-align center
    padding 10px
    font-size 24px
.teacherBottom
    display flex
    justify-content space-around
    background: #f5f5f5
    padding 10px
    border 1px solid #e1e1e1
.pageNumber
    margin 30px auto

</style>