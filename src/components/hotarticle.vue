<template>
    <div class="hotacrticle">
        <div class="hottitle">
            <p>热门文章</p>
        </div>
        <div class="articleDiv">
            <div class="artImg">
                <img src="" alt="">
            </div>
            <div class="artText">
                <p>文章标题</p>
                <p>时间：<span></span> 点击：<span></span> </p>
                <p>文章见解简介文章见解简介文章见解简介文章见解简介文简介文章见解简介文章见解简介文简介文章见解简介文章见解简介文章见解简介文章见解简介文章见解简介文章见解简介文章见解简介文章见解简介</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus">
.hottitle
    display flex
    margin-left 20px
    font-size 22px
    color #000000
.articleDiv
    width 670px
    height 100px
    border 1px solid #f1f1f1
    margin 15px auto
    display flex
.articleDiv .artImg
    width 130px
    height 100px
.articleDiv img
    width 130px
    height 100px
.artText
    margin-top 8px
    margin-left 15px
    & p
        text-align:left
    & p:first-child
        font-size 18px
        color #000000
        font-weight 500
    & p:nth-child(2)
        font-size 14px
    & p:nth-child(2),& p:nth-child(3)
        margin-top:5px
        white-space: nowrap
        text-overflow ellipsis
        overflow:hidden;
        width 500px
</style>