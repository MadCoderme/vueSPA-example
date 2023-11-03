<script setup lang="ts">
import { ref } from 'vue'
import { useMoreOptionsSheet } from '@/stores/moreOptions'
import MoreOptions from './components/post/MoreOptions.vue'
import BottomMenu from './components/template/BottomMenu.vue'


const isMoreOptionsVisible = ref(false)
useMoreOptionsSheet().$subscribe((mutation, state) => {
  isMoreOptionsVisible.value = state.sheetRef
})

</script>

<template>
  <main>
    <router-view :key="$route.fullPath"></router-view>
    <MoreOptions 
        v-show="isMoreOptionsVisible" 
        :onClose="() => useMoreOptionsSheet().toggle()" />
    <BottomMenu />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
