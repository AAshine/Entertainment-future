<template>
  <div class="header">
    <nav
      class="navbar home1_menu navbar-fixed navbar-default navbar-mobile bootsnav is-visible xsaa on menu-center"
      data-nav-status="toggle"
    >
      <div class="container-fluid">
        <div class="row">
          <!-- Start Top Search -->

          <!-- End Top Search -->
          <div class="container">
            <div class="row">
              <div class="attr-nav">
                <ul>
                  <li id="open-button" class="side-menu">
                    <a href="#">
                      <span class="icon-01"></span>
                      <span class="icon-02"></span>
                      <span class="icon-03"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- Start Header Navigation -->
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="#brand">
                  <img src="../assets/images/home/logo.png" class="logo" alt>
                </a>
              </div>
              <!-- End Header Navigation -->

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="navbar-menu">
                <ul class="nav navbar-nav navbar-center" data-in="fadeIn" data-out="fadeOut">
                  <li>
                    <router-link to="/">首页</router-link>
                  </li>
                  <li>
                    <router-link to="/classmate">课程介绍</router-link>
                  </li>
                  <li>
                    <router-link to="/talent">人才培养</router-link>
                  </li>
                  <li>
                    <router-link to="/business">师资力量</router-link>
                  </li>
                  <li>
                    <router-link to="/news">新闻资讯</router-link>
                  </li>
                  <li>
                    <router-link to="/casedo">优秀案例</router-link>
                  </li>
                  <li>
                    <router-link to="/about">关于我们</router-link>
                  </li>
                </ul>
              </div>
              <!-- /.navbar-collapse -->
            </div>
          </div>
        </div>
      </div>

      <!-- Start Side Menu -->
      <div class="side">
        <a href="#" id="close-button" class="close-side text-center">
          <span class="icon-01"></span>
          <span class="icon-02"></span>
          <span class="icon-03"></span>
        </a>
        <div class="side-menu-area fix">
          <div class="text-center">
            <a href class="side-brand">
              <img src="assets/images/logov2.png" alt>
            </a>
          </div>
          <p class="m-top-40 text-black">{{aboutMe}}</p>

          <div class="title m-top-70">
            <h2 class="text-black">娱未文化科技有限公司</h2>
            <div class="separator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="socail-bookmark">
            <div class="col-md-12 m-top-80">
              <div class="title">
                <h4 class="text-black">Socails</h4>
                <div class="separator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="contact-boxv1-item m-top-30">
                <ul class="list-inline">
                  <li>
                    <a href>
                      <i class="icon icon-douyinhao"></i>
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i class="icon icon-weibo-copy"></i>
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i class="icon icon-weixin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End off col-md-4 -->
            <div class="col-md-12 m-top-80">
              <div class="title">
                <h4 class="text-black">Address</h4>
                <div class="separator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="contact-boxv1-item m-top-30">
                <div class="boxv1-item-img">
                  <i class="iconsize icon-dizhiguanli iconcolor0"></i>
                </div>
                <div class="boxv1-item-content text-black">
                  <p class="m-top-10 text-black">杭州市滨江区某某街道某某号某某栋层</p>
                </div>
              </div>
            </div>
            <!-- End off col-md-4 -->
            <div class="col-md-12 m-top-80">
              <div class="title">
                <h4 class="text-black">Our Phone &amp; Fax</h4>
                <div class="separator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="contact-boxv1-item m-top-30">
                <div class="boxv1-item-img">
                  <i class="iconsize icon-zuoji iconcolor1"></i>
                </div>
                <div class="boxv1-item-content text-black">
                  <p class="m-top-10">
                    移动电话: (012) 345 - 6789
                    <br>座机: 555 - 675 0037
                  </p>
                </div>
              </div>
            </div>
            <!-- End off col-md-4 -->
            <div class="col-md-12 m-top-80">
              <div class="title">
                <h4 class="text-black">Email</h4>
                <div class="separator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="contact-boxv1-item m-top-30">
                <div class="boxv1-item-img">
                  <i class="iconsize icon-youxiang iconcolor2"></i>
                </div>
                <div class="boxv1-item-content text-black">
                  <p class="m-top-10">
                    yuwei@qq.com
                    <br>yuwei@qq.com
                  </p>
                </div>
              </div>
            </div>
            <!-- End off col-md-4 -->
            <div class="col-md-12 m-top-80">
              <div class="title">
                <h4 class="text-black">上班时间</h4>
                <div class="separator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="contact-boxv1-item m-top-30">
                <div class="boxv1-item-img">
                  <i class="iconsize icon-shangbanshijian iconcolor3"></i>
                </div>
                <div class="boxv1-item-content text-black">
                  <p class>星期一到星期五 早上9:00-下午18:00</p>
                </div>
              </div>
            </div>
            <!-- End off col-md-4 -->
          </div>
        </div>
      </div>
      <!-- End Side Menu -->
    </nav>
  </div>
</template>
<script scoped>
import axios from "axios";
export default {
  data() {
    return {
      theme1: "light",
      ABOUT_ME: "ABOUT_ME",
      ASD: "ASD",
      aboutMe: null
    };
  },
  created() {
    this._companyGobel();
  },
  methods: {
    async _companyGobel() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let current = await this.$api.matches.companyGobel();
        axios
          .get(current, {
            params: {
              key: this.ABOUT_ME
            }
          })
          .then(res => {
            this.aboutMe = res.data.data;
          });
        axios
          .get(current, {
            params: {
              key: this.ASD
            }
          })
          .then(res => {
            this.ASD = res.data.data;
          });
      } catch (e) {
        console.log("​catch -> e", e);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.navbar-header img {
  width: 110px;
}

.navbar-brand {
  margin-top: -10px;
}

.iconsize {
  font-size: 48px;
}

.iconcolor0 {
  color: purple;
}

.iconcolor1 {
  color: red;
}

.iconcolor2 {
  color: green;
}

.iconcolor3 {
  color: orange;
}
</style>
