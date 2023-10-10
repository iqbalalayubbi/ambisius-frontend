<template>
    <nav class="flex justify-between items-center bg-primary shadow-md shadow-bg px-10">
        <img :src="Logo" alt="" width="50" />
        <InputFill class="h-1/2" placeholder="Cari Pertanyaan" />
        <div class="flex items-center justify-self-start gap-3 text-white">
            <Icon icon="iconamoon:profile-circle-fill" width="50" />
            <span>@yourusername</span>
        </div>
    </nav>
</template>

<script>
import InputFill from "./InputFill.vue";
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
