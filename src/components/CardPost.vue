<template>
    <div class="bg-bg w-[90%] h-fit flex flex-col gap-3 px-10 rounded-md">
        <div class="flex items-center gap-3 text-white mt-10 mb-5">
            <Icon icon="iconamoon:profile-circle-fill" width="50" />
            <div class="flex flex-col justify-center gap-1">
                <span>@yourusername</span>
                <div class="flex items-center gap-3">
                    <Icon icon="solar:star-bold" />
                    <span>200</span>
                </div>
            </div>
        </div>
        <h1 class="text-white">Carilah nilai x dibawah ini</h1>
        <div class="bg-white w-full h-40"></div>
        <div class="flex justify-between mb-10">
            <div class="flex gap-3">
                <div class="text-white flex items-center gap-3">
                    <Icon icon="solar:star-bold" width="30" />
                    <span>200</span>
                </div>
                <div class="text-white flex items-center gap-3">
                    <Icon icon="uil:comment" width="30" />
                    <span>5</span>
                </div>
            </div>
            <Button value="Jawab Pertanyaan" class="px-3" />
        </div>
    </div>
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
