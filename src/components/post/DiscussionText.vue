<script setup lang="ts">
import "@/assets/common.css"
import "@/assets/post.css"
import Comment from "./Comment.vue"
import { formatText } from "@/lib/utils";
const props = defineProps({
    isDetailView: Boolean,
    isOrigin: Boolean,
    value: String
})
</script>

<template>
    <div :class="{ 'origin-comment': props?.isOrigin, 'flow-comment': !props.isOrigin }">
        <div class="userinfo">
            <img src="https://plus.unsplash.com/premium_photo-1669800502069-499e172df081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                loading="lazy" class="avatar-small" />
            <p :class="props?.isOrigin ? 'username-small' : 'username'">Andrew</p>
            <p>2m</p>
        </div>

        <button v-if="!props.isOrigin" class="reply-btn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.4461 16.06C20.4929 16.1526 20.5098 16.2574 20.4943 16.36C20.4789 16.4626 20.432 16.5579 20.36 16.6326C20.288 16.7073 20.1946 16.7578 20.0927 16.777C19.9907 16.7963 19.8853 16.7833 19.7911 16.74L17.2911 15.587C15.2009 14.6222 12.9097 14.1733 10.6101 14.278C10.5829 15.0133 10.5426 15.7481 10.4891 16.482L10.4201 17.42C10.4106 17.5503 10.3675 17.6759 10.295 17.7845C10.2224 17.8931 10.1229 17.981 10.0062 18.0396C9.88941 18.0981 9.75945 18.1254 9.62901 18.1186C9.49857 18.1119 9.37212 18.0713 9.26206 18.001C7.17321 16.6662 5.35729 14.9463 3.91106 12.933L3.45106 12.293C3.38986 12.2079 3.35693 12.1058 3.35693 12.001C3.35693 11.8962 3.38986 11.7941 3.45106 11.709L3.91106 11.069C5.35719 9.05534 7.17312 7.33511 9.26206 6C9.37205 5.92971 9.49842 5.88917 9.62878 5.88237C9.75914 5.87556 9.88904 5.90272 10.0058 5.96117C10.1225 6.01963 10.222 6.1074 10.2946 6.21587C10.3673 6.32434 10.4105 6.44982 10.4201 6.58L10.4891 7.52C10.5351 8.15 10.5711 8.78 10.5971 9.41H11.2411C12.9971 9.41013 14.7188 9.897 16.2149 10.8165C17.7109 11.7361 18.9229 13.0523 19.7161 14.619L20.4461 16.061V16.06Z" fill="#435055"/>
            </svg>
        </button>

        <p :class="props?.isOrigin ? 'post-text-small' :
            props?.isDetailView ? 'post-text-detail' : 'post-text'"
            v-html="props?.value && $sanitize(formatText(props?.value))"
            style="margin-left: 0px; margin-top: 10px; width: 95%"
            @click="($event.target as HTMLElement).nodeName === 'A' && $event.stopPropagation()">
        </p>

        <svg v-if="!props?.isOrigin"
            width="10" height="40" viewBox="0 0 10 46" class="comment-flow" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 1 1 L 1 35 C 1 40 3 45 9 44.5" stroke="#A3F7BF" stroke-opacity="0.5" stroke-width="3"
                stroke-linecap="round" />
        </svg>

        <div style="display: grid; grid-template-columns: 3px auto;">
            <div v-if="!props?.isOrigin" class="flow"></div>
            <div style="margin-top: -10px; margin-bottom: 10px">
                <!-- <Comment v-if="!props?.isOrigin" :isDiscussion="true" /> -->
            </div>  
        </div>

    </div>
</template>

<style scoped>
.origin-comment {
    margin-left: 50px;
    margin-bottom: -50px;
}
.flow {
    margin-top: 10px;
    margin-left: 16px;
    width: 3px;
    background-color: var(--c-primary);
    opacity: 0.5;
    border-radius: 2px;
    height: 100%;
    flex: 2;
}
.flow-comment {
    margin-bottom: 30px;
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    grid-auto-flow: column;
}
.reply-btn {
    position: absolute;
    right: 10px;
    background-color: transparent;
    border: 0px;
}
.reply-btn:hover {
    background-color: var(--c-black-mute);
    border-radius: 10px;
}
.comment-flow {
    margin-left: 16px;
    margin-bottom: -18px;
    margin-top: 20px;
}
</style>