<template>
    <div class="hotCourse">
        <div class="courseRecom">
            <span>热点课程推荐</span>
            <span>查看更多</span>
        </div>
        <div class="border"></div>
        <div class="courseContent" v-for="(item,index) in classmate" :key="index">
            <div class="courseLeft">
                 <img :src="item.imgUrl" alt="">
            </div>
            <div class="courseRight">
                <p>{{item.className}}</p>
                {{item.Look}}}
            </div>
        </div>
        <div class="border"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            classmate:[
                {
                    className:'一号课程',
                    imgUrl: require('../../../../assets/images/home/ke1.png'),
                    Look:'课程简介简介简介简介简介课程简介简介简介简介简介介简介简介介简介简介介简介简介介简介简介介简介简介课程简介简介课程简介简介简介简介简介'
                },
                                {
                    className:'一号课程',
                    imgUrl: require('../../../../assets/images/home/ke1.png'),
                    Look:'课程简介简介简介简介简介课程简介简介简介简介简介介简介简介介简介简介介简介简介介简介简介介简介简介课程简介简介课程简介简介简介简介简介'
                }
            ]
        }
    }
}
</script>
<style lang="stylus">

</style>