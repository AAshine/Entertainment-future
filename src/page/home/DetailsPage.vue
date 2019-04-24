<template>
    <div class="DetailsPage">
        <div class="ceshi">
            <span>{{detailData.name}}{{detailData.context}}</span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
      return {
          detailData:[],
          couldUrl:'http://ppdeo8e31.bkt.clouddn.com/'
      }
  },
    created() {
    this._creatview()
  },
  methods: {
           _creatview:function(){
              //局部引用不用写this
              // 这里用try catch包裹，请求失败的时候就执行catch里的
            let detailID=this.$route.params.id
            const url = `http://172.18.106.160:9201/api/yw/app/case/${detailID}`
            try{
              axios.get(url).then((res)=>{
                console.log(res.data)
                this.detailData = res.data.data
              })
            }catch(e){
              console.log('​catch -> e', e)
            }
          }
  }
}
</script>
<style lang="stylus">
.ceshi
    padding-top:200px;
</style>
          //  creatview:function(){
          //     //局部引用不用写this
          //     // 这里用try catch包裹，请求失败的时候就执行catch里的
          //   let detailID=this.$route.params.id
          //   const url = `http://172.18.106.160:9201/api/yw/app/case/`
          //   try{
          //     axios.get(url).then(dd=>{
          //     this.list=dd.data;
          //     console.log(this.list)
          //     console.log(detailID)
          //   })
          //   }catch(e){
          //     console.log('​catch -> e', e)
          //   }
          // }