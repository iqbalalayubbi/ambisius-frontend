<template>
    <button class="rounded-md bg-primary text-white text-center">
        {{ value }}
    </button>
</template>

<script>
export default {
    props: {
        value: String,
    },
};
</script>
