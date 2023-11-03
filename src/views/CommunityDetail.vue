<script setup lang="ts">
import Post from '@/components/post/Post.vue'
</script>

<template>
    <div class="container">
        <div style="width: 80%; display: flex; align-items: center; margin-top: 20px;">
            <img src="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                loading="lazy" class="cover" />
            <div>
                <h2 style="color: white">@Photography</h2>
                <p>
                    <RouterLink to="/search/results?hashtags=photos" class="tags">#photos</RouterLink>
                    <RouterLink to="/search/results?hashtags=captures" class="tags">#captures</RouterLink>
                </p>
            </div>
        </div>
        <div class="join-btn">
            <p>25k Members</p>
            <button class="btn-primary rounded">Join</button>
        </div>
        <div style="margin-top: 30px;">
            <Post />
        </div>

    </div>
</template>

<style scoped>
.cover {
    width: 70px;
    height: 70px;
    border-radius: 15px;
    object-fit: cover;
    margin-right: 25px;
}
.tags {
    font-size: 16px;
    margin-right: 8px;
}
.join-btn {
    margin-top: 20px;
    align-self: flex-end;
    margin-right: 5%;
    display: flex;
    align-items: center;
}
.join-btn > p {
    margin-right: 10px;
    color: #ababab;
}
.join-btn > button {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>