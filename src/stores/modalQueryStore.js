import { defineStore } from 'pinia'

import { ref } from 'vue'


export const useModalQueryStore = defineStore('modalQueryStore', () => {
  const isModalOpen = ref(false)
  const isModalResultOpen = ref(false)
    

  
  const openModalResult = () => {
    isModalResultOpen.value = true
    // console.log('openModalResult')
  }
  const closeModalResult = () => {
    isModalResultOpen.value = false
  }

  const openModal = () => {
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
  }

  return { isModalOpen,isModalResultOpen, openModal, closeModal, openModalResult, closeModalResult }
})
