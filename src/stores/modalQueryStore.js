import { defineStore } from 'pinia'

import { ref } from 'vue'


export const useModalQueryStore = defineStore('modalQueryStore', () => {
  const isModalOpen = ref(false)
    

  
  const openModal = () => {
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
  }

  return { isModalOpen, openModal, closeModal }
})