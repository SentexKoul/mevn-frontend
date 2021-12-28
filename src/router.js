import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/CreateComponent')
    },
    {
        path: '/view',
        name: 'view',
        component: () => import('./pages/ListComponent')
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('./pages/EditComponent')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router