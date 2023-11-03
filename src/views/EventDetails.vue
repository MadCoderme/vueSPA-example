<script setup lang="ts">
import Post from '@/components/post/Post.vue'
</script>

<template>
    <div class="container">
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center;">
                <img src="https://plus.unsplash.com/premium_photo-1669800502069-499e172df081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    loading="lazy" class="avatar" />
                <div style="margin-left: 15px;">
                    <h3 class="event-title">Developers Live Talk</h3>
                    <p>19 Sept</p>
                </div>
            </div>
            <p class="tag">Meetup</p>
        </div>

        <p class="details">
            Let’s sit together and meet developers around the world to know each other and share our experience!
        </p>

        <br />
        <p class="info">Hosted by: <a>@Robert</a></p>
        <p class="info">Link to Join: <a>String Voice Room</a></p>
        <br />
        <hr />
        <br />
        <h3 class="title">Discussions about this Event</h3>
        <Post />
        <Post />
    </div>
</template>

<style scoped>
.container {
    padding: 20px;
    padding-bottom: 200px;
}
.title {
    color: white;
    font-weight: bold;
}
.event-title {
    color: white;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
}
.event-card > p {
    color: #ababab;
    display: flex;
    align-items: center;
}
.tag {
    background-color: var(--c-primary);
    padding-left: 4px;
    padding-right: 4px;
    font-size: 14px;
    color: black !important;
    border-radius: 10px;
    margin-top: 15px;
    float: right;
}
.details {
    color: white;
    font-size: 18px;
    margin-top: 15px;
}
.info {
    color: #ababab;
    font-size: 16px;
}
</style>