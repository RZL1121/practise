<template>
    <div class="movie">
        <mt-header title="影院" fixed>
               
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        <mt-navbar fixed>
           <router-link 
            v-for="nav in navs"
            :key="nav.id"
           :to="{name:nav.name}">{{nav.title}}</router-link>
       
        </mt-navbar>
      <router-view></router-view>
   
    <Tabbar></Tabbar>
    </div>
</template>

<script>

import Tabbar from "@/components/Tabbar"
export default {
    data(){
        return{
            navs:[
                {id:1,title:"全城",name:"movie"},
                {id:2,title:"APP订票",name:"ding"},
                {id:3,title:"最近去过",name:"gode"}
            ]
        }
    },
    components:{
        Tabbar
    }
}


</script>


<style scoped lang="scss">
    .mint-header{
           background:#fff;
           color:black;
           border-bottom: 1px solid #ddd;
           font-size: 20px;
         
    }
    .mint-navbar{
        margin-top:40px;
        height:50px;
        display:flex;
        justify-content: space-around;
         align-items:center;
        border-bottom: 0.5px solid #ddd;
         a{
             font-size:15px;
         }
         .router-link-active{
             color:orange;
         }
      
    }

</style>