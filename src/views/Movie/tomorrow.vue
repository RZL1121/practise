<template>
    <div class="tomorrow"
         v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="0"
    >
        <div class="item"
           v-for="tlis in tolis"
           :key="tlis._id"
        >
            <div class="left">
                    <span>{{tlis.name}}</span>
                    <span>{{tlis.category}}</span>
            </div>

            <div class="mid">
                        <span>{{tlis.director}}</span>
            </div>

            <div class=right>
                     <mt-button type="primary">预约观看</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    watch:{
        type(val){
            this.tolis = [],
            this.page = 1;  // 每次切换类型的时候，页码从第一页开始
            this.hasMore = true; //默认有更多数据
          this.tomorromovie()
        }
    },
    data(){
        return{
            tolis:[],
            page:1,
            limit:8,
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
             this.tomorromovie()
       },
        tomorromovie(){
               let {limit,page} = this; 
               this.loading = true;
                this.$http.get("/api/mz/movie/specials",{
                    params:{
                        limit,
                        page
                    }
                }).then(res=>{
                   
                    this.tolis= this.tolis.concat(res.data.data.object_list)
                  
                    this.loading = false;
                    if(this.limit*this.page >= res.data.data.total){
                            this.hasMore = false
                             return false;
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
<style lang="scss" scoped>
   .tomorrow{
       .item{
           margin-top:5px;
           width:100%;
           height:50px;
           display: flex;
           justify-content: space-evenly;
           background:skyblue;
       }
        .left{
               width:100px;
               display: flex;
               flex-direction: column;
               font-size:12px;
                 justify-content: space-evenly;
           }
           .mid{
                width:100px;
               height:50px;
               background: #0000;
               display: flex;
               justify-content: center;
               
           }
           .right{
               width:60px;
               height:50px;
               background: #0000;
               line-height: 30px;
             
               button{
                    font-size:13px;
               }
           }
   }
</style>