import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Portofolio',
            }
        }
    ]
})

router.beforeEach(async (to, _, next) => {
    const defaultTitle = 'Bambang Wijaya'
    document.title = to.meta.title
        ? `${defaultTitle} • ${to.meta.title}`
        : defaultTitle

    next()
})

export default router