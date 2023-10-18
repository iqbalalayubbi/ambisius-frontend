<template>
    <nav class="flex justify-between items-center sm:bg-primary bg-bg shadow-md shadow-bg px-3 sm:px-10">
        <img :src="Logo" alt="" width="50" class="hidden sm:block" />
        <Icon icon="ci:hamburger-md" width="40" class="text-white sm:hidden" />
        <InputFill class="h-1/2" placeholder="Cari Pertanyaan" />
        <div class="flex items-center justify-self-start gap-3 text-white">
            <Icon icon="iconamoon:profile-circle-fill" width="50" />
            <span class="hidden sm:block">@yourusername</span>
        </div>
    </nav>
</template>

<script>
import InputFill from "@/components/InputFill.vue";
import Logo from "../assets/logo.png";

export default {
    components: { InputFill },
    data() {
        return {
            Logo,
        };
    },
};
</script>

<style></style>
