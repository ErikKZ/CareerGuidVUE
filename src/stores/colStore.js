import { defineStore } from 'pinia'
import { ref } from 'vue'
import dataCards from '@/dataCards'

export const useColStore = defineStore('colStore', () => {
  const yellowArray = ref([])
  const TurquoiseArray = ref([])
  const redArray = ref([])

  const selectedArray = []
  const selectedFromAllCardArray = ref([])

  const cards = ref(dataCards)
  const setCardSelected = (id, isSelected) => {
    const cardIndex = cards.value.findIndex((card) => card.id === id)
    if (cardIndex !== -1) {
      cards.value[cardIndex].isSelected = isSelected
    } else {
      alert('Card not found: ' + id)
    }
  }

  return {
    yellowArray,
    TurquoiseArray,
    redArray,
    selectedArray,
    selectedFromAllCardArray,
    setCardSelected,
    cards
  }
})
