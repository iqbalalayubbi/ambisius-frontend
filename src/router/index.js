import { createRouter, createWebHistory } from "vue-router";
import Landingpage from "../views/Landingpage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "landingpage",
            // component: Landingpage,
            component: Login,
        },
        {
            // path: '/about',
            // name: 'about',
            // // route level code-splitting
            // // this generates a separate chunk (About.[hash].js) for this route
            // // which is lazy-loaded when the route is visited.
            // component: () => import('../views/AboutView.vue')
        },
    ],
});

export default router;
