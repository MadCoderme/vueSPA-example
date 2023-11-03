<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'

import { ref } from 'vue'

const activeTab = ref(0)
</script>

<template>
    <div class="container">
        <SearchBar style="width: 90%" />
        <div class="tabs">
            <p :style="{color: activeTab == 0 ? 'white' : '#ababab'}" @click="activeTab = 0">
                Your Communities
            </p>
            <p :style="{color: activeTab == 1 ? 'white' : '#ababab'}" @click="activeTab = 1">
                Explore
            </p>
        </div>
        <div class="tab" v-show="activeTab == 0">
            <div v-for="item in 3" :key="item" @click="$router.push('/communities/photography')">
                <img 
                    src="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    loading="lazy"
                    class="cover"
                />
                <div>
                    <p style="font-size: 18px; font-weight: bold;">@Photography</p>
                    <p style="color: #ababab">25k Members</p>
                    <p style="color: var(--c-primary)">#photos #captures</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tabs {
    display: flex;
    color: white;
    margin-top: 15px;
    align-self: flex-start;
    margin-left: 5%;
}
.tabs > p {
    font-size: 18px;
    font-weight: bold;
    margin-right: 15px;
    cursor: pointer;
    transition: 0.3s ease;
}
.tab {
    width: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
    padding-top: 20px;
}
.tab > div {
    width: 90%;
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    color: white;
}
.cover {
    width: 70px;
    height: 70px;
    border-radius: 15px;
    object-fit: cover;
    margin-right: 15px;
}
</style>