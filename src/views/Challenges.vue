<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
</script>

<template>
    <div class="container">
        <h2 class="title">Challenges</h2>
        <br />
        <br />
        <SearchBar style="margin-top: 10%;"/>
        <p class="subtitle">Popular</p>

        <div style="width: 90%; margin-top: 10px;">
            <div class="challenge-entry" v-for="item in 5" :key="item">
                <div>
                    <p class="challenge-title">#storyunder100</p>
                    <p>Write a story under 100 words. Readers rate them!</p>
                    <p class="challenge-info">20k Posts so far</p>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#A3F7BF" stroke-opacity="0.7" stroke-width="1.5"/>
                    <path d="M8 12H16M16 12L13 9M16 12L13 15" stroke="#A3F7BF" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>

    </div>
</template>

<style scoped>
.title {
    color: white;
    font-weight: bold;
}
.subtitle {
    color: white;
    font-weight: bold;
    font-size: 20px;
    align-self: flex-start;
    margin-left: 5%;
    margin-top: 10%;
}
.challenge-title {
    font-weight: bold;
    font-size: 18px;
}
.challenge-entry {
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 18px;
    border-radius: 10px;
    cursor: pointer;
}
.challenge-entry:hover {
    background-color: var(--c-black-mute);
    transition: 0.1s ease;
}
.challenge-info {
    color: var(--c-primary)
}
</style>