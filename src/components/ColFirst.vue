<script setup>
import Card from './Card.vue'
import { useColStore } from '@/stores/colStore';

const colStore = useColStore()
const onClickImg = (type) => {
  colStore.selectedArray = colStore.cards.filter(c => c.idType === type && !c.isSelected)
  
  // switch (type) {
  //   case 1:
  //     colStore.yellowArray = colStore.cards.filter(c => c.idType === type);
  //     colStore.selectedArray = colStore.yellowArray
  //     break;
  //   case 2:
  //     colStore.turquoiseArray = colStore.cards.filter(c => c.idType === type);
  //     colStore.selectedArray = colStore.turquoiseArray
  //     break;
  //   case 3:
  //     colStore.redArray = colStore.cards.filter(c => c.idType === type);
  //     colStore.selectedArray = colStore.redArray
  //     break;
  //   default:
  //     colStore.selectedArray = []
  //     break;
  // }
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
