<template>
  <div class="ClassObject">
    <!-- <div id="CourserDetails">
      img-container
      <div class="slider-imgcontainer" ref="container">
        <img v-for="(item,index) in navList" :src="couldUrl+item.imgUrl" alt="index">
      </div>
      index
      <div class="slider-buttons">
        <span
          v-for="button in navList.length"
          class="slider-imgindex"
          :class="{ 'slider-imgindex-active': currentIndex === button }"
          @click="doTheAnimate(button)"
        ></span>
        @mouseout="autoAnimate"
      </div>
      left right button
      <div class="slider-move">
        <span class="to-left" @click="doTheAnimate('left')"></span>
        <span class="to-right" @click="doTheAnimate('right')"></span>
      </div>
    </div>-->
    <div id="CourserDetails">
      <!-- img-container -->
      <div class="slider-imgcontainer" ref="container">
        <img
          v-for="(item,index) in navList"
          :src="couldUrl+item.imgUrl"
          :key="index"
          alt="img.index"
        >
      </div>
      <!-- index -->
      <div class="slider-buttons">
        <span
          v-for="button in buttons"
          class="slider-imgindex"
          :class="{ 'slider-imgindex-active': currentIndex === button }"
          @click="doTheAnimate(button)"
        ></span>
      </div>
      <div class="slider-move"></div>
    </div>
    <div class="imgText">
      <div class="classObject" v-model="currentNumber">
        <div class="classTitle">{{navList[currentNumber].name}}</div>
        <div class="classDoing">
          <div class="classDoingThree">
            <div class="classGrade">
              <span>学员满意度</span>
              <Rate disabled v-model="valueDisabled"></Rate>
            </div>
            <div class="classTeach">
              <i class="icon-renyuanguanli1"></i>
              老师:{{navList[currentNumber].operator}}
            </div>
            <div class="classEnter">
              <span>我要报名</span>
            </div>
          </div>
        </div>
        <p class="classPP">课程简介</p>
        <div class="classText">{{navList[currentNumber].digest}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    navList: {}
  },
  data() {
    return {
      // navList: [],
      valueDisabled: 5,
      couldUrl: "http://file.kxdz2.com/",
      currentIndex: 0,
      timer: null,
      buttons: [0, 1, 2, 3],
      currentNumber: 0
    };
  },
  created(){
    this.currentNumber = this.currentIndex;
  },
  methods: {
    move() {
      let left = `-${this.currentIndex * 100}%`;
      this.$refs.container.style.left = left;
    },
    doTheAnimate(arg) {
      clearInterval(this.timer);
      this.timer = null;
      // 鼠标悬停
      if (typeof arg == "number") {
        this.currentIndex = arg;
        // 鼠标点击
      } else if (typeof arg == "string") {
        if (arg && arg === "left" && this.currentIndex <= 2) {
          this.currentIndex++;
        } else if (arg && arg === "right" && this.currentIndex >= 1) {
          this.currentIndex--;
        }
        if (!this.timer) {
          this.autoAnimate();
        }
      }
      this.move();
    },
    autoAnimate() {
      this.timer = setInterval(() => {
        if (this.currentIndex === 2) {
          this.currentIndex = 0;
        } else {
          this.currentIndex++;
        }
        this.move();
        //如果在mounted钩子中使用$refs，如果ref是定位在有v-if、v-for、v-show中的DOM节点，返回来的只能是undefined，因为在mounted阶段他们根本不存在
      }, 4000);
    }
  },
  updated: function() {
    this.$nextTick(() => {
      this.move();
      this.currentNumber = this.currentIndex;
    });
  }
};
</script>
<style lang="stylus" scoped>
.classObject {
  width: 810px;
  max-width: 810px;
}

.classObject .classTitle {
  font-size: 18px;
  color: #000000;
  text-align: center;
  padding: 10px;
}

.classDoing {
  background: #f5f5f5;
  border: 1px solid #e1e1e1;
}

.classDoingThree {
  display: flex;
  justify-content: center;
  margin: 8px;

  & .classGrade, .classTeach, .classEnter {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.classGrade >>>.ivu-rate-star {
  margin-right: 0;
}

.classGrade span {
  padding-right: 3px;
}

.classEnter {
  margin: 0;
}

.classEnter span {
  padding: 6px 18px 6px 18px;
  border: 1px solid #9208c5;
  border-radius: 5px;
  color: #9208c5;
  cursor: pointer;
}

.classText {
  padding: 0 5px 0 5px;
  text-indent: 2em;
}

.classPP {
  padding: 10px;
  font-size: 18px;
}

.textTitle {
  text-indent: 2em;
  padding: 10px;
}

.demo-tabs-style2 > .ivu-tabs-ink-bar {
  background-color: #9208c5;
}

.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
  border-color: transparent;
}

.demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
  border-color: #fff;
}

.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
  border-radius: 0;
  background: #fff;
}

.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
  border-top: 1px solid #9208c5;
}

.demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: #9208c5;
  position: absolute;
  top: 0;
  left: 0;
}
</style>