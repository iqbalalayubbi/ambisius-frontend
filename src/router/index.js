import { createRouter, createWebHistory } from "vue-router";
import Landingpage from "../views/Landingpage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "landingpage",
            component: Landingpage,
        },
        {
            path: "/daftar",
            name: "register",
            component: Register,
        },
        {
            path: "/masuk",
            name: "masuk",
            component: Login,
        },
        {
            path: "/beranda",
            name: "beranda",
            component: Home,
        },
    ],
});

export default router;
