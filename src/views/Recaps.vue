<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import RecapInfo from '@/components/RecapInfo.vue'

const panel = ref(0)

</script>

<template>
    <div class="container">
        <h2 class="title">Your Recaps</h2>
        <br />
        <div class="panel-menu">
            <button @click="panel = 0">
                <p :style="{color: panel == 0 ? 'white' : ''}">Yesterday</p>
            </button>
            <button @click="panel = 1">
                <p :style="{color: panel == 1 ? 'white' : ''}">Last Week</p>
            </button>
            <button @click="panel = 2">
                <p :style="{color: panel == 2 ? 'white' : ''}">Last Month</p>
            </button>
        </div>
        <span style="width: 95%; background-color: var(--c-primary); height: 2px; border-radius: 2px; opacity: 0.7"></span>
        <div class="tabs-wrapper">
            <div v-show="panel == 0">
                <RecapInfo />
            </div>
            <div v-show="panel == 1">
                <span class="loader"></span>
            </div>
            <div v-show="panel == 2">
                <span class="loader"></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: var(--bottom-menu-height);
}

.title {
    color: white;
    font-weight: bold;
}
.panel-menu {
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    margin-bottom: 10px;
    margin-top: 30px;
}
.panel-menu > button {
    width: 100%;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    border-radius: 10px;
    padding: 2px;
    cursor: pointer;
}
.panel-menu > button:hover {
    background-color: var(--c-black-mute);
}
</style>