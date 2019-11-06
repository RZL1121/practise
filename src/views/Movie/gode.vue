<template>
    <div class="all">
 <!-- /movie/moviedetails -->
           <router-link 
         
             :to="{name:'moviedetails',params:{id:see._id}}"
             v-for="see in seemove"
             :key="see.id"
           >      
                <mt-cell :title="see.name" :label="see.address"> 
                     <span>位置：{{see.districtName}}</span>
                </mt-cell>
            </router-link>
           
    </div>
</template>
<script>
export default {
         data(){
            return{
                seemove:[]
            }
        },
    methods:{
   
        getall(){
               this.$http.get("/api/mz/list").then(res=>{//进行数据请求
                   this.seemove = res.data.data.object_list
                   
                 }) 
        }
    },
    created(){
        this.getall()
    }
}
</script>
<style  scoped lang="scss" >
    .mint-cell-wrapper{
          height:48px;
          .mint-cell-text{
              font-size:15px;
              margin-bottom: 10px;
          }
          .mint-cell-value{
      
          p{
              font-size: 15px;
              color:orangered;
              margin-bottom: 10px;

          }
          span{
              font-size: 11px;
          }
    }
      
            
  }
</style>