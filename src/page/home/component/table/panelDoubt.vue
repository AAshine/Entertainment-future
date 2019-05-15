<template>
    <div id="panelDoubt">
        <div class="panelTitle">疑难解答</div>
    <Collapse v-model="doubt" accordion>
        <Panel v-for="(item,index) in question" :key="item.id">
            {{item.question}}
            <p slot="content">{{item.answer}}</p>
        </Panel>
  
</Collapse>
              </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            doubt: '1',
            question:null
        }
    },
    created(){
        this._question()
    },    
    methods:{
            async _question() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let question = await this.$api.matches.question()
        this.question = question.data
      } catch (e) {
        console.log('​catch -> e', e)
      }
    }
    }
}
</script>
<style lang="stylus" scoped>
#panelDoubt
    width 420px
.panelTitle
    font-size 21px
    font-weight 600
    padding 20px
#panelDoubt .ivu-collapse
    border none
#panelDoubt >>> .ivu-collapse-content
    background-color #fff
#panelDoubt >>> .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header
    color #333333
    text-overflow:ellipsis;
    overflow:hidden;
    max-width 360px
#panelDoubt >>> .ivu-collapse-content
    color #333333
#panelDoubt .ivu-collapse>.ivu-collapse-item
    border none
    
</style>