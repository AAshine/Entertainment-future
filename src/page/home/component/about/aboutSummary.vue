<template>
    <div class="InSummary">
        <div class="SummaryLeft">
          <div class="summaryTitle">
            <div class="summaryTop">
              About me
            </div>
            <div class="summaryContent">
              杭州娱未文化科技有限公司杭州娱未文化科技有限公司杭杭州娱未文化科技有限公司杭州娱未文化科技有限公司杭州娱未文化科技有限公司杭州娱未文化科技有限公司州娱未文化科技有限公司杭州娱未文化科技有限公司
            </div>
            <!-- <div class="SummaryBtn"><a href="#">联系我们</a></div> -->
          </div>
        </div>
        <div class="SummaryRight">
          <img src="../../../../assets/images/home/company.png" alt="">
        </div>
    </div>
</template>
<style lang="stylus" scoped>
// @import "../../../assets/css/index.styl"
.InSummary
    display flex
    justify-content: center
    margin-top 50px 
    margin-bottom 50px
.InSummary .SummaryLeft
    position: relative
    width 470px
    height 500px
.SummaryRight
  margin-left 30px
  width:700px
  height 500px
.SummaryRight img
  width 100%
  height 100%
.InSummary .summaryTop
    font-size 21px
    font-weight 600
    padding 92px 0 30px 0
    color black
    font-size 36px
.InSummary .summaryContent
    text-indent 2em
    line-height: 32px
    letter-spacing 2px
    font-size 18px
.InSummary .SummaryBtn
    position: absolute
    bottom 40px
    left 40px
    display: flex
    justify-content: center
    align-content: center
    padding:5px 0 5px 0
    width: 130px
    color: black;
    border 1px solid #a21fcd
    border-radius: 30px;
.InSummary .SummaryBtn a
    color: #a21fcd
.InSummary .SummaryBtn a:hover
    color #4BAFD3
</style>