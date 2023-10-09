<template>
    <div class="bg-bg h-[90%] flex justify-between items-center px-10">
        <div class="flex flex-col gap-8">
            <div>
                <h1 class="text-5xl text-white font-bold"><mark class="bg-primary text-white">ASAH</mark> LOGIKAMU</h1>
                <br />
                <h1 class="text-5xl text-white font-bold mt-5">BERIKAN <mark class="bg-primary text-white">SOLUSIMU</mark></h1>
            </div>
            <p class="text-white">
                membantu pengguna dalam menyelesaikan <br />
                beragam jenis soal logika bersama.
            </p>
            <Button class="w-1/2 py-3" value="Gabung Sekarang" />
        </div>
        <div class="w-1/2">
            <img :src="Thumbnail" alt="" />
        </div>
    </div>
</template>

<script>
import Thumbnail from "../assets/ilustrasi.png";
import Button from "./Button.vue";

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
