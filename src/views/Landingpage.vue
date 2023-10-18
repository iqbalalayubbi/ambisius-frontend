<template>
    <div class="h-screen">
        <NavbarLanding />
        <Jumbotron />
        <CardInfoLanding />
        <FooterLanding />
    </div>
</template>

<script>
import NavbarLanding from "@/components/NavbarLanding.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import CardInfoLanding from "@/components/CardInfoLanding.vue";
import FooterLanding from "@/components/footerLanding.vue";

export default {
    components: { NavbarLanding, Jumbotron, CardInfoLanding, FooterLanding },
};
</script>
