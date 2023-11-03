<script setup lang="ts">
const props = defineProps({
    count: {
        type: Number,
        default: 4
    },
    type: String
})
</script>

<template>
    <div v-if="!props?.type" style="width: 100%">
        <div class="skeleton-loader" v-for="item in props.count" :key="item">
            <div class="image"></div>
            <div class="text" style="margin-top: -45px; width: 25%; margin-bottom: 40px;">
            </div>
            <div class="text">
            </div>
            <div class="text">
            </div>
            <div class="text">
            </div>
            <div class="btns"></div>
        </div>
    </div>
    <div v-if="props?.type && props?.type === 'full-post'" class="skeleton-loader" 
        style="padding-top: 20px; background: transparent">
        <div class="image"></div>
        <div class="text" style="margin-top: -45px; width: 25%; margin-bottom: 40px;">
        </div>
        <div class="text">
        </div>
        <div class="text">
        </div>
        <div class="text">
        </div>
        <div class="btns"></div>
    </div>
    <div v-if="props?.type && props?.type === 'comments'">
        <div class="skeleton-loader" style="padding-top: 20px; background: transparent" v-for="item in 3" :key="item">
            <div class="image" style="margin-left: 0px"></div>
            <div class="text" style="margin-top: -45px; width: 25%; margin-bottom: 20px; margin-left: 60px">
            </div>
            <div class="text" style="margin-left: 60px">
            </div>
            <div class="text" style="margin-left: 60px">
            </div>
            <div class="text" style="margin-left: 60px">
            </div>
        </div>
    </div>
    <div v-if="props?.type && props?.type === 'profile'" class="skeleton-loader"
        style="padding-top: 12%; display: flex; flex-direction: column; align-items: center; background: transparent">
        <div class="image" style="height: 85px; width: 85px; border-radius: 50%; margin-left: 0px; align-self: center;"></div>
        <div class="text" style="margin-left: 0px; width: 50%"></div>
        <div class="text" style="margin-left: 0px; margin-top: 20px"></div>
        <div class="text" style="margin-left: 0px"></div>
        <div class="btns"></div>
    </div>
</template>

<style scoped>
.skeleton-loader {
    width: 600px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    padding-top: 30px;
    padding-bottom: 50px;
    background: var(--color-background-mute);
    margin-bottom: 10px;
    animation: pulse 2s ease-out infinite;
}

@media (max-width: 600px) {
    .skeleton-loader {
        width: 100%;
    }
}

.image {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    align-self: flex-start;
    margin-left: 5%;
    border-radius: 20px;
    margin-bottom: 20px;
}

.text {
    width: 75%;
    height: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    margin-bottom: 10px;
    margin-left: 18%;
}

.btns {
    width: 90%;
    margin-left: 5%;
    height: 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    margin-top: 30px;
}

@keyframes pulse {
    0% {
        opacity: 0.8;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.8;
    }
}</style>