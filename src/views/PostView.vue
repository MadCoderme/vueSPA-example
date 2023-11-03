<script setup lang="ts">
import Post from '@/components/post/Post.vue'
import SkeletonLoader from '@/components/template/SkeletonLoader.vue';
import type { PostDataType } from '@/lib/types/supabaseext'
import DiscussionPost from '@/components/post/DiscussionPost.vue'
import { usePostsApi } from '@/stores/posts'

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const api = usePostsApi()
const route = useRoute()
const post = ref()

onMounted(() => {
    api.getPost(parseInt(route.params?.id as string))
        .then((res : any) => {
            post.value = res as PostDataType
        })
})
</script>

<template>
    <div>
        <SkeletonLoader v-if="!post" :type="'full-post'" />
        <DiscussionPost v-if="post && post?.isDiscussion" :item="post" :isDetailView="true" />
        <Post v-if="post && !post?.isDiscussion" :item="post" :isDetailView="true" />
    </div>
</template>