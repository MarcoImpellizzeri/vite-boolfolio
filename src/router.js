import {createRouter, createWebHistory} from "vue-router"

//import delle pagine
import Home from "./pages/Home.vue"
import Projects from "./pages/Projects.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects,
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export {router}