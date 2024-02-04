import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useModalNewConsultStore = defineStore('modalNewConsultStore', () => {
  const isModalConsultOpen = ref(false)

  const openModal = () => {
    isModalConsultOpen.value = true
  }

  const closeModal = () => {
    isModalConsultOpen.value = false
  }

  return { isModalConsultOpen, openModal, closeModal }
})
