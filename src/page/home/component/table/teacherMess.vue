<template>
  <div class="teacherMess">
    <div class="teachertodo">
      <div
        class="box"
        @click="push(item)"
        v-for="(item, index) in teacherUser.slice(0, 4)"
        :key="item.id"
      >
        <img :src="couldUrl+item.imgUrl">
        <div class="box-content">
          <h3 class="title">{{item.title}}</h3>
          <span class="post">{{item.sex}}</span>
          <span class="post">{{item.digest}}</span>
          <span class="post">{{item.remark}}</span>
          <ul class="icon"></ul>
        </div>
      </div>
    </div>
    <div class="button">
      <router-link to="/about">讲师在线咨询</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teacherUser: [],
      couldUrl: this.GLOBAL.couldurl
    };
  },
  created() {
    this.teacher();
  },
  methods: {
    async teacher() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        let res = await this.$api.matches.teacher();
        this.teacherUser = res.data;
      } catch (e) {
        console.log("​catch -> e", e);
      }
    }
    //跳转页面，到指定的路由上，修改浏览器中的url
    // push(item){
    //   this.$router.push({
    //     name:'teacher',
    //     params:{
    //       id:item.id
    //     }
    //   })
    // }
  }
};
</script>
<style scoped>
.teachertodo {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.teacherMess .button {
  display: flex;
  border-radius: 30px;
  width: 180px;
  border: 1px solid #9208c5;
  color: #9208c5;
  cursor: pointer;
  justify-content: center;
  margin: 30px auto;
  line-height: 40px;
  font-weight: 800;
}
.teacherMess .button a {
  color: #9208c5;
}
.box {
  text-align: center;
  overflow: hidden;
  position: relative;
  width: 285px;
  height: 350px;
  margin-right: 20px;
  cursor: pointer;
}
.box img {
  width: 100%;
  height: 100%;
}
.box:before {
  content: "";
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
.box:hover .title,
.box:hover .post {
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