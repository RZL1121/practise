<template>
    <div class="all"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="0">
    
    
 <!-- /movie/moviedetails -->
           <router-link 
         
             :to="{name:'moviedetails',params:{id:see._id}}"
             v-for="see in seemove"
             :key="see.id"
            
           >      
                <mt-cell :title="see.name" :label="see.address" style="display:block"> 
                    <p>￥{{see.lowPrice}}起</p> <span>城区：{{see.districtName}}</span>
                </mt-cell>
              
            </router-link>
           
    </div>
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
                limit:15,
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
               this.$http.get("/api/mz/list",{
                   params:{
                       limit,
                       page
                   }
               }).then(res=>{//进行数据请求
                 
                   this.seemove = this.seemove.concat(res.data.data.object_list)
                    this.loading = false;
                     if(this.limit*this.page >= res.data.total){
                         this.hasMore = false 
                            return false
                           
                     }
                     this.page++
                   
                 }) 
        },
            activated(){
        this.loading = false;//开启无限滑动
    },
    deactivated(){
       this.loading = true;//开启无限滑动
    },
    
    }
   
}
</script>
<style  scoped lang="scss" >
  .all{
      padding-bottom:80px;
      margin-top:91px;
     .mint-cell{
      
         .mint-cell-wrapper{
                   
            .mint-cell-title{
                
               .mint-cell-label{
                     font-size: 14px;
                            height: 20px!important;
                            width:260px!important;
                          
                         
                        
                            overflow: hidden!important;
                            text-overflow: ellipsis!important;
                            white-space: nowrap!important;
               }
                   
                .mint-cell-label{
                      color:red;
                }
            }
            .mint-cell-value{
                p{     font-size:16px;
                      color:red;
                      margin-top:-20px;
                      margin-right:-60px;
                }
                span{
                    font-size:12px;
                    margin-top:15px;
                }
            }
         }
     }

            
     

  }
</style>