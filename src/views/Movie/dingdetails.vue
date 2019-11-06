<template>
    <div class="dingdetails">
        <mt-header :title="moves.name">
                <router-link to="/movie/ding" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
              
        </mt-header>
        <!-- 轮播图 -->
          <div class="schedule-wrap">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"
                                v-for="tady in tadymovie"
                                :key="tady._id"
                            ><img :src="tady.poster" alt="">
                            </div>
                    
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
                 
             </div>
       
                
            <div class="tosay">
                    <div class="imgbox">
                         <img :src="moves.poster" alt="妈妈我要吃烤山药">
                    </div>
                    <div class="say">
                        <span>《{{moves.name}}》</span>
                        <span>类型：{{moves.category}}</span>
                        <span>导演：{{moves.director}}</span>
                        
                        <span>国家：{{moves.nation}}</span>
                        <span>票价：￥{{moves.money}}/人</span>

                    </div>
                     <div class="jieshao">
                      <p>介绍：</p>
                        <span> {{moves.synopsis}}</span>
                    </div>
                    <div class="button">
                              <mt-button type="primary" @click="open()">预约观看</mt-button>
                    </div>
              
            </div>
           
   






   
      
               
      </div>     
 
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
    data(){
        return{
            moves:0,
            tadymovie:0
       
         
        }
    },
    methods:{
            open(){
                Indicator.open({
                    text: '预约成功',
                    spinnerType: 'fading-circle'
                    });
                  setTimeout( function(){
                      Indicator.close();
                  },500);
            }
    },
    created(){
     
   // 进行数据请求
       let seeid =  this.$route.params.id
       this.$http.get("/api/mz/movie/specials").then(res=>{
           console.log(res.data.data.object_list)
           let arr = res.data.data.object_list
             for(var i=0;i<arr.length;i++){
                    if(arr[i]._id == seeid){
                            this.moves = arr[i]
                              
                    }
             }

            console.log(this.moves)
            
       })

       this.$http.get("/api/mz/movie/specials").then(res=>{
         
            this.tadymovie = res.data.data.object_list
                  //这就相当于等待上一步执行完
               this.$nextTick(()=>{
                     //使用swiper方法而方法
                        var swiper = new Swiper('.swiper-container', {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            centeredSlides: true,
                            loop: true,
                                autoplay: {
                                delay: 2500,
                                disableOnInteraction: false,
                            },
                                                    pagination: {
                                el: '.swiper-pagination',
                                clickable: true,
                            },
                            });
               })
           
         
       })
    }
}
</script>

<style scoped lang="scss">
    .mint-header{
        background:blanchedalmond;
        color:black;
    }
     .schedule-wrap{
              margin-top:5px;
                    .swiper-container{
                        width:100%;
                        height:200px;
                       background:#999;
                    }
                    .swiper-slide{
                        img{ 
                            height:90%;
                            width:110px;
                            margin-top:10%;
                        }
                    }
                    .swiper-slide-active{
                         img{ 
                            height:100%;
                            width:120px;
                            margin-top:0;
                        }
                    }
                    .swiper-slide-prev{
                           img{ 
                            height:90%;
                            width:120px;
                            margin-top:10%;
                        }
                    }
                }
                .tosay{
                    margin-top:20px;
                    overflow: hidden;
                        .imgbox{
                            width:200px;
                            height:200px;
                            float:left;
                            img{
                                width:100%;
                                height:100%;
                            }
                        }
                        .say{
                            width:150px;
                            height:200px;
                            float:left;
                            margin-left:20px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
                        }
                        .button{
                            height:50px;
                            width:100%;
                           position:fixed;
                           bottom:0;
                           button{
                               width:100%;
                           }
                        }
                }
               
</style>