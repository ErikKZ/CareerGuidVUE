import { defineStore } from 'pinia'
import { ref } from 'vue'
import dataCards from '@/dataCards'

export const useColStore = defineStore('colStore', () => {
  const selectedArray = ref([])
  const allselectedArray = ref([])

  const cards = ref(dataCards)
  
  const setCardSelected = (id) => {
    const cardIndex = selectedArray.value.findIndex((card) => card.id === id)
    if (cardIndex !== -1) {
      allselectedArray.value.push(selectedArray.value[cardIndex]);
      selectedArray.value.splice(cardIndex, 1);  
    } else {
      alert('Card not found: ' + id)
    }
  }

  return {
    selectedArray,
    allselectedArray,
    setCardSelected,
    cards
  }
})

