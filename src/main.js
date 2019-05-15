import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
import $ from 'jquery'
import api from './api/install'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import BackTop from './page/home/component/BackTop/src/BackTop'
import Vuelidate from 'vuelidate'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
Vue.use(Vuelidate)
Vue.use(VueAwesomeSwiper)
Vue.use(BackTop)
Vue.use(vuex)
Vue.use(api)
import "../src/assets/icon/iconfont.css";
import "swiper/dist/css/swiper.min.css";
import "../src/assets/css/plugins.css";
import "../src/assets/css/style.css";
import '../src/assets/css/public.styl'
import '../src/assets/css/index.styl'
import jq from '../src/assets/js/vendor/jquery1.11.2.min'  
import bootstrap from '../src/assets/js/vendor/bootstrap' 
import jquerymagnific from '../src/assets/js/jquery.magnific.popup' 
import jqueryeasing from '../src/assets/js/jquery.easing.1.3' 
import jquerytouchSwipe from '../src/assets/js/jquery.touchSwipe.min'
import bootsnav from '../src/assets/js/bootsnav' 
import jqueryformchimp from '../src/assets/js/jquery.formchimp'
Vue.prototype.$ = $;  
Vue.prototype.$jq = jq;   
Vue.prototype.$bootstrap = bootstrap; 
Vue.prototype.$jquerymagnific = jquerymagnific; 
Vue.prototype.$jqueryeasing = jqueryeasing; 
Vue.prototype.$jquerytouchSwipe = jquerytouchSwipe; 
Vue.prototype.$bootsnav = bootsnav;
Vue.prototype.$jqueryformchimp = jqueryformchimp;
Vue.config.productionTip = false
//创建全局过滤器 时间格式
Vue.filter('formatDate', function (value) {
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
})
const mappingFull = {}
router.beforeEach((to, from, next) => {
  const matchPath = to.matched.slice().reverse();
  const meta = mappingFull[to.fullPath];
  // console.log(to.fullPath);   // 可以打印输出
  // console.log(meta);
  let nearestWithTitle = undefined;
  let nearestWithMeta = undefined;
  if (meta) {
    nearestWithTitle = { meta };
    nearestWithMeta = { meta };
  } else {
    nearestWithTitle = matchPath.find(r => r.meta && r.meta.title);
    nearestWithMeta = matchPath.find(r => r.meta && r.meta.metaTags);
  }

  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));

  if (to.need && to.need.requireAuth) {
    if (store.getters.token) { 
      next();
    }
    else {
      next('/home');
      // next({
      //   path: '/login',
      //   query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      // });
    }
  }
  else {
    next();
  }
});

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
})
var formatDate = Vue.filter('formatDate')
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
