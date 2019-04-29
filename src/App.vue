<template>
  <div id="app">
    <HomeHeader/>
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    </keep-alive>
    <AllFooter/>
  </div>
</template>

<script>
import HomeHeader from '../src/components/HomeHeader'
import AllFooter from '../src/components/AllFooter'
export default {
  name: 'App',
  components:{
    HomeHeader,
    AllFooter
  },
    //时间格式
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
</style>
