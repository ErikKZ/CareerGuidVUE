<script setup>
import { useColStore } from '@/stores/colStore';
import { useColSecRow2Store } from '@/stores/colSecRow2Store';
import Card from './Card.vue'

const colStore = useColStore()
const colSecRow2Store = useColSecRow2Store()

const onClickImg = (type) => {  // colStore.selectedArray = colStore.cards.filter(c => c.idType === type && !c.isSelected)
  colStore.selectedArray = colStore.getCardsForRow2(type);
  colStore.filteredTypeArray = colStore.getFilteredCards(type); 
  colSecRow2Store.changeToFalseDialog();

  // ColSecRow2Store.dialog = true;
}
</script>   

<template>
  <div class="flex flex-col p-3 gap-3 h-screen sticky top-0" style="width: 174px">
    <Card
      @click="() => onClickImg(1)"
      subtitle="интересы|увлечения"
      image-url="1col.jpg"
      icon-url="/Icons/Heart.svg"
    />
    <Card
      @click="() => onClickImg(2)"
      subtitle="способности|навыки"
      image-url="2col.jpg"
      icon-url="/Icons/Star.svg"
    />
    <Card
      @click="() => onClickImg(3)"
      subtitle="условия|мотивация"
      image-url="3col.jpg"
      icon-url="/Icons/Diamond.svg"
    />
  </div>
</template>
