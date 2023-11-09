<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';

import Header from '../components/template/Header.vue'
import SidebarMenu from '../components/template/SidebarMenu.vue'
import MoreOptions from '@/components/template/MoreOptions.vue'
import PostHome from '@/components/post/PostHome.vue'
import SkeletonLoader from '@/components/template/SkeletonLoader.vue'
import type { PostDataType } from '@/lib/types/supabaseext'
import { usePostsApi } from '@/stores/posts'
import { createPinia } from 'pinia'
import Vue3Sanitize from 'vue-3-sanitize'

const collapsed = ref(true)
const isLoading = ref(true)
const posts : Ref<PostDataType[] | undefined> = ref();
(window as any).app.use(createPinia());
(window as any).app.use(Vue3Sanitize, {
        allowedTags: ['a', 'b', 'i', 'font', 'br', 'div'],
        allowedAttributes: {
            a: ['href'],
            font: ['size']
        },
        disallowedTagsMode: 'escape'
});
const p = usePostsApi()

onMounted(() => {
    if (p.posts.length > 0) {
        posts.value = p.posts
        isLoading.value = false
    }
    else
    {
        p.getPosts()
        .then((val : any) => {
            if(val) {
                posts.value = val as PostDataType[]
                isLoading.value = false
            }
        })
    }

})

</script>

<template>
    <Header />
    <SidebarMenu :collapsed="collapsed" :setCollapsed="(val : boolean) => collapsed = val" />
    <MoreOptions :toggleSidebar="() => collapsed = !collapsed" />

    <SkeletonLoader style="margin-top: 12%;" v-if="isLoading" />

    <Transition appear>
        <div style="marginTop: 12%; marginBottom: 12%; background: var(--color-background-mute); display: flex; flex-direction: column;" 
            v-if="!isLoading">
            <PostHome :item="item" v-for="item in posts" :key="item.id" />
        </div>
    </Transition>
</template>
<style scoped>
@import '../assets/base.css';
@import '../assets/main.css';
@import '../assets/common.css';

@media (max-width: 480px) {
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.2s ease-in;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
}

</style>