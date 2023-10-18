<template>
    <nav class="h-[6%] xl:h-[10%] flex justify-between items-center px-10">
        <div>
            <img :src="Logo" alt="" class="md:w-10 w-8" />
        </div>
        <div class="flex gap-5 md:gap-5 text-sm">
            <button @click="this.$router.push('/masuk')">Masuk</button>
            <Button class="w-20 md:w-24 py-1" value="daftar" @click="this.$router.push('/daftar')" />
        </div>
    </nav>
</template>

<script>
import Logo from "../assets/logo.png";
import Button from "@/components/ButtonComponent.vue";

export default {
    components: {
        Button,
    },
    data() {
        return {
            Logo,
        };
    },
};
</script>

<style></style>
