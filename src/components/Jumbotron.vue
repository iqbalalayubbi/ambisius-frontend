<template>
    <div class="bg-bg h-[94%] flex flex-col md:flex-row md:justify-between md:items-start items-center px-10 gap-10 sm:gap-16">
        <div class="flex flex-col gap-5 md:gap-8 lg:gap-4 xl:gap-8 mt-10 md:mt-20">
            <div class="text-[25px] sm:text-4xl xl:text-5xl text-white">
                <h1 class="font-bold"><mark class="bg-primary text-white">ASAH</mark> LOGIKAMU</h1>
                <br class="hidden sm:block" />
                <h1 class="font-bold mt-2 sm:mt-5">BERIKAN <mark class="bg-primary text-white">SOLUSIMU</mark></h1>
            </div>
            <p class="text-white opacity-80 text-sm sm:text-base xl:text-lg w-3/4 md:w-full xl:w-3/4">membantu pengguna dalam menyelesaikan beragam jenis soal logika bersama.</p>
            <Button class="w-1/2 sm:w-1/3 md:w-3/5 xl:w-1/3 xl:mt-2 xl:py-3 py-2 text-base font-medium" value="Gabung Sekarang" @click="this.$router.push('/daftar')" />
        </div>
        <div class="w-4/5 sm:w-3/4 xl:w-1/2 self-center md:self-start md:mt-20">
            <img :src="Thumbnail" alt="" />
        </div>
    </div>
</template>

<script>
import Thumbnail from "../assets/ilustrasi.png";
import Button from "./ButtonComponent.vue";

export default {
    components: {
        Button,
    },
    data() {
        return {
            Thumbnail,
        };
    },
};
</script>

<style></style>
