<template>
    <div class="h-screen flex flex-col items-center">
        <div class="mt-20 flex flex-col items-center gap-5">
            <img :src="Logo" alt="" />
            <h1 class="text-primary text-4xl">Masuk</h1>
        </div>
        <div class="flex flex-col gap-5 mt-10 w-1/5">
            <InputFill placeholder="username or email" />
            <InputFill placeholder="password" />
        </div>
        <Button class="w-1/5 py-2 mt-10" value="Masuk" />
        <button class="flex items-center justify-center gap-3 bg-white w-1/5 mt-5 py-2 shadow-sm shadow-bg rounded-md">
            <img :src="Google" alt="" />
            <span class="">Masuk dengan google</span>
        </button>
        <p class="mt-5">Belum memiliki akun? <a class="text-primary" href="">Daftar</a></p>
    </div>
</template>

<script>
import Logo from "../assets/logo.png";
import Google from "../assets/google.png";
import Button from "../components/Button.vue";
import InputFill from "../components/InputFill.vue";

export default {
    components: {
        Button,
        InputFill,
    },
    data() {
        return {
            Logo,
            Google,
        };
    },
};
</script>

<style></style>
