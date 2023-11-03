<script setup lang="ts">
import '@/assets/common.css'
import type { CommentDataType } from '@/lib/types/supabaseext'
import Comment from './Comment.vue'
import SkeletonLoader from '@/components/template/SkeletonLoader.vue'


const props = defineProps<{
    comments?: CommentDataType[]
}>()
</script>

<template>
    <div>
        <SkeletonLoader v-if="!props.comments" type="comments" />
        <div v-if="props.comments" class="comment-section">
            <div v-for="(item) in comments" :key="item.id" class="comment">
                <Comment :data="item" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.comment-section {
    margin-bottom: 20vh;
    margin-top: 30px;
}
.comment {
    margin: 5px;
    margin-bottom: 20px;
}

</style>