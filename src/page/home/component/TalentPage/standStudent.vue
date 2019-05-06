<template>
  <div class="standDiv">
    <div class="TitlePublic">
      <h3>优秀学员</h3>
    </div>
    <div class="standStudent">
      <div class="carousel-wrap" id="carousel">
        <transition-group tag="ul" class="slide-ul" name="list">
          <li
            v-for="(list,index) in slideListAll"
            :key="index"
            v-show="index===currentIndex"
            @mouseenter="stop"
            @mouseleave="go"
          >
            <standtPicture :slideList="slideList" :couldUrl="couldUrl" v-model="showList"></standtPicture>
          </li>
        </transition-group>
        <div class="carousel-items">
          <span
            v-for="(item,index) in slideListAll"
            :class="{'active':index===currentIndex}"
            @mouseover="change(index)"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import standtPicture from "../TalentPage/studentPicture";
import "../../../../assets/css/mediacss.css";
export default {
  data() {
    return {
      slideListAll: 3,
      slideList: [],
      currentIndex: 0,
      timer: "",
      couldUrl: "http://ppdeo8e31.bkt.clouddn.com/"
    };
  },
  components: {
    standtPicture
  },
  created() {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 8000);
    }),
      this._StudentA();
  },
  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 8000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    change(index) {
      this.currentIndex = index;
    },
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0;
      }
    },
    async _StudentA() {
      //局部引用不用写this
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let StudentA = await this.$api.matches.StudentA();
        this.slideList = StudentA.data;
        console.log(this.slideList);
      } catch (e) {
        console.log("​catch -> e", e);
      }
    }
  },
  computed:{
    showList:function(){
  
    }
  }
};
</script>
<style scoped>
.teachertodo {
  display: flex;
  flex-wrap: wrap;
}
.standDiv {
  margin-top: 80px;
  background: #ededed;
}
.standStudent {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.carousel-wrap {
  position: relative;
  width: 1260px;
  margin: 0 auto;
  overflow: hidden;
}

.slide-ul {
  width: 100%;
  height: 100%;
}
.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}
.slide-ul img {
  width: 100%;
  height: 100%;
}
.carousel-items {
  position: absolute;
  z-index: 10;
  bottom: 30px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}
.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}
.carousel-items .active {
  background-color: #fff;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}

.list-enter {
  transform: translateX(100%);
}

.list-leave {
  transform: translateX(0);
}
</style>