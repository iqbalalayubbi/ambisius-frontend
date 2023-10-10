<template>
    <nav class="flex flex-col justify-between bg-bg w-44">
        <div class="mb-10 self-center bg-primary flex items-center px-5 py-1 rounded-md gap-3 text-white mt-28">
            <Icon icon="quill:paper" />
            <Button value="Buat Soal" />
        </div>
    </nav>
</template>

<script>
import Button from "./Button.vue";

export default {
    components: {
        Button,
    },
};
</script>

<style></style>
