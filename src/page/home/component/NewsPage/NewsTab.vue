<template>
  <Tabs value="name1" id="classTab">
    <Tab-pane label="新闻中心" name="name1">
      <div class="douyin">
        <div class="contentPa">
          <div class="contentTop">
 <teacherOneTab :newsList="newsList" :couldUrl="couldUrl"></teacherOneTab>
          </div>
          <div class="pageNumber">
 <Page :total="total" :page-size="pageSize" @on-change="handleCurrentChange"/>
          </div>
        </div>
      </div>
    </Tab-pane>
    <Tab-pane label="疑问解答" name="name2">22222222</Tab-pane>
  </Tabs>
</template>
<script>
import axios from "axios";
import teacherOneTab from "../NewsPage/teacherOneTab";
export default {
  name: "ClassTab",
  components: {
    teacherOneTab //切换内容
  },
  data() {
    return {
      newsList: [],
      total: null,
      pages: 1,
      pageSize: 6,
      currentPage: 1,
      couldUrl: "http://ppdeo8e31.bkt.clouddn.com/"
    };
  },
  created() {
    this._newsAll();
  },
  // 获取路由信息，得到当前的页数
  methods: {
    async _newsAll() {
      let url = await this.$api.matches.newsAll();
      axios
        .get(url, {
          params: {
            currentPage: this.currentPage,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          this.total = res.data.data.total;
          this.newsList = res.data.data.list;
        });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(this.currentPage);
      this._newsAll();
    }
  }
};
</script>
<style lang="stylus" scoped>
.pageNumber {
  display: flex;
  justify-content: center;
  margin: 30px 0 30px 0;
}

#classTab .ivu-tabs-nav-scroll {
  width: 720px;
  display: flex;
}

#classTab .ivu-tabs-bar {
  width: 720px;
  margin: 0 auto;
}

#classTab .ivu-tabs-tabpane {
  display: flex;
  justify-content: center;
}

#classTab .ivu-tabs-ink-bar {
  background-color: #9208c5;
}
</style>
