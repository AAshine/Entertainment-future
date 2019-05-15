<template>
  <div class>
    <footer class="bg-prople">
      <div class="footerContent">
        <div class="footerA">
          <img src="../assets/images/home/logofooter.png" alt>
        </div>
        <div class="footerB">
          <div class="footerBA">
            <router-link to="/classmate">
              <p>精品课程</p>
            </router-link>
            <router-link to="/talent">
              <p>人才培养</p>
            </router-link>
            <router-link to="/business">
              <p>师资力量</p>
            </router-link>
          </div>
          <div class="footerBB">
            <router-link to="/news">
              <p>新闻资讯</p>
            </router-link>
            <router-link to="/casedo">
              <p>优秀案例</p>
            </router-link>
            <router-link to="/about">
              <p>关于我们</p>
            </router-link>
          </div>
        </div>
        <div class="footerC">
          <div class="footerCA">
            <img src="../assets/images/home/gongzhonghao.jpg" alt>
          </div>
          <div class="footerCB">
            <img src="../assets/images/home/weibo.png" alt>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style lang="stylus">
.bg-prople {
  background: #493c98;
}

.footerContent {
  padding: 80px;
  display: flex;
  justify-content: center;
}

.footerA {
  display: flex;
  align-items: center;
}
.footerB
    & a
        color #ededed
    & a:hover 
        color rgb(180,180,180)
.footerB {
  display: flex;
  color: #dddaec;
  text-align: center;

  & .footerBA, .footerBB, .footerBC {
    margin-left: 80px;
  }

  & p {
    padding: 5px;
  }
}

.footerC {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footerC img {
  width: 120px;
  cursor: pointer;
}

.footerCA {
  margin-left: 126px;
}

.footerCA, .footerCB {
  padding-right: 80px;
}
</style>