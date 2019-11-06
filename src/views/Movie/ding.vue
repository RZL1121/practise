<template>
    <ul class="ding"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="0">
    
    
 <!-- /movie/moviedetails -->
           <router-link 
           tag="li"
             :to="{name:'dingdetails',params:{id:see._id}}"
             v-for="see in seemove"
             :key="see.id"
           >    
           <div class="box">
                <div class="img">
                    <img :src="see.poster" alt="">
                </div>
                <div class="right">
                        <span >《{{see.name}}》</span>
                        <span>导演：{{see.director}}</span>
                        <span>类型：{{see.category}}</span>
                        <span>国家：{{see.nation}}</span>
                    
                </div>
            
            </div>  
            
                
            </router-link>
           
    </ul>
</template>
<script>
export default {
    watch:{
        type(val){
            this.page = 1;  // 每次切换类型的时候，页码从第一页开始
            this.hasMore = true; //默认有更多数据
            this.getmove()
        }
    },
         data(){
            return{
                seemove:[],
                page:1,
                limit:10,
                loading:false,
                hasMore:true
            }
        },
    methods:{
       loadMore(){
            if(!this.hasMore){
                this.loading = true;
                  return false;
            }
             this.getall()
       },
        getall(){
              let {limit,page} = this; 
              this.loading = true;
          
               this.$http.get("/api/mz/movie/specials",{
                   params:{
                       limit,
                       page
                   }
               }).then(res=>{//进行数据请求
                 
                   this.seemove = this.seemove.concat(res.data.data.object_list)
                //    console.log(res.data.data.total)
                    this.loading = false;
                     if(this.limit*this.page >= res.data.data.total){
                         this.hasMore = false 
                            return false
                           
                     }
                     this.page++
                   
                 }) 
        }
    
    }
   
}
</script>
<style  scoped lang="scss" >
   
        .ding{
              margin-top:91px;

                li{
                    height:150px;
                    margin-top:5px;
                    margin-bottom:5px;
                    .box{
                    
                        .img{
                            width:180px;
                            height:150px;
                        float:left;
                            img{
                                width:100%;
                                height:100%;
                            
                            }
                        }
                        .right{
                            float:left;
                            margin-left:20px;
                            width:160px;
                            height:150px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
                        
                        }
                    }
                }
   
        }
        
</style>