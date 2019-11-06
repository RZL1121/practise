import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from "./home"
import list from "./list"
import mine from "./mine"
import movie from "./movie"
import moviedetails from "./moviedetails"
import dingdetails from "./dingdetails"
export default new Router({
  
  routes:[
    {path:"/",redirect:"/home"},
    home,list,mine,movie,moviedetails,dingdetails,
    {path:"/notfound",component:()=>import("@/views/Notfound")},
    {path:"*",redirect:"/notfound"}
  ]
})
