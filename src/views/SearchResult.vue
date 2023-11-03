<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import PostHome from '@/components/post/PostHome.vue'
import UserBar from '@/components/UserBar.vue'
import CollectionStack from '@/components/CollectionStack.vue'

import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import SkeletonLoader from '@/components/template/SkeletonLoader.vue'

const route = useRoute()

const queries = route.query
const activeTab = ref(0)
const isLoading = ref(true)
const resPosts = ref()

onMounted(() => {
    if (!queries.keyword) {
        return
    }
    supabase.from('posts')
        .select(`id,
                text,
                created_at,
                loveCount, 
                commentCount,
                shareCount,
                user:users(username, name),
                loves (id, created_at),
                lang, translatedText`)
        .textSearch('text', `'${queries.keyword}'`)
        .then(({ data, error }) => {
            if (!error) {
                resPosts.value = data
                isLoading.value = false
            }
        })

})

</script>

<template>
    <div class="container">
        <SearchBar style="width: 90%" />
        <div class="tags">
            <span class="tag" v-if="queries.keyword">{{ queries.keyword }}</span>
            <span v-if="queries.hashtags">
                <span v-for="item in (queries.hashtags as string).split(',')" :key="item" class="tag">
                    #{{ item }}
                </span>
            </span>
        </div>
        <div class="tabs">
            <p :style="{ color: activeTab == 0 ? 'white' : '#ababab' }" @click="activeTab = 0">
                Posts
            </p>
            <p :style="{ color: activeTab == 1 ? 'white' : '#ababab' }" @click="activeTab = 1">
                Users
            </p>
            <p :style="{ color: activeTab == 2 ? 'white' : '#ababab' }" @click="activeTab = 2" v-if="queries.hashtags">
                Collections
            </p>
            <p :style="{ color: activeTab == 3 ? 'white' : '#ababab' }" @click="activeTab = 3">
                Metrics
            </p>
        </div>

        <div v-show="activeTab == 0" class="tab" style="width: 100%">
            <div class="suggested">
                <p style="font-size: 16px; font-weight: bold; margin-bottom: 5px;">Suggested tags to Explore</p>
                <RouterLink :to="{ path: '/search/results', query: { hashtags: 'blahblah' } }">#blahlbah</RouterLink>
                <RouterLink :to="{ path: '/search/results', query: { hashtags: 'nobodycares' } }">#nobodycares</RouterLink>
            </div>
            <SkeletonLoader v-if="isLoading" />
            <div v-if="resPosts" style="width: 100%">
                <PostHome v-for="item in resPosts" :item="item" :key="item.id" />
            </div>
        </div>
        <div v-show="activeTab == 1" class="tab">
            <UserBar v-for="item in 3" :key="item" />
        </div>
        <div v-show="activeTab == 2" class="tab">
            <CollectionStack v-for="item in 3" :key="item" />
        </div>
        <div v-show="activeTab == 3" class="tab col">
            <div class="stat-card" v-for="item in 4" :key="item">
                <p style="font-size: 20px; font-weight: bold;">2k</p>
                <p style="color: #ababab">Posts</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tags,
.tabs {
    display: flex;
    color: white;
    margin-top: 15px;
    align-self: flex-start;
    margin-left: 5%;
}

.tag {
    background: #435055;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 6px;
    margin-left: 5px;
}

.tabs>p {
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
}

.col {
    display: grid;
    grid-template-columns: auto auto;
    place-content: center;
    gap: 10%;
    padding-top: 10px;
}

.suggested {
    width: 80%;
    background: var(--c-black-mute);
    padding: 15px;
    border-radius: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
}

.suggested>a {
    color: white;
    display: block;
    width: fit-content;
    padding-left: 2px;
    padding-right: 2px;
}

.stat-card {
    width: 100px;
    height: 100px;
    background-color: var(--c-black-mute);
    border: 1px solid #a3f7bf88;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    margin-top: 20px;
}
</style>