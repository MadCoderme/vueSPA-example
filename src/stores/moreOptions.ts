import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useMoreOptionsSheet = defineStore('more-options', () => {
  const sheetRef = ref(false)

  function toggle() {
    sheetRef.value = !sheetRef.value
  }

  return { sheetRef, toggle }
})
