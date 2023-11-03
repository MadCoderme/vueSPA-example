<script setup lang="ts">
import PostHome from '@/components/post/PostHome.vue'
import SkeletonLoader from '@/components/template/SkeletonLoader.vue';
import type { Database } from '@/lib/types/supabase';
import type { PostDataType } from '@/lib/types/supabaseext';
import { useUsersApi } from '@/stores/users'

import { ref, onMounted, type Ref } from 'vue'
import { useRoute } from 'vue-router'

type UserRow = Database['public']['Tables']['users']['Row']

const currentTab = ref(0)
const route = useRoute()
const api = useUsersApi()

const isLoading = ref(true)
const data = ref()
const posts : Ref<PostDataType[] | undefined> = ref()

onMounted(() => {
    if(route.params.id)
    {
        api.getUserByUsername(route.params.id as string)
            .then((res : UserRow | null) => {
                if(res) {
                    data.value = res
                    isLoading.value = false
                    api.getUserPosts('9dc7c423-a8ad-4319-b43a-28f85d54fd69')
                        .then((res : any) => {
                            if(res)
                            posts.value = res as PostDataType[]
                        })
                }
            })
    }
})

</script>

<template>
    <SkeletonLoader :type="'profile'" v-if="isLoading" />
    <div class="container-u" v-if="!isLoading">
        <img 
            src="https://images.unsplash.com/photo-1694754933649-8afc9bebc7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            loading="lazy"
            class="banner-profile"
        />

        <img 
            src="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            loading="lazy"
            class="avatar-profile"
        />

        <div class="verified-tick">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6077 3.90688C10.4642 3.82703 10.3064 3.77626 10.1433 3.75746C9.98018 3.73865 9.81495 3.75219 9.65706 3.79729C9.49917 3.84239 9.35172 3.91818 9.22314 4.02031C9.09457 4.12244 8.98738 4.24891 8.90772 4.3925L6.5871 8.56875L5.25897 7.24063C5.14366 7.12124 5.00573 7.02601 4.85323 6.9605C4.70072 6.89499 4.5367 6.86051 4.37073 6.85906C4.20475 6.85762 4.04015 6.88925 3.88653 6.9521C3.73291 7.01495 3.59335 7.10777 3.47598 7.22513C3.35861 7.3425 3.2658 7.48206 3.20295 7.63568C3.1401 7.7893 3.10847 7.9539 3.10991 8.11988C3.11135 8.28585 3.14584 8.44988 3.21135 8.60238C3.27686 8.75489 3.37209 8.89282 3.49147 9.00813L5.99147 11.5081C6.22772 11.745 6.54647 11.875 6.87522 11.875L7.04835 11.8625C7.23994 11.8357 7.4227 11.7648 7.58224 11.6554C7.74177 11.5459 7.87373 11.401 7.96772 11.2319L11.0927 5.60688C11.1725 5.46341 11.2233 5.30563 11.2421 5.14255C11.2609 4.97947 11.2474 4.81429 11.2023 4.65642C11.1573 4.49856 11.0816 4.35112 10.9796 4.22251C10.8776 4.0939 10.7512 3.98665 10.6077 3.90688Z" fill="#27323A"/>
            </svg>
        </div>


        <h2 class="name-profile">{{ data.name }}</h2>
        <p style="font-size: 17px;">@{{ data.username }}</p>
        <p class="bio">{{ data.description }}</p>
        <div class="info-row">
            <div>
                <p>{{ data.followerCount }}</p>
                <p>Followers</p>
            </div>
            <div>
                <p>{{ data.followingCount }}</p>
                <p>Following</p>
            </div>
            <div>
                <p>{{ data.postCount }}</p>
                <p>Posts</p>
            </div>
        </div>
        <div class="btns-row">
            <button class="btn-primary rounded">
                Follow
            </button>
            <button class="btn-secondary rounded">
                Message
            </button>
        </div>
        <div class="tab-row" >
            <p :style="{color: currentTab == 0 ? 'white': '#ababab'}" @click="currentTab = 0">Posts</p>
            <p :style="{color: currentTab == 1 ? 'white': '#ababab'}" @click="currentTab = 1">Challenges</p>
        </div>
        <br />
        <div v-show="currentTab == 0" style="width: 100%">
            <SkeletonLoader v-if="!posts" />
            <PostHome v-for="item in posts" :key="item.id" :item="item"  />
        </div>
    </div>
</template>

<style scoped>
.container-u {
    padding: 20px;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.name-profile {
    color: white;
    font-weight: bold;
    margin-bottom: -5px;
    margin-top: 15px;
}
.banner-profile {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 12%;
    object-fit: cover;
    mask-image: linear-gradient(rgba(255, 255, 255, 1) 15%, rgba(255, 255, 255,0));
}
.avatar-profile {
    width: 85px; 
    height: 85px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--c-primary);
    align-self: center;
    z-index: 10;
    margin-top: 12%;
    margin-bottom: 10px;
}
.verified-tick {
    background: var(--c-primary);
    height: 18px;
    width: 18px;
    padding-left: 2px;
    border-radius: 20px;
    align-self: center;
    margin-left: 48px;
    margin-top: -28px;
    z-index: 12;
}
.bio {
    color: white; 
    font-size: 17px; 
    margin-top: 10px;
}
.info-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 20px;
}
.info-row > div {
    color: #ababab;
    text-align: center;
}

.info-row > div > p ~ p {
    font-size: 16px;
    color: #ababab;
    font-weight: normal;
}
.info-row > div > p {
    font-size: 20px;
    color: white;
    font-weight: bold;
}
.btns-row {
    display: flex;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
}
.btns-row > button {
    width: 50%;
    margin-inline: 10px;
}
.tab-row {
    align-self: flex-start;
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
}
.tab-row > p {
    font-size: 17px;
    color: white;
    font-weight: bold;
    margin-inline: 10px;
    cursor: pointer;
}
@media (max-width: 480px) {
    .bio {
        font-size: 15px;
    }
    .info-row > div > p ~ p {
        font-size: 15px;
    }
    .info-row > div > p {
        font-size: 18px;
    }
}
</style>