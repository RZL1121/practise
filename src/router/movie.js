export default {
    path:"/movie",
    component:()=>import("@/views/Movie"),
    children: [
        {path:"/",redirect:"movie"},
        {path:"movie",component:()=>import("@/views/Movie/all"),name:"movie"},
        {path:"ding",component:()=>import("@/views/Movie/ding"),name:"ding"},
        {path:"gode",component:()=>import("@/views/Movie/gode"),name:"gode"}
    ]
}