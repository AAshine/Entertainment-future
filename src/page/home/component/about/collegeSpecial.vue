<template>
  <div class="collegeDiv">
    <div class="specialzhe" :style="backnote">
      <div class="collegeSpecial" :style="backnotecc">
        <div class="TitlePublic">
          <h3>优秀案例</h3>
        </div>
        <div class="specialImg">
          <div class="demo specialDeom" v-for="(item, index) in caseFour" :key="index">
            <figure class="imghvr-push-down">
              <img :src="couldUrl+item.imgUrl" alt="example-image">
              <figcaption>
                <h3>{{item.name}}</h3>
                <p>{{item.details}}</p>
              </figcaption>
              <a href="javascript:;"></a>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="TitlePublic">
      <h3>合作机构</h3>
    </div>
    <div class="pictureImg">
      <div class="demo hezuodemo" v-for="(item, index) in companyMessage" :key="index">
        <figure class="imghvr-slide-up">
          <img :src="couldUrl+item.imgUrl" alt="example-image">
          <figcaption>
            <div class="txt">{{item.name}}</div>
          </figcaption>
        </figure>
      </div>
    </div>
    <div class="TitlePublic">
      <h3>联系我们</h3>
    </div>
    <div class="contactMessage">
      <div class="messageLeft">
        <collegeMessage/>
      </div>
      <div class="mapRight">
        <baidu-map
          class="bm-view"
          ak="Q6IDvIAnUWcKgx3qIE6kABLwlnrEfq8B"
          :center="center"
          :zoom="zoom"
          @ready="handlerMap"
        >
          <bm-geolocation
            anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
            :showAddressBar="true"
            :autoLocation="true"
          ></bm-geolocation>
        </baidu-map>
      </div>
    </div>
  </div>
</template>
<script>
import collegeMessage from "../about/collegeMessage";
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmGeolocation from "vue-baidu-map/components/controls/Geolocation.vue";
export default {
  name: "collegeSpecial",
  components: {
    collegeMessage,
    BaiduMap,
    BmGeolocation
  },

  data() {
    return {
      center: { lang: 1, lat: 0 },
      zoom: 3,
      caseFour: [],
      couldUrl: this.GLOBAL.couldurl,
      companyMessage: [],
      backnote: {
        backgroundImage:
          "url(" +
          require("../../../../assets/images/home/collegeSecipal.png") +
          ")"
      },
      backnotecc: {
        backgroundImage:
          "url(" + require("../../../../assets/images/home/zhezhao.png") + ")"
      }
    };
  },
  created() {
    this._caseFour();
    this._companyMessage();
  },
  methods: {
    handlerMap({ BMap, map }) {
      this.center.lng = 120.110812;
      this.center.lat = 30.361959;
      this.zoom = 15;
    },
    async _caseFour() {
      try {
        let res = await this.$api.matches.matches();
        this.caseFour = res.data;
      } catch (e) {
        console.log("​catch -> e", e);
      }
    },
    async _companyMessage() {
      //局部引用不用写this
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let companyMessage = await this.$api.matches.companyMessage();
        this.companyMessage = companyMessage.data;
      } catch (e) {
        console.log("​catch -> e", e);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.bm-view {
  width: 100%;
  height: 100%;
}

.anchorBL {
  display: none;
}

.txt {
  text-align: center;
}

.specialImg {
  display: flex;
  justify-content: center;
  padding-bottom: 100px;

  & img {
    max-width: 300px;
    height: 500px;
  }
}

.caseMessages {
  width: 1200px;
  margin: 0 auto;
}

.specialDeom {
  height: 500px;
}

.demo {
  display: inline-block;
  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
}

.demo p {
  padding: 5px;
}

.hezuodemo {
  border: 1px solid #e1e1e1;
  width: 150px;
}

.hezuodemo img {
  width: 150px;
  max-height: 70px;
}

.demo textarea {
  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
  font-family: 'Roboto';
  font-size: 0.9em;
  height: 32px;
  padding: 6px 0px;
  resize: none;
  text-align: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

img {
  border: none;
}

.effects {
  margin: 3em 15em;
}

@media only screen and (max-width: 959px) {
  .demo {
    width: 32.5%;
  }
}

@media only screen and (max-width: 659px) {
  .demo {
    width: 49%;
  }
}

@media only screen and (max-width: 360px) {
  .demo {
    width: 100%;
  }
}

.pictureImg {
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid #e1e1e1;
}

.contactMessage {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.mapRight {
  width: 600px;
  margin-left: 50px;
}

.messageLeft {
  width: 570px;
  height: 500px;
  border: 1px solid #f5f5f5;
  padding-right: 40px;
}
</style>