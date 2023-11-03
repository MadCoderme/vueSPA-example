<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import { ref } from 'vue'

const key = ref('')
function handleSearch(e : HTMLInputElement) {
    key.value = e.value
}
</script>

<template>
    <div class="container">
        <SearchBar style="width: 85%; margin-top: 10%;" @onChange="handleSearch" />
        <div class="suggestions" v-show="key">
            <p @click="$router.push('/search/results?keyword=' + key)">
                Search: <span style="color: white">{{ key }}</span>
            </p>
        </div>
        <div class="hashtags-popular">
            <h2>#</h2>
            <div v-for="item in 3" :key="item">
                <p class="hashtag"
                    @click="$router.push({path: '/search/results', query: { hashtags: 'aiKillsJobs' }})">
                    aiKillsjobs
                </p>
                <p style="color: #ababab">Used 5k times in last 24h</p>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 12C17.45 12 17 12.45 17 13V18.22C17 18.77 16.55 19.22 16 19.22H6C5.45 19.22 5 18.77 5 18.22V8C5 7.45 5.45 7 6 7H11C11.55 7 12 6.55 12 6C12 5.45 11.55 5 11 5H5C3.9 5 3 5.9 3 7V19C3 20.1 3.9 21 5 21H17C18.1 21 19 20.1 19 19V13C19 12.45 18.55 12 18 12ZM21.02 5H19V2.98C19 2.44 18.56 2 18.02 2H17.99C17.44 2 17 2.44 17 2.98V5H14.99C14.45 5 14.01 5.44 14 5.98V6.01C14 6.56 14.44 7 14.99 7H17V9.01C17 9.55 17.44 10 17.99 9.99H18.02C18.56 9.99 19 9.55 19 9.01V7H21.02C21.56 7 22 6.56 22 6.02V5.98C22 5.44 21.56 5 21.02 5Z" fill="#A3F7BF" fill-opacity="0.6"/>
                        <path d="M14 9H8C7.45 9 7 9.45 7 10C7 10.55 7.45 11 8 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9ZM14 12H8C7.45 12 7 12.45 7 13C7 13.55 7.45 14 8 14H14C14.55 14 15 13.55 15 13C15 12.45 14.55 12 14 12ZM14 15H8C7.45 15 7 15.45 7 16C7 16.55 7.45 17 8 17H14C14.55 17 15 16.55 15 16C15 15.45 14.55 15 14 15Z" fill="#A3F7BF" fill-opacity="0.6"/>
                    </svg>
                </button>
            </div>
        </div>
        <a style="align-self: flex-end; margin-right: 8%; margin-bottom: 10px;">More...</a>
        <div class="map">
            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM10 18L12 16L13 15V13H11V12L10 11H7V14L9 16V17.931C5.06 17.436 2 14.072 2 10L3 11H5V9H7L10 6V4H8L7 3V2.589C8.92313 1.80478 11.0769 1.80478 13 2.589V4L12 5V7L13 8L16.13 4.87C16.8914 5.78093 17.4401 6.85022 17.736 8H16L14 10V12L15 13H17L17.286 13.286C16.029 16.061 13.239 18 10 18Z" fill="white"/>
            </svg>
            <div class="map-option">
                <div class="overlay-map">
                </div>
                <div class="overlay"></div>
                <p>Explore Trends Map</p>
            </div>
        </div>
        <div class="interests">
            <svg width="25" height="24" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 10px">
                <path d="M0 9L5 0L10 9H0ZM5 19C3.9 19 2.95833 18.6083 2.175 17.825C1.39167 17.0417 1 16.1 1 15C1 13.8833 1.39167 12.9373 2.175 12.162C2.95833 11.3867 3.9 10.9993 5 11C6.1 11 7.04167 11.3917 7.825 12.175C8.60833 12.9583 9 13.9 9 15C9 16.1 8.60833 17.0417 7.825 17.825C7.04167 18.6083 6.1 19 5 19ZM5 17C5.55 17 6.021 16.804 6.413 16.412C6.805 16.02 7.00067 15.5493 7 15C7 14.45 6.804 13.979 6.412 13.587C6.02 13.195 5.54933 12.9993 5 13C4.45 13 3.979 13.196 3.587 13.588C3.195 13.98 2.99933 14.4507 3 15C3 15.55 3.196 16.021 3.588 16.413C3.98 16.805 4.45067 17.0007 5 17ZM3.4 7H6.6L5 4.125L3.4 7ZM11 19V11H19V19H11ZM13 17H17V13H13V17ZM15 9C14.05 8.2 13.254 7.525 12.612 6.975C11.97 6.425 11.4577 5.94167 11.075 5.525C10.6917 5.10833 10.4167 4.71667 10.25 4.35C10.0833 3.98333 10 3.59167 10 3.175C10 2.425 10.2627 1.79167 10.788 1.275C11.3133 0.758333 11.9673 0.5 12.75 0.5C13.2 0.5 13.621 0.604333 14.013 0.813C14.405 1.02167 14.734 1.309 15 1.675C15.2667 1.30833 15.596 1.021 15.988 0.813C16.38 0.605 16.8007 0.500667 17.25 0.5C18.0333 0.5 18.6877 0.758333 19.213 1.275C19.7383 1.79167 20.0007 2.425 20 3.175C20 3.59167 19.9167 3.98333 19.75 4.35C19.5833 4.71667 19.3083 5.10833 18.925 5.525C18.5417 5.94167 18.029 6.425 17.387 6.975C16.745 7.525 15.9493 8.2 15 9ZM15 6.375C16.2 5.375 17 4.66667 17.4 4.25C17.8 3.83333 18 3.49167 18 3.225C18 3.00833 17.9373 2.83333 17.812 2.7C17.6867 2.56667 17.516 2.5 17.3 2.5C17.1333 2.5 16.9707 2.54567 16.812 2.637C16.6533 2.72833 16.4577 2.891 16.225 3.125L15 4.3L13.775 3.125C13.5417 2.89167 13.3457 2.729 13.187 2.637C13.0283 2.545 12.866 2.49933 12.7 2.5C12.4833 2.5 12.3127 2.56667 12.188 2.7C12.0633 2.83333 12.0007 3.00833 12 3.225C12 3.49167 12.2 3.83333 12.6 4.25C13 4.66667 13.8 5.375 15 6.375Z" fill="white"/>
            </svg>
            <div 
                v-for="item in 3" 
                :key="item" 
                @click="$router.push({path: '/search/results', query: { hashtags: 'programming' }})">
                <p class="interest-hashtag">#Programming</p>
                <p>Relavant: #webdev, #css, #programmerhumour...</p>

            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20%;
}
.hashtags-popular {
    width: 100%;
    padding: 5%;
    color: white;
}
.hashtags-popular > h2 {
    font-weight: bold;
    margin-bottom: 10px;
}
.hashtags-popular > div {
    cursor: pointer;
    margin-bottom: 20px;
}
.hashtags-popular > div > button {
    float: right;
    margin-top: -45px;
    background: transparent;
    border: none;
    border-radius: 10px;
    padding: 5px;
    padding-bottom: 2px;
    cursor: pointer;
}
.hashtags-popular > div > button:hover {
    background: var(--c-black-mute);
}
.hashtag {
    font-size: 18px;
    font-weight: bold;
}
.map, .interests {
    width: 100%;
    padding: 5%;
}
.map-option {
    width: 100%;
    height: 10vh;
    margin-top: 25px;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;
}
.map-option > p {
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    align-self: center;
    margin-top: -6.5vh;
    left: 0px;
    right: 0px;
}
.overlay-map {
    background-image: url('https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/[-77.043686,38.892035,-77.028923,38.904192]/400x400?access_token=pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg');
    background-size: cover;
    filter: blur(1px);
    width: 100%;
    height: 100%;
}
.overlay {
    background: rgba(0,0,0,0.7);
    position: absolute;
    width: 90%;
    height: 10vh;
    margin-top: -10vh;
    border-radius: 20px;
    border: 2px solid var(--c-primary);
}
.interests > div {
    margin-bottom: 20px;
    cursor: pointer;
}
.interest-hashtag {
    color: white;
    font-size: 18px;
    font-weight: bold;
}
.suggestions {
    background-color: var(--c-black-mute);
    width: 85%;
    padding: 10px;
    border-radius: 10px;
    margin-top: 5px;
    padding-left: 20px;
    color: #ababab;
}
.suggestions > p {
    cursor: pointer;
}
</style>