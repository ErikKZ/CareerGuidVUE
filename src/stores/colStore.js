import { defineStore } from 'pinia'
import { ref } from 'vue'
import dataCards from '@/dataCards'

export const useColStore = defineStore('colStore', () => {
  const selectedArray = ref([])
  const allselectedArray = ref([])
  const filteredTypeArray = ref([])

  const cards = ref(dataCards)

  
  const removeCardSelected = (id, idType) => {
    const cardIndex = allselectedArray.value.findIndex((card) => card.id === id);
    if (cardIndex !== -1) {
      selectedArray.value.push(...allselectedArray.value.splice(cardIndex, 1));
      selectedArray.value.sort((a, b) => a.id - b.id);
      filteredTypeArray.value = getFilteredCards(idType);
    } else {
      alert('Card not found: ' + id);
    }
  }
  
  const setCardSelected = (id, idType) => {
    const cardIndex = selectedArray.value.findIndex((card) => card.id === id)
    if (cardIndex !== -1) {
      allselectedArray.value.push(selectedArray.value[cardIndex]);  
      allselectedArray.value.sort((a, b) => a.id - b.id);
      filteredTypeArray.value = getFilteredCards(idType);
      selectedArray.value.splice(cardIndex, 1);  
    } else {
      alert('Card not found: ' + id)
    }
  }

  const getFilteredCards = (idType) => {
    return allselectedArray.value
        .filter((item) => item.idType === idType);
  }
  
  
  const getCardsForRow2 = (idType) => {
    return cards.value.filter(card =>
      !allselectedArray.value.some(selectedCard => 
      selectedCard.id === card.id) && card.idType === idType)
  }

  const resetAllSelectedArrayFilters = () => {
    allselectedArray.value = allselectedArray.value
      .filter(card => card.idType > 0)
      .sort((a, b) => {
        // Сначала сравниваем по idType
        if (a.idType !== b.idType) {
          return a.idType - b.idType;
        }
        // Если idType одинаков, сравниваем по id
        return a.id - b.id;
      });
  };
  


  return {
    selectedArray,
    allselectedArray,
    setCardSelected,
    getFilteredCards,
    removeCardSelected,
    getCardsForRow2,
    filteredTypeArray,
    resetAllSelectedArrayFilters,
    cards
  }
})

