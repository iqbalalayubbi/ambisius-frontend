<template>
    <nav class="h-[10%] flex justify-between items-center px-10">
        <div>
            <img :src="Logo" alt="" width="50" />
        </div>
        <div class="flex gap-10">
            <button>Masuk</button>
            <Button class="w-28 py-1" value="daftar" />
        </div>
    </nav>
</template>

<script>
import Logo from "../assets/logo.png";
import Button from "./Button.vue";

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
