<template>
    <nav class="flex flex-col justify-between bg-bg w-44">
        <div class="flex flex-col gap-3 mt-28">
            <div class="flex items-center text-white bg-primary py-3">
                <Icon icon="ic:round-home" class="ml-5" width="25" />
                <span class="ml-5">Beranda</span>
            </div>
            <div class="flex items-center text-white py-3">
                <Icon icon="fa-solid:user-friends" class="ml-5" width="25" />
                <span class="ml-5">Teman</span>
            </div>
            <div class="flex items-center text-white py-3">
                <Icon icon="humbleicons:chat" class="ml-5" width="25" />
                <span class="ml-5">Pesan</span>
            </div>
            <div class="flex items-center text-white py-3">
                <Icon icon="solar:ranking-broken" class="ml-5" width="25" />
                <span class="ml-5">Peringkat</span>
            </div>
        </div>
        <div class="mt-40 w-3/4 self-center mx-auto bg-primary flex items-center px-5 py-1 rounded-xl gap-3 text-white">
            <Icon icon="material-symbols:logout" class="rotate-180" />
            <Button value="Keluar" />
        </div>
    </nav>
</template>

<script>
import Button from "./ButtonComponent.vue";

export default {
    components: {
        Button,
    },
};
</script>

<style></style>
