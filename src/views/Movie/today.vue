<template>
    <div class="today"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="0"
    >
        <div class="item"
           v-for="lis in list"
           :key="lis._id"
        >
            <div class="left">
                    <span>{{lis.name}}</span>
                    <span>{{lis.category}}</span>
            </div>

            <div class="mid">

            </div>

            <div class=right>
                   <mt-button type="primary">立即观看</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     watch:{
        type(val){
            this.list = [],
            this.hasMore = true; //默认有更多数据
             this.today()
        }
    },
    data(){
        return{
            list:[],
             
               
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
             this.today()
       },
       today(){
             this.$http.get("/api/mz/list/active").then(res=>{
                
                this.list = res.data.data.object_list
                if(res.data.data.total === 9){
                    this.hasMore = false
                     return false
                }
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
   .today{
       .item{
           margin-top:5px;
           width:100%;
           height:50px;
           display: flex;
           justify-content: space-evenly;
           background:#fff;
           .left{
               width:80px;
               display: flex;
               flex-direction: column;
               font-size:12px;
                 justify-content: space-evenly;
           }
           .mid{
                     width:60px;
               height:50px;
               background: #0000;
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
   }
</style>
