import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import sitemapRoutesJson from './sitemap-routes.json';

export interface RouteMetaInfo {
    path: string;
    name?: string | null;
    changefreq: 'weekly' | 'monthly' | 'yearly';
    priority: number;
}

export const sitemapRoutes: RouteMetaInfo[] = sitemapRoutesJson as RouteMetaInfo[];

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/wine-tasting',
        name: 'WineTasting',
        component: () => import('../views/WineTasting.vue'),
        meta: {
            title: 'Weinprobe & Wine Tasting in Münster | Casa Vazquez',
            description: 'Erleben Sie exklusive Weinproben und Wine Tastings in Münster. Entdecken Sie spanische Weine bei Casa Vazquez.',
            keywords: 'Weinprobe Münster, Wine Tasting Münster, Weindegustation, spanische Weinprobe'
        }
    },
    {
        path: '/home',
        name: 'LandingPage',
        component: () => import('../views/LandingPage.vue'),
        meta: {
            title: 'Casa Vazquez – Weinbar, Cocktails & Tapas in Münster',
            description: 'Ihre spanische Bar in Münster für erlesene Weine, kreative Cocktails und authentische Tapas. Genießen Sie mediterranes Flair.',
            keywords: 'Bar Münster, Weinbar Münster, Cocktailbar, Tapas, spanische Bar'
        }
    },
    {
        path: '/vino',
        name: 'WineMenu',
        component: () => import('../views/WineMenu.vue'),
        meta: {
            title: 'Weinkarte – Spanische Weine | Casa Vazquez Münster',
            description: 'Entdecken Sie unsere Weinkarte mit erlesenen spanischen Weinen. Rotwein, Weißwein, Rosé und mehr in der Weinbar Casa Vazquez.',
            keywords: 'Weinkarte Münster, spanische Weine, Rotwein, Weißwein, Weinbar'
        }
    },
    {
        path: '/drinks',
        name: 'DrinkMenu',
        component: () => import('../views/DrinkMenu.vue'),
        meta: {
            title: 'Getränkekarte – Drinks & Softdrinks | Casa Vazquez',
            description: 'Unsere Getränkekarte mit alkoholfreien Drinks, Softdrinks und mehr. Bar Casa Vazquez in Münster.',
            keywords: 'Drinks Münster, Getränkekarte, Bar Münster, Softdrinks'
        }
    },
    {
        path: '/cocktails',
        name: 'CocktailsPage',
        component: () => import('../views/CocktailsPage.vue'),
        meta: {
            title: 'Cocktails – Kreative Cocktailbar | Casa Vazquez Münster',
            description: 'Genießen Sie kreative Cocktails in unserer Bar. Klassische und moderne Cocktails in bester Qualität. Cocktailbar in Münster.',
            keywords: 'Cocktails Münster, Cocktailbar Münster, Drinks, Bar Münster'
        }
    },
    {
        path: '/snacks',
        name: 'SnackMenu',
        component: () => import('../views/SnackMenu.vue'),
        meta: {
            title: 'Tapas & Snacks – Spanische Küche | Casa Vazquez Münster',
            description: 'Authentische spanische Tapas und Snacks. Genießen Sie mediterrane Spezialitäten in unserer Tapas Bar in Münster.',
            keywords: 'Tapas Münster, spanische Küche, Snacks, Tapas Bar Münster, spanisches Restaurant'
        }
    },
    {
        path: '/showroom',
        name: 'Showroom',
        component: () => import('../views/Showroom.vue'),
        meta: {
            title: 'Showroom – Impressionen | Casa Vazquez',
            description: 'Entdecken Sie Impressionen aus der Bar Casa Vazquez in Münster.',
            keywords: 'Bar Münster, Weinbar Impressionen, Casa Vazquez'
        }
    },
    {
        path: '/legals',
        name: 'Legals',
        component: () => import('../views/Legals.vue'),
        meta: {
            title: 'Impressum & Datenschutz | Casa Vazquez',
            description: 'Impressum, Datenschutzerklärung und rechtliche Informationen der Bar Casa Vazquez.',
            keywords: 'Impressum, Datenschutz, Casa Vazquez'
        }
    },
    {
        path: '/admin/flyer-sectors',
        name: 'FlyerSectors',
        component: () => import('../views/FlyerSectors.vue'),
        meta: {
            robots: 'noindex, nofollow'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home',
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    },
});

// Update page meta tags on route change for SEO
router.beforeEach((to, _from, next) => {
    const defaultTitle = 'Casa Vazquez – Weinbar, Cocktails & Tapas in Münster';
    const defaultDescription = 'Bar Casa Vazquez in Münster – Ihre Weinbar für spanische Weine, Cocktails und Tapas. Genießen Sie authentische spanische Küche und Wine Tastings.';
    const defaultKeywords = 'Bar Münster, Weinbar Münster, Cocktailbar Münster, Tapas Münster, spanische Bar';

    // Update document title
    document.title = (to.meta.title as string) || defaultTitle;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', (to.meta.description as string) || defaultDescription);
    }

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute('content', (to.meta.keywords as string) || defaultKeywords);
    }

    // Update or create robots meta tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (to.meta.robots) {
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.setAttribute('name', 'robots');
            document.head.appendChild(metaRobots);
        }
        metaRobots.setAttribute('content', to.meta.robots as string);
    } else if (metaRobots && metaRobots.getAttribute('content') !== 'index, follow') {
        metaRobots.setAttribute('content', 'index, follow');
    }

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', (to.meta.title as string) || defaultTitle);
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', (to.meta.description as string) || defaultDescription);
    }

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
        ogUrl.setAttribute('content', `https://menu.casavazquez.de${to.path}`);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
        canonical.setAttribute('href', `https://menu.casavazquez.de${to.path}`);
    }

    next();
});

export default router;
