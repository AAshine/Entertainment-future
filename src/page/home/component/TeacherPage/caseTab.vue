<template>
    <div class="teacherOneTab">
        <div class="teacherContent" v-for="(item,index) in caselist" :key="index">
            <div class="teacherTxtImg">
                <div class="teacherImg">
          <div class="demo specialDeom">
            <figure class="imghvr-push-down">
              <img :src="couldUrl+item.imgUrl" alt="example-image">
              <figcaption>
                <h3>{{item.title}}</h3>
                <p>{{item.digest}}</p>
              </figcaption>
            </figure>
          </div>
                </div>
                <div class="teacherTxt">
                    <div class="teachername"><p>{{item.name}}</p></div>
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
        caselist:{},
        couldUrl:null
    }
}
</script>
<style lang="stylus" scoped>
.teacherImg
    width 255px
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
    width 255px
    height 300px
    max-height 300px
    overflow hidden
.teacherTxtImg
    width 255px;
    height 400px
    display: flex;
    flex-direction: column;
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