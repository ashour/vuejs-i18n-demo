import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import ProductShow from '@/components/ProductShow'
import ProductIndex from '@/components/ProductIndex'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/en',
        },
        {
            path: '/:locale',
            component: {
                template: '<router-view />',
            },
            children: [
                {
                    path: '',
                    component: Home,
                },
                {
                    path: 'products/:id',
                    component: ProductShow,
                },
                {
                    path: 'products',
                    component: ProductIndex,
                },
            ],
        },
    ],
})
