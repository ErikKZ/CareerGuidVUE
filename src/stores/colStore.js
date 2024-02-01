import { defineStore } from 'pinia'
import { ref } from 'vue'
import dataCards from '@/dataCards'

export const useColStore = defineStore('colStore', () => {
  const selectedArray = ref([])
  const allselectedArray = ref([])
  const filteredTypeArray = ref([])
  

  const cards = ref(dataCards)
  
  const removeCardSelected = (id, idType) => {
    const cardIndex = allselectedArray.value.findIndex((card) => card.id === id)
    if (cardIndex !== -1) {
      allselectedArray.value.slice(cardIndex, 1); //allselectedArray.value[cardIndex]);  
      filteredTypeArray.value = getFilteredCards(idType);
      selectedArray.value.push(allselectedArray.value[cardIndex]); //selectedArray.value(cardIndex, 1);  
    } else {
      alert('Card not found: ' + id)
    }
  }
  const setCardSelected = (id, idType) => {
    const cardIndex = selectedArray.value.findIndex((card) => card.id === id)
    if (cardIndex !== -1) {
      allselectedArray.value.push(selectedArray.value[cardIndex]);  
      // filteredTypeArray.value = allselectedArray.value.filter((item) => item.idType === idType);
      filteredTypeArray.value = getFilteredCards(idType);
      selectedArray.value.splice(cardIndex, 1);  
    } else {
      alert('Card not found: ' + id)
    }
  }

  const getFilteredCards = (idType) => {
    return allselectedArray.value.filter((item) => item.idType === idType);
  }

  return {
    selectedArray,
    allselectedArray,
    setCardSelected,
    getFilteredCards,
    removeCardSelected,
    filteredTypeArray,
    cards
  }
})

