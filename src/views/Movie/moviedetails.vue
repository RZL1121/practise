<template>
    <div class="details">
        <mt-header >
                <router-link to="/movie/movie" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
              
        </mt-header>

        <div class="header-title" :class="{fixs:fix}">
          {{moves.name}}
        </div>

        <div class="cinema-wrap">
             <div class='cinema-info'>
                 <div class="tags">
                     <router-link 
                     :to="{name:tg.path}"
                     class="tag"
                        v-for="tg in tag"
                        :key="tg.id"
                     > {{tg.title}}</router-link>
                 </div>
                 <div class="address">
                    <i class="fa fa-car"></i>
                     <div class="address_es">
                           {{moves.address}}
                     </div>
                      <i class="fa fa-phone"></i>
                 </div>
             </div>
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
        </div>  
            <!-- <div class="timelist">
               

                <tomorrow></tomorrow>
            </div> -->
            <div class="timelist" >
                  <router-link
              
                    v-for="tim in time"
                    :key="tim.id"
                    :to="{name:tim.name}"
                    :class="{active:show === tim.show}"
                    @click.native="show = tim.show"
                    >
                    {{tim.times}}
                  </router-link>
            </div>
       
             
               
            <router-view></router-view>
    </div>
</template>

<script>
import today from "./today"
import tomorrow from "./tomorrow"
export default {
    data(){
        return{
            fix:false,
            show:"ls",
          
            moves:0,
            tadymovie:0,
            tag:[
                  {id:1,title:"前台兑换",path:""},
                  {id:2,title:'儿童票',path:""},
                  {id:3,title:'停车',path:""},
                  {id:4,title:'3D眼镜',path:""}
             ],
             time:[
                    {id:1,times:"今日",name:"moviedetails",show:"ls"},
                    {id:2,times:"明日",name:"tomorrow",show:"ts"}
             ]
        }
    },
    components: {
            today,tomorrow
        },
    methods:{
        topfixed(){
            let top = document.documentElement.scrollTop || document.body.scrollTop;
              if(top>=40 && !this.fix){
                  this.fix = true;
              }else if(top <= 40 && this.fix){
                  this.fix = false;
              }
        }

    },

    created(){
        window.addEventListener("scroll",  this.topfixed)
   // 进行数据请求
       let seeid =  this.$route.params.id
       this.$http.get("/api/mz/list").then(res=>{
           console.log(res.data.data.object_list)
           let arr = res.data.data.object_list
             for(var i=0;i<arr.length;i++){
                    if(arr[i]._id == seeid){
                            this.moves = arr[i]
                              
                    }
             }

            console.log(this.moves)
            
       })

       this.$http.get("/api/mz/list/active").then(res=>{
          
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
    },
    beforeDestroy(){
    window.removeEventListener("scroll",this.topfixed)
    }
}
</script>

<style scoped lang="scss">
       .details{
               .mint-header{
                   
                background:#FFF;
                    a{
                        color:black;
                    }
               }
               .header-title{
                    position: relative;
                    text-align: center;
                    font-size: 17px;
                    color: #191a1b;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 100%;
                    padding: 0 15px;
                    background: #fff;
                    top: 0;
                    height: 44px;
                    line-height: 44px;
                    z-index: 302;
                          &.fixs{
                            position: fixed;
                            left:0;
                            top:0;
                            width:100%;
                            margin-top:0;
                        }
                }
                .tags{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15px;
              
                    overflow: hidden;
                    position: relative;
                    padding: 5px 0 15px;
                    a{
                              color: #ffb232;
                              margin-left:5px;
                    }
                }
                .address{
                    height: 50px;
                    position: relative;
                    display: flex;
                    padding: 0 17px;
                    align-items: center;
                    .address_es{
                            font-size: 14px;
                            height: 20px;
                            padding: 0 12px;
                            flex: 1;
                            position: relative;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                    }
                    i{
                        width:20px;
                        height:20px;
                    }
                }
                .schedule-wrap{
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
                .timelist{
                    margin-top:20px;
                    height:30px;
                    width:100%;
                    display:flex;

                    justify-content: space-around;
                  
                    a{
                          font-size:15px;
                    }
                }
              .active{
                  color: darkorange;
              }
       }
          
</style>