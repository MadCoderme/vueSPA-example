<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { formatTime } from '@/lib/utils'
import type { CommentDataType } from '@/lib/types/supabaseext'
import { ref } from 'vue'
import { usePostsApi } from '@/stores/posts'

const props = defineProps<{
    data: CommentDataType,
    isDiscussion?: boolean
}>()

const showReplies = ref(false)
const replies = ref()
const api = usePostsApi()
function loadReplies () {
    showReplies.value = true
    api.getReplies(props.data.id)
        .then(res => {
            if (res) {
                replies.value = res
            }
        })
}
</script>

<template>
    <div :style="{marginLeft: isDiscussion ? '50px' : '0px', marginBottom: '20px'}">
        <div v-if="props?.isDiscussion" class="userinfo">
            <img src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                class="avatar-small" loading="lazy" />
            <div>
                <p class="username-small">
                    {{ props.data?.user.username }}
                    <span style="color: #ababab; margin-left: 6px">2m</span>
                </p>
                <p class="comment-text-discussion">{{ props.data.comment }}</p>
            </div>
        </div>

        <div v-if="!props?.isDiscussion" class="userinfo">
            <img src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                class="avatar" :style="{ width: 35 + 'px', height: 35 + 'px' }" loading="lazy" />
            <p class="username" :style="{ fontSize: 16 + 'px' }">
                {{ props.data.user?.username ?? 'Anonymous' }}
            </p>
            <p>{{ props.data.created_at ? formatTime(new Date(props.data.created_at)) : '' }}</p>
        </div>

        <p v-if="!props?.isDiscussion" class="comment-text">{{ props.data.comment }}</p>

        <button class="reply-btn" v-if="!isDiscussion" @click="api.replyingTo = props.data">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.4461 16.06C20.4929 16.1526 20.5098 16.2574 20.4943 16.36C20.4789 16.4626 20.432 16.5579 20.36 16.6326C20.288 16.7073 20.1946 16.7578 20.0927 16.777C19.9907 16.7963 19.8853 16.7833 19.7911 16.74L17.2911 15.587C15.2009 14.6222 12.9097 14.1733 10.6101 14.278C10.5829 15.0133 10.5426 15.7481 10.4891 16.482L10.4201 17.42C10.4106 17.5503 10.3675 17.6759 10.295 17.7845C10.2224 17.8931 10.1229 17.981 10.0062 18.0396C9.88941 18.0981 9.75945 18.1254 9.62901 18.1186C9.49857 18.1119 9.37212 18.0713 9.26206 18.001C7.17321 16.6662 5.35729 14.9463 3.91106 12.933L3.45106 12.293C3.38986 12.2079 3.35693 12.1058 3.35693 12.001C3.35693 11.8962 3.38986 11.7941 3.45106 11.709L3.91106 11.069C5.35719 9.05534 7.17312 7.33511 9.26206 6C9.37205 5.92971 9.49842 5.88917 9.62878 5.88237C9.75914 5.87556 9.88904 5.90272 10.0058 5.96117C10.1225 6.01963 10.222 6.1074 10.2946 6.21587C10.3673 6.32434 10.4105 6.44982 10.4201 6.58L10.4891 7.52C10.5351 8.15 10.5711 8.78 10.5971 9.41H11.2411C12.9971 9.41013 14.7188 9.897 16.2149 10.8165C17.7109 11.7361 18.9229 13.0523 19.7161 14.619L20.4461 16.061V16.06Z" fill="#435055"/>
            </svg>
        </button>

        <svg v-show="props.data?.replies && props.data?.replies.length > 0" 
            width="10" height="46" viewBox="0 0 10 46" class="comment-flow" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 1 1 L 1 35 C 1 40 3 45 9 44.5" stroke="#A3F7BF" stroke-opacity="0.5" stroke-width="3"
                stroke-linecap="round" />
        </svg>



        <div v-if="props.data.replyCount > 0">
            <p class="reply-show-text" @click="loadReplies()">{{ props.data.replyCount }} Replies</p>
            <div v-if="showReplies && replies" class="replies-section">
                <Comment 
                    :data="item"
                    v-for="(item) in replies" :key="item.id" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.comment-text-discussion {
    font-size: 18px;
    margin-left: 15px;
    color: white;
}
.comment-text {
    font-size: 17px;
    margin-left: 50px;
    color: white;
}
@media (max-width: 480px) {
    .comment-text {
        font-size: 15px;
    }
}

.comment-flow {
    position: absolute;
    margin-top: -10px;
    margin-left: 15px;
}
.reply-btn {
    position: absolute;
    right: 10px;
    background-color: transparent;
    border: 0px;
    margin-top: -25px;
}
.reply-btn:hover {
    background-color: var(--c-black-mute);
    border-radius: 10px;
}
.reply-show-text {
    color: var(--c-primary);
    text-decoration: underline;
    cursor: pointer;
    opacity: 0.8;
    margin-left: 45px;
    margin-top: 10px;
}
.replies-section {
    margin-top: 15px;
    margin-left: 45px;
}
</style>