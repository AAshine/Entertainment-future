<template>
    <div class="LatestNews">
        <div class="TitlePublic">
              <h3>最新消息</h3>
          </div>
          <div class="lastestThress">
              <div class="lastestContent" v-for="(item, index) in newsContent.slice(0, 2)" :key="item.id">
                  <div class="lastestImg">
                      <img :src="couldUrl+item.imgUrl" alt="">
                  </div>
                  <div class="lastestTitle">
                     {{item.title}}
                  </div>
                  <div class="lastestText">
                     {{item.digest}}
                  </div>
                  <div class="lastestTime">
                      <div class="textTime">
                          <i class="icon-shijian"></i>
                      {{item.publishTime | formatDate}}
                      </div>
                      <div class="textPeople">
                          <i class="icon-yanjing-"></i>
                          {{item.click}}
                      </div>
                  </div>
              </div>
            <div class="lastestContent" id="panelDoubt">
                <div class="panelTitle">疑难解答</div>
<Collapse v-model="doubt" accordion>
        <Panel  v-for="(item,index) in questionList" :key="item.id">
            <span>{{item.question}}</span>
            <p slot="content">{{item.answer}}</p>
        </Panel>
</Collapse>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'lastNews',
    data(){
        return {
            doubt: '1',
            newsContent:[
                {
                    id: '001',
                    title:'新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1',
                    imgUrl:require('../../../assets/images/2.jpg'),
                    contents:'新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻',
                    time:'2018-07-25',
                    peopleNumber:'999'
                },
                {
                    id: '002',
                    title:'新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1',
                    imgUrl:require('../../../assets/images/2.jpg'),
                    contents:'新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻',
                    time:'2018-07-25',
                    peopleNumber:'888'
                }
            ],
            questionanswer:[],
            couldUrl:'http://ppdeo8e31.bkt.clouddn.com/'
        }
    },
    created() {
    this.news()
  },
  computed:{
      questionList(){
          let list = this.questionanswer;
          let questionList = [];
          for(let i=0;i<list.length;i++){
              if(questionList.length<=4){
               questionList.push(list[i]) 
              }
          }
          return questionList
      }
  },
  methods: {
    async news() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let res = await this.$api.matches.news()
        let questionanswer = await this.$api.matches.question()
        this.newsContent = res.data
        this.questionanswer = questionanswer.data
console.log(questionList)
      } catch (e) {
        console.log('​catch -> e', e)
      }
    },
  },
    filters: {
      formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d
      }
    }
}
</script>
<style lang="stylus" scoped>
.panelTitle
    font-size 21px
    font-weight 600
    padding 20px
.LatestNews
    background #493c98
    height 760px
    & .TitlePublic
        color #fefefe
        padding-top 80px
.lastestThress
    display flex
    justify-content center
.lastestContent 
        width 380px
        height 550px
        max-width 380px
        max-height 550px
        margin-left 25px
        color #e1e1e1
    & .lastestImg
        width 380px
        height 330px;
        max-width 380px
        max-height 330px
        & img 
            width 100%
            height 100%
    & .lastestTitle
        font-size 18px
        padding 5px
        text-overflow: ellipsis;
        overflow: hidden; 
        max-height 78px
    & .lastestText
        text-overflow: ellipsis;
        overflow: hidden; 
        max-height 70px
        padding 5px
        text-indent 2em
    & .lastestTime
        display flex
        justify-content space-between
        padding 10px
#panelDoubt .ivu-collapse
    background-color #493c98
    border none
#panelDoubt >>> .ivu-collapse-content
    background-color #493c98
#panelDoubt >>> .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header
    color #dbd9e8
    text-overflow:ellipsis;
    overflow:hidden;
    max-width 370px
#panelDoubt >>> .ivu-collapse-content
    color #dbd9e8
#panelDoubt .ivu-collapse>.ivu-collapse-item
    border none
</style>
