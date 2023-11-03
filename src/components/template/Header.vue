<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import FeedOptions from  '@/components/FeedOptions.vue'

const isFeedOptionsVisible = ref(false)
</script>

<template>
    <div class="header">
        <p @click="isFeedOptionsVisible = !isFeedOptionsVisible">
            Home
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3 14.3L8.7 11.7C8.38333 11.3833 8.31266 11.021 8.488 10.613C8.66333 10.205 8.97566 10.0007 9.425 10H14.575C15.025 10 15.3377 10.2043 15.513 10.613C15.6883 11.0217 15.6173 11.384 15.3 11.7L12.7 14.3C12.6 14.4 12.4917 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8667 14.6 11.7417 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z" fill="#A3F7BF"/>
            </svg>
        </p>
    </div>
    <FeedOptions v-show="isFeedOptionsVisible" :hide="() => isFeedOptionsVisible = false" />
</template>

<style scoped>
    .header {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: var(--color-background);
        padding-top: 2%;
        padding-bottom: 2%;
    }
    .header > p {
        display: flex;
        align-items: center;
        color: var(--c-primary);
        cursor: pointer;
    }
</style>