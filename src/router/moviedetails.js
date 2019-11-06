


export default {
   
    path:"/movie/moviedetails/:id",
    component:()=>import("@/views/Movie/moviedetails"),
    children: [
     
        {path:"today",component:()=>import("@/views/Movie/today"),name:"moviedetails"},
        {path:"tomorrow",component:()=>import("@/views/Movie/tomorrow"),name:"tomorrow"}
      
    ]
}