<template>
  <div class="standDiv">
    <div class="TitlePublic">
      <h3>优秀学员</h3>
    </div>
    <div class="standStudent">
      <div class="carousel-wrap" id="carousel">
        <transition-group tag="ul" class="slide-ul" name="list">
          <li
            v-for="(page,index) of pages"
            :key="index"
            v-show="index===currentIndex"
            @mouseenter="stop"
            @mouseleave="go"
          >
            <standtPicture :slideList="slideList" :page="page" :couldUrl="couldUrl"></standtPicture>
          </li>
        </transition-group>
        <div class="carousel-items">
          <span
            v-for="(page,index) of pages"
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
      couldUrl: this.GLOBAL.couldurl
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
      if (this.currentIndex > this.pages.length - 1) {
        this.currentIndex = 0;
      }
    },
    async _StudentA() {
      try {
        let StudentA = await this.$api.matches.StudentA();
        this.slideList = StudentA.data;
      } catch (e) {
        console.log("​catch -> e", e);
      }
    }
  },
  computed: {
    pages: function() {
      const pages = [];
      this.slideList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
          this.currentIndex = 0;
        }
        pages[page].push(item);
      });
      return pages;
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