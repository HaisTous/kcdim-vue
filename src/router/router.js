import Home from "@/pages/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import Topics from "@/pages/TopicsList.vue";
import Students from "@/pages/Students.vue";
import Events from "@/pages/Events.vue";
import Links from "@/pages/Links.vue";
import ValueTypes from "@/topics/ValueTypes.vue";
import VariableAssignmentStatement from "@/topics/VariableAssignmentStatement.vue";

const topics = [
    {path: '/topics/1', component: ValueTypes},
    {path: '/topics/2', component: VariableAssignmentStatement},
]

const routes = [
    {path: '/', component: Home},
    {path: '/topics', component: Topics},
    ...topics,
    {path: '/students', component: Students},
    {path: '/events', component: Events},
    {path: '/links', component: Links},
]

console.log(routes)


const router = createRouter({
    history: createWebHistory('/kcdim-vue/'),
    routes
})

export default router;