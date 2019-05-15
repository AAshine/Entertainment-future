<template>
  <div id="CourserDetails">
    <!-- img-container -->
    <div class="slider-imgcontainer" ref="container">
      <img v-for="(item,index) in indexBanner" :src="couldUrl+item.imgUrl" alt="indexBanner">
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
</template>

<script>
export default {
  name: "CourseDetails",
  props: {
    indexBanner: {},
    couldUrl: {}
  },
  data() {
    /**
     * @property {array} imgs 图片组
     * @property {number} currentIndex 当前图片的索引
     * @property {array} buttons 索引按钮
     * @property {number} timer 计时器
     */
    return {
      imgs: [],
      currentIndex: 0,
      buttons: [0, 1, 2],
      timer: null
    };
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
        if(!this.timer) {
          this.autoAnimate();
        }
      }
      this.move();
    },
    /**
     * @method
     * @desc 自动轮播图片
     */
    autoAnimate() {
      this.timer = setInterval(() => {
        if(this.currentIndex === 2){
          this.currentIndex = 0;
        }else {
          this.currentIndex ++ ;
        }
        this.move();
      //如果在mounted钩子中使用$refs，如果ref是定位在有v-if、v-for、v-show中的DOM节点，返回来的只能是undefined，因为在mounted阶段他们根本不存在
      },4000)
    }
  },
  computed: {},
  mounted() {
    this.autoAnimate();
  },
  updated: function() {
    this.$nextTick(() => {
      this.move();
    });
  }
};
</script>

<style>
</style>