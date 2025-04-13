import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import WineMenu from '../views/WineMenu.vue';
import SnackMenu from '../views/SnackMenu.vue';
import DrinkMenu from '../views/DrinkMenu.vue';

const routes = [
    {
        path: '/',
        redirect: '/home', // Redirect root to landing
    },
    {
        path: '/home',
        name: 'LandingPage',
        component: LandingPage,
    },
    {
        path: '/vino',
        name: 'WineMenu',
        component: WineMenu,
    },
    {
        path: '/drinks',
        name: 'DrinkMenu',
        component: DrinkMenu,
    },
    {
        path: '/snacks',
        name: 'SnackMenu',
        component: SnackMenu,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home',
    },
];

const router = createRouter({
    history: createWebHistory('/casavazquez/'),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
