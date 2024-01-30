<script setup>
import CardDown from './CardDown.vue';
import { useColStore } from '@/stores/colStore';

const colStore = useColStore();

const onClickImg = (id) => {
  try {
    useColStore().setCardSelected(id, true);
    // console.log(colStore.cards)
  } catch (error) {
    console.error('Error in onClickImg:', error);
  }
  // console.log(colStore.cards.value[id].isSelected)
  // cards.value.forEach((card, i) => {
  //   if (i !== index) {
  //     card.isSelected = false;
  //   }
  // });
};


const getImageUrl = (idType) => {
  switch (idType) {
    case 1:
      return 'Yellow.jpg';
    case 2:
      return 'Turquoise.jpg';
    case 3:
      return 'Red.jpg';
    default:
      return 'Yellow.jpg';
  }
};

const getIconUrl = (idType) => {
  switch (idType) {
    case 1:
      return '/Icons/Heart.svg';
    case 2:
      return '/Icons/Star.svg';
    case 3:
      return '/Icons/Diamond.svg';
    default:
      return '/Icons/Star.svg';
  }
};

const getAltText = (idType) => {
  switch (idType) {
    case 1:
      return 'интересы|увлечения';
    case 2:
      return 'способности|навыки';
    case 3:
      return 'условия|мотивиция';
    default:
      return 'неизвестно';
  }
};
</script>

<template>
  <div class="flex  bg-zinc-300 p-1 gap-3 overflow-x-scroll">
    <card-down 
      v-for="item in colStore.selectedArray"
        :key="item.id"
        :altTxt=getAltText(item.idType)
        :title-txt="item.titleTxt"
        :type-title="item.typeTitle"
        :on-click-img="() => onClickImg(item.id)"
        :image-url=getImageUrl(item.idType)
        :icon-url=getIconUrl(item.idType)
    />
  </div>
</template>
