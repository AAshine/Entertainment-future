<template>
  <div class="teacherOneTab">
    <div class="teacherContent" v-for="(item, index) in studentUser" :key="index">
      <div class="teacherTxtImg">
        <div class="teacherImg">
          <div class="box" :key="item.id">
            <img :src="couldUrl+item.imgUrl">
            <div class="box-content">
              <h3 class="title">学生简介</h3>
              <span class="post">{{item.details}}</span>

              <ul class="icon"></ul>
            </div>
          </div>
        </div>
        <div class="teacherTxt">
          <p>{{item.categoryName}}</p>
          <div class="teacherBottom">
            <span>
              <i class="icon-yanjing-"></i>{{item.click}}
            </span>
            <span>
              <i class="icon-fensi"></i>
              {{item.fans}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { async } from "q";
export default {
  data() {
    return {
      studentUser: [],
      couldUrl: "http://file.kxdz2.com/"
    };
  },
  created() {
    this._caseEight();
  },
  methods: {
    async _caseEight() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let studentUser = await this.$api.matches.caseEight();
        this.studentUser = studentUser.data;
      } catch (e) {
        console.log("​catch -> e", e);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.teacherOneTab {
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  width: 1260px;
  justify-content: center;
  margin: 0 auto;
}

.teacherContent {
  display: flex;
  margin: 10px;
  width: 285px;
  height: 400x;
  max-width: 285px;
  max-height: 400px;
}

.teacherContent img {
  width: 100%;
  width: 285px;
  height: 300px;
  max-height: 300px;
  overflow: hidden;
}

.teacherTxtImg {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 285px;
}

.teacherTxt p {
  text-align: center;
  padding: 14px 0 14px 0;
  font-size: 24px;
  border-left: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
}

.teacherBottom {
  display: flex;
  justify-content: space-around;
  background: #f5f5f5;
  height: 50px;
  align-items: center;
}

.pageNumber {
  margin: 30px auto;
}

.teacherBottom {
  border: 1px solid #e1e1e1;
}

.teacherBottom i {
  margin-right: 5px;
}

.box {
  text-align: center;
  overflow: hidden;
  position: relative;
  width: 285px;
  margin-right: 20px;
  cursor: pointer;
}

// .box img {
//   width: 100%;
//   height: 100%;
// }

.box:before {
  content: '';
  width: 0;
  height: 100%;
  background: #000;
  padding: 14px 18px;
  position: absolute;
  top: 0;
  left: 50%;
  opacity: 0;
  transition: all 500ms cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
}

.box:hover:before {
  width: 100%;
  left: 0;
  opacity: 0.5;
}

.box .box-content {
  width: 100%;
  padding: 14px 18px;
  color: #fff;
  position: absolute;
  top: 15%;
  left: 0;
}

.box .title {
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  padding: 5px;
  text-transform: uppercase;
  margin: 0;
  opacity: 0;
  transition: all 0.5s ease 0s;
  max-height: 60px;
}

.box .post {
  font-size: 15px;
  text-transform: capitalize;
  opacity: 0;
  transition: all 0.5s ease 0s;
}

.box:hover .title, .box:hover .post {
  opacity: 1;
  transition-delay: 0.7s;
}

.box .icon {
  padding: 0;
  margin: 0;
  list-style: none;
  margin-top: 15px;
}

.box .icon li {
  display: inline-block;
}

.box .icon li a {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  background: #f74e55;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-right: 5px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease 0s;
}

.box:hover .icon li a {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.5s;
}

.box:hover .icon li:last-child a {
  transition-delay: 0.8s;
}
</style>