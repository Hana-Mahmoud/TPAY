import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import SingleGame from '../views/SingleGame.vue'
const routes=[
    {
        path:"/",
        name:'Home',
        component:Home
    },{
    path:"/:id",
    name:'SingleGame',
    component:SingleGame
    }
]


const router=createRouter({
    history:createWebHashHistory(),
    routes

})

export default router