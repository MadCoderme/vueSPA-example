<script setup lang="ts">
const props = defineProps({
    toggleSidebar: {
        type: Function,
        required: true
    }
})
</script>

<template>
    <button @click="props?.toggleSidebar()" class="more-options">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.75H5C4.31 11.75 4.25 12.3088 4.25 13C4.25 13.6912 4.31 14.25 5 14.25H21C21.69 14.25 21.75 13.6912 21.75 13C21.75 12.3088 21.69 11.75 21 11.75ZM21 16.75H5C4.31 16.75 4.25 17.3088 4.25 18C4.25 18.6912 4.31 19.25 5 19.25H21C21.69 19.25 21.75 18.6912 21.75 18C21.75 17.3088 21.69 16.75 21 16.75ZM5 9.25H21C21.69 9.25 21.75 8.69125 21.75 8C21.75 7.30875 21.69 6.75 21 6.75H5C4.31 6.75 4.25 7.30875 4.25 8C4.25 8.69125 4.31 9.25 5 9.25Z" fill="white"/>
        </svg>
    </button>
</template>

<style scoped>
.more-options {
    position: fixed;
    top: 2%;
    right: 3%;
    height: 60px;
    width: 60px;
    background-color: var(--c-secondary);
    border: none;
    border-radius: 30px;
    z-index: 99;
}
@media (max-width: 480px) {
    .more-options {
        height: 50px;
        width: 50px;
    }
}
</style>