<template>
    <div class="tabbar">

      <Tabitem txt="电影"  mark="home" :sel="selected" :changeSel="changeSel">
          <img slot="img" src="../../assets/home.png" alt="">
          <img slot="active-img" src="../../assets/home-active.png" alt="">
      </Tabitem>
       <Tabitem txt="影院"  mark="movie" :sel="selected" :changeSel="changeSel">
           <img slot="img" src="../../assets/movies.png" alt="">
            <img slot="active-img" src="../../assets/movies-active.png" alt="">
       </Tabitem>
        <Tabitem txt="资讯"  mark="list" :sel="selected" :changeSel="changeSel">
            <img slot="img" src="../../assets/list.png" alt="">
        </Tabitem>
         <Tabitem txt="我的"  mark="mine" :sel="selected" :changeSel="changeSel">
             <img slot="img" src="../../assets/mine.png" alt="">
              <img slot="active-img" src="../../assets/mine-active.png" alt="">
         </Tabitem>
    </div>
</template>

<script>
import Tabitem from "./item"
export default {
    data(){
        return {
            selected:this.$route.name
        }
    },
    methods:{
        changeSel(selected){
            this.selected = selected
        }
    },
    components:{
        Tabitem
    },
    created(){
        console.log(this.$route)
    }
}
</script>


<style scoped lang="scss">
    .tabbar{
          position: fixed;
    bottom:0;
    left: 0;
    width: 100%;
    height: 50px;
    background:#fff;
    display: flex;
    }
</style>