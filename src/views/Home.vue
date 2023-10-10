<template>
    <div class="bg-[#D8D8D8] min-h-screen relative">
        <NavbarTopHomeVue class="h-[10%] fixed z-10 w-full" />
        <div class="flex h-[90%] justify-center">
            <NavbarHomeVue class="fixed h-full left-0" />
            <CardPostHome class="mt-28" />
            <NavbarLeftHome class="fixed h-full right-0" />
        </div>
    </div>
</template>

<script>
import NavbarHomeVue from "../components/NavbarHome.vue";
import NavbarLeftHome from "../components/NavbarLeftHome.vue";
import NavbarTopHomeVue from "../components/NavbarTopHome.vue";
import CardPostHome from "../components/PostHome.vue";

export default {
    components: {
        NavbarHomeVue,
        NavbarTopHomeVue,
        NavbarLeftHome,
        CardPostHome,
    },
};
</script>

<style></style>
