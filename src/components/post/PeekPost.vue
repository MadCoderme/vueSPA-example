<script setup lang="ts">
import '@/assets/common.css'
import '@/assets/post.css'

</script>

<template>
    <div class="post-body" style="background-color: var(--c-black-mute); padding-top: 15px;">
        <div class="userinfo">
            <img src="https://plus.unsplash.com/premium_photo-1669800502069-499e172df081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                loading="lazy" class="avatar" />
            <p class="username">Andrew</p>
            <p>2m</p>
        </div>
        <p class="post-text">
            Just found out, you can see your posts on specific dates in the past. This feels like a literal time machine!
            <br />
            It’s probably going to be a trend 😉
        </p>
        <br />
        <div style="display: flex; justify-content: space-evenly;">
            <button class="btn-secondary rounded" @click="$router.push('/p/1/stats')">
                View Stats
            </button>
            <button class="btn-primary rounded" @click="$router.push('/p/1')">
                View Post
            </button>
        </div>

    </div>
</template>