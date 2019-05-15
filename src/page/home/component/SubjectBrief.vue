<template>
  <div class="subjectBrief">
    <div class="subjectBriefA" v-for="item in textData">
      <div class="subjectOne">
        <div class="SubjectImg">
          <div class="SubjectImgBorder">
            <i class="iconfont" v-bind:class="[item.icons]" ></i>
          </div>
        </div>
        <p>{{item.name}}</p>
        <div class="SubjectText">{{item.description}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'subjectBrief',
  data(){
    return{
          textData:[]
    }
  }
}
</script>
<style lang="stylus" scoped>
.iconfont{
  font-size: 32px;
}
.iconfontShow{
  font-size: 32px;
  color:#fff;
  }
.active {
  background: red;
}

.subjectBrief {
  display: flex;
  justify-content: center;
  align-items: center;
}

.subjectBriefA {
  box-sizing: border;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.4s;
  max-height 350px
  min-height 250px
  display: flex;
  align-items center
}



.subjectBriefA:hover {
  border: 1px solid rgba(227, 227, 227, 1);
  box-shadow: 0 0 8px 3px rgba(227, 227, 227, 0.35);

  & .SubjectImgBorder {
    background: rgba(147, 8, 197, 1);
    border: 1px solid #fff;
    box-shadow: 0 0 8px 3px rgba(147, 8, 197, 0.35);
  }
  & .iconfont{
  font-size: 32px;
  color:#fff;
  transition: all 0.7s;
  }
}

.subjectOne {
  width: 300px;


  & p {
    text-align: center;
    color: black;
    font-size: 18px;
    font-weight: 600;
  }

  .SubjectText {
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
    padding: 10px;
  }
}

.SubjectImg {
  background: #ffffff;
  box-shadow: 0 0 5px 3px rgba(180, 180, 180, 0.18);
  border-radius: 50%;
  width: 81px;
  height: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  transition: all 0.7s;
}

.SubjectImgBorder {
  border-radius: 50%;
  width: 77px;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.7s;
}
</style>