import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import WineMenu from '../views/WineMenu.vue';
import SnackMenu from '../views/SnackMenu.vue';
import DrinkMenu from '../views/DrinkMenu.vue';
import Showroom from '../views/Showroom.vue';

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
        path: '/showroom',
        name: 'Showroom',
        component: Showroom,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;