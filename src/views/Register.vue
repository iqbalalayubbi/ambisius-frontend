<template>
    <div class="h-screen flex flex-col items-center">
        <div class="mt-10 flex flex-col items-center gap-5">
            <a @click.prevent="this.$router.push('/')" class="hover:cursor-pointer">
                <img :src="Logo" alt="" />
            </a>
            <h1 class="text-primary text-4xl">Daftar</h1>
        </div>
        <div class="flex flex-col gap-3 mt-10 w-3/4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <InputFill placeholder="username or email" />
            <InputFill placeholder="password" />
            <InputFill placeholder="confirm password" />
        </div>
        <Button class="w-3/4 sm:w-1/2 lg:w-1/3 xl:w-1/4 py-2 mt-10" value="Buat Akun" />
        <button class="flex items-center justify-center gap-3 bg-white w-3/4 sm:w-1/2 lg:w-1/3 xl:w-1/4 mt-5 py-2 shadow-sm shadow-bg rounded-md">
            <img :src="Google" alt="" />
            <span class="">Masuk dengan google</span>
        </button>
        <p class="mt-5">Sudah memiliki akun? <a @click.prevent="this.$router.push('/masuk')" class="text-primary" href="">Masuk</a></p>
    </div>
</template>

<script>
import Logo from "../assets/logo.png";
import Google from "../assets/google.png";
import Button from "../components/ButtonComponent.vue";
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
