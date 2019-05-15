<template>
  <div class="DetailsPage">
    <div class="bannerImg">
      <img src="../../assets/images/home/banner1.png">
    </div>
    <div class="doubleDD">
      <div class="detailLeft">
        <div class="title">{{caselID.title}}</div>
        <div class="titleBr"></div>
        <div class="simpleMess">
          <div class="simpletime">
            时间：
            <span>{{caselID.updateTime | formatDate}}</span>
          </div>
          <div class="simpletime">
            来源：
            <span>{{caselID.sortNum}}</span>
          </div>
          <div class="simpletime">
            作者：
            <span>{{caselID.operator}}</span>
          </div>
          <div class="simpletime">
            点击：
            <span>{{caselID.click}}</span>
          </div>
        </div>
        <div class="content">
          <div class="context" v-html="caselID.content"></div>
          <img :src="couldUrl+caselID.imgUrl" alt>
        </div>
        <div class="updown">
          <!-- @click="jumpUp" @click="jumpNext" -->
          <span @click="jumpUp">上一篇:{{uptitle}} {{caselID.beforeTitle}}</span>
          <span @click="jumpNext">下一篇:{{nexttitle}} {{caselID.nextTitle}}</span>
        </div>
        <hotarticle :hotart="hotart" :key="key"></hotarticle>
      </div>
      <div class="detailRight">
        <HotCourse/>
        <GetNow/>
        <ContactUs/>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import HotCourse from "../../components/HotCourse";
import GetNow from "../../components/GetNow";
import ContactUs from "../../components/ContactUs";
import hotarticle from "../../components/hotarticle";
export default {
  name: "DetailPage",
  components: {
    GetNow,
    ContactUs,
    HotCourse,
    hotarticle
  },
  data() {
    return {
      hotart: [], //热门文章的调用
      caselID: [],
      //上下页的id
      nexttitle: null,
      uptitle: null,
      newlistid: 0,
      NextContent: null,
      UpContent: null,
      //上下页的title
      nextID: null,
      Uptitlename: null,
      show: true,
      couldUrl: "http://file.kxdz2.com/"
    };
  },
  watch: {
    //监听路由，只要路由有变化(路径，参数等变化)都有执行下面的函数
    $route: {
      handler: function(val, oldVal) {
        if (val.name === "newsDetails") {
          this._creatview();
          // , this._nextID(), this._newlistid();
        }
      }
    }
  },
  computed: {
    key() {
      // 或者 :key="$route.path" 只要保证key唯一就可以了
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    }
  },
  created() {
    this._creatview();
    this._hotart();
    // , this._newlistid(), this._nextID();
  },
  methods: {
    async _hotart() {
      //局部引用不用写this
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let hotres = await this.$api.matches.hotlist();
        this.hotart = hotres.data;
      } catch (e) {
        console.log("​catch -> e", e);
      }
    },
    async _creatview() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      let caselID = this.$route.params.id;
      try {
        let current = await this.$api.matches.newArt();
        //拿到news api public
        const url = current + `${caselID}`;
        axios.get(url).then(res => {
          this.caselID = res.data.data;
        });
      } catch (e) {
        console.log("​catch -> e", e);
      }
    },
    jumpUp(item) {
      this.$router.push({
        name: "newsDetails",
        params: {
          id: this.caselID.beforeId
        }
      });
    },
    jumpNext(item) {
      this.$router.push({
        name: "newsDetails",
        params: {
          id: this.caselID.nextId
        }
      });
    }
  }
  // methods: {
  //   async _newlistid() {
  //     // 这里用try catch包裹，请求失败的时候就执行catch里的
  //     try {
  //       let newlistid = await this.$api.matches.newlistid();
  //       this.newlistid = newlistid.data;
  //       console.log(this.newlistid )
  //     } catch (e) {
  //       console.log("​catch -> e", e);
  //     }
  //   },
  //   async _creatview() {
  //     // 这里用try catch包裹，请求失败的时候就执行catch里的
  //     let caselID = this.$route.params.id;
  //     try {
  //       let current = await this.$api.matches.newArt();
  //       //拿到news api public
  //       const url = current + `${caselID}`;
  //       axios.get(url).then(res => {
  //         this.caselID = res.data.data;
  //       });
  //     } catch (e) {
  //       console.log("​catch -> e", e);
  //     }
  //   },
  //   async _nextID() {
  //     try {
  //       let newID = this.$route.params.id;
  //       let current = await this.$api.matches.newArt();
  //       let newlistid = await this.$api.matches.newlistid();
  //       for (let j = 0; j < this.newlistid.length; j++) {
  //         if (j < this.newlistid.length) {
  //           if (this.newlistid[j] == newID) {
  //             //获取下一页的数据
  //             if (j+1 < this.newlistid.length) {
  //               axios.get(current + `${newlistid.data[j + 1]}`).then(res => {
  //                 this.nexttitle = res.data.data.title;
  //                 this.NextContent = res.data.data;
  //               });
  //             }else {
  //               this.nexttitle = '已经是最后一篇了'
  //             }
  //             //获取上一页的数据
  //             if (newlistid.data[j - 1] > 0) {
  //               axios.get(current + `${newlistid.data[j - 1]}`).then(res => {
  //                 this.uptitle = res.data.data.title;
  //                 this.UpContent = res.data.data;
  //               });
  //             }else{
  //               this.uptitle = '没有上一篇啦'
  //             }
  //           }
  //         }
  //       }
  //     } catch (e) {
  //       console.log("​catch -> e", e);
  //     }
  //   },
  //   jumpUp(item) {
  //     this.$router.push({
  //       name: "newsDetails",
  //       params: {
  //         id: this.UpContent.id
  //       }
  //     });
  //   },
  //   jumpNext(item) {
  //     this.$router.push({
  //       name: "newsDetails",
  //       params: {
  //         id: this.NextContent.id
  //       }
  //     });
  //   }
  // }
};
</script>
<style lang="stylus" scoped>
.doubleDD {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
}

.detailLeft {
  width: 750px;
  border: 1px solid #f1f1f1;
  text-align: center;
  margin-right: 40px;

  & .title {
    padding-top: 40px;
    font-size: 24px;
    color: #333333;
  }
}

.titleBr {
  width: 135px;
  border: 1px solid #000000;
  margin: 16px auto;
}

.detailRight {
  width: 420px;
}

.simpleMess {
  display: flex;
  justify-content: center;
}

.simpleMess > div {
  margin-right: 16px;
}

.content img {
  width: 400px;
  height: 300px;
}

.context >>> img {
  width: 400px;
  height: 300px;
}

.context {
  padding: 15px 0 15px 0;
}

.updown {
  display: flex;
  justify-content: space-around;
  padding: 20px 0 20px 0;
  color: #000000;

  & span {
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
}
</style>