import {createRouter, createWebHistory} from "vue-router"

//import delle pagine
import Home from "./pages/Home.vue"
import Projects from "./pages/Projects.vue"
import ProjectShow from "./pages/ProjectShow.vue"

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
    },
    {
        path: '/project/:slug',
        name: 'project.show',
        component: ProjectShow,
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export {router}