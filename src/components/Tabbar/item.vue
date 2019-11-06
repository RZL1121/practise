<template>
    <div class="item" @click="change">
      <span v-if="!flag"><slot name="img"></slot></span>
      <span v-else><slot name="active-img"></slot></span>
      <span :class="{active:flag}">{{txt}}</span>
    </div>
</template>

<script>
import Tabitem from "./item"
export default {
    props:["txt","mark","sel","changeSel"],
    computed:{
        flag(){
            if(this.mark === this.sel){
                return true
            }
            return false
        }
    },
    methods:{
        change(){
            // this.changeSel(this.mark)
            this.$router.push("/"+this.mark)
        }
    }
}
</script>


<style scoped lang="scss">
 .item{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width:25px;
            height:25px;
        }
        .active{
            color:red;
        }
    }
</style>