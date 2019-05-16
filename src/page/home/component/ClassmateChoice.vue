<template>
  <div class="classmate">
    <div
      class="classmateChoice"
      v-for="(classmateDates,index) in classmateDate.slice(0, 4)"
      :key="classmateDates.id"
    >
      <div class="classmateNumber">
        <div class="classmateImage" @click="push(classmateDates)">
          <img :src="couldUrl+classmateDates.imgUrl">
        </div>
        <p @click="push(classmateDates)">{{classmateDates.name}}</p>
        <div class="classmateIntro">
          <div class="classLook">
            <i class="icon-fensi iconfontfensi"></i>
            <span>{{classmateDates.fans}}</span>
          </div>
          <div class="classPeople">
            <i class="icon-fensi icon-renyuanguanli1"></i>
            <span>{{classmateDates.click}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "classmateChoice",
  data() {
    return {
      classmateDate: [],
      couldUrl: this.GLOBAL.couldurl
    };
  },
  created() {
    this.matches();
  },
  methods: {
    async matches() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let res = await this.$api.matches.matches();
        this.classmateDate = res.data;
      } catch (e) {
        console.log("​catch -> e", e);
      }
    },
    //跳转页面，到指定的路由上，修改浏览器中的url
    push(item) {
      this.$router.push({
        name: "casePage",
        params: {
          id: item.id
        }
      });
    }
  }
};
</script>
<style lang="stylus">
.classLook {
  display: flex;
  align-items: center;
}

.classmateIntro span {
  margin-left: 5px;
}
</style>