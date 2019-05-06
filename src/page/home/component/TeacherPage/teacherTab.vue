<template>
  <Tabs value="name1" id="classTab">
    <Tab-pane label="抖音培训" name="name1">
      <div class="contentPa">
        <div class="contentTop">
          <teahcerOneTab :teacherlist="teacherlist" :couldUrl="couldUrl"></teahcerOneTab>
        </div>
        <div class="pageNumber">
          <Page :total="total" :page-size="pageSize" @on-change="handleCurrentChange1"></Page>
        </div>
      </div>
    </Tab-pane>
    <Tab-pane label="委托培养" name="name2">
      <div class="contentPa">
        <div class="contentTop">
          <caseTab :caselist="caselist" :couldUrl="couldUrl"></caseTab>
        </div>
        <div class="pageNumber">
<Page :total="totalcase" :page-size="pageSize" @on-change="handleCurrentChange2"></Page>
        </div>
      </div>
    </Tab-pane>
    <Tab-pane label="人才预定" name="name3">
      <div class="contentPa">
        <div class="contentTop">
          <studentTab :studentlist="studentlist" :couldUrl="couldUrl"></studentTab>
        </div>
        <div class="pageNumber">
<Page :total="totalstudent" :page-size="pageSize" @on-change="handleCurrentChange3"></Page>
        </div>
      </div>
    </Tab-pane>
    <Tab-pane label="达人输出" name="name4">
      <div class="contentPa">
        <div class="contentTop">
          <darenTab :darenlist="darenlist" :couldUrl="couldUrl"></darenTab>
        </div>
        <div class="pageNumber">
<Page :total="totaldaren" :page-size="pageSize" @on-change="handleCurrentChange4"></Page>
        </div>
        </div>
      </div>
    </Tab-pane>
  </Tabs>
</template>
<script>
import axios from "axios";
import CouserDetails from "../table/CourseDetails";
import ClassObject from "../table/ClassObject";
import teahcerOneTab from "../TeacherPage/teacherOneTab";
import studentTab from "../TeacherPage/studentTab";
import caseTab from "../TeacherPage/caseTab";
import darenTab from "../TeacherPage/darenTab";
export default {
  name: "ClassTab",
  components: {
    CouserDetails, //图片切换
    ClassObject, //切换内容
    teahcerOneTab,
    studentTab,
    caseTab,
    darenTab
  },
  data() {
    return {
      teacherlist: [],
      caselist:[],
      studentlist: [],
      darenlist:{},
      total: null,
      totalcase:null,
      totalstudent:null,
      totaldaren:null,
      pages: 1,
      pageSize: 6,
      currentPage: 1,
      couldUrl: "http://ppdeo8e31.bkt.clouddn.com/"
    };
  },
  created() {
    this._teacherAll()
    this._caseAll()
    this._studentAll()
    this._darenAll()
  },
  methods: {
    //老师
    async _teacherAll() {
      let url = await this.$api.matches.teacherAll();
      axios
        .get(url, {
          params: {
            currentPage: this.currentPage,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          this.total = res.data.data.total;
          this.teacherlist = res.data.data.list;
        });
    },
    handleCurrentChange1(val) {
      this.currentPage = val;
      console.log(this.currentPage);
      this._teacherAll();
    },
    //案例
        async _caseAll() {
      let url = await this.$api.matches.caseAll();
      axios
        .get(url, {
          params: {
            currentPage: this.currentPage,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          this.totalcase = res.data.data.total;
          this.caselist = res.data.data.list;
        });
    },
    handleCurrentChange2(val) {
      this.currentPage = val;
      console.log(this.currentPage);
      this._caseAll();
    },
        //学生
        async _studentAll() {
      let url = await this.$api.matches.studentAll();
      axios
        .get(url, {
          params: {
            currentPage: this.currentPage,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          this.totalstudent = res.data.data.total;
          this.studentlist = res.data.data.list;
        });
    },
    handleCurrentChange3(val) {
      this.currentPage = val;
      console.log(this.currentPage);
      this._caseAll();
    },
      //达人
        async _darenAll() {
      let url = await this.$api.matches.darenAll();
      axios
        .get(url, {
          params: {
            currentPage: this.currentPage,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          this.totaldaren = res.data.data.total;
          this.darenlist = res.data.data.list;
          console.log(this.darenlist)
        });
    },
    handleCurrentChange4(val) {
      this.currentPage = val;
      this._darenAll();
    }
  }
};
</script>
<style lang="stylus">
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

.contentTop {
  display: flex;
  justify-content: center;
  // height: 860px;
}

.pageNumber {
  display: flex;
  justify-content: center;
  margin: 30px 0 30px 0;
}
</style>
