import Home from "@/pages/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import Topics from "@/pages/Topics.vue";
import Students from "@/pages/Students.vue";
import Events from "@/pages/Events.vue";
import Links from "@/pages/Links.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/topics',
        component: Topics
    },
    {
        path: '/students',
        component: Students
    },
    {
        path: '/events',
        component: Events
    },
    {
        path: '/links',
        component: Links
    },
]

const router = createRouter({
    routes,
    history: createWebHistory('/kcdim-vue/')
})

export default router;