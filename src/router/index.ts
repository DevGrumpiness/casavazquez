import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import WineMenu from '../views/WineMenu.vue';
import SnackMenu from '../views/SnackMenu.vue';
// import DrinkMenu from '../views/DrinkMenu.vue';

const routes = [
    { path: '/casavazquez', name: 'LandingPage', component: LandingPage },
    { path: '/vino', name: 'WineMenu', component: WineMenu },
    { path: '/drinks', name: 'DrinkMenu', component: DrinkMenu },
    { path: '/snacks', name: 'SnackMenu', component: SnackMenu },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
