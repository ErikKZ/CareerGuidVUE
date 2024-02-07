import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useColSecRow2Store = defineStore('colSecRow2Store', () => {
  const dialog = ref(true)

  const changeDialog = () => {
    dialog.value = !dialog.value
  }


  return { dialog, changeDialog }
})
