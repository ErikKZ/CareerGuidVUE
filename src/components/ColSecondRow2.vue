<script setup>
import CardDown from './CardDown.vue';
import { useColStore } from '@/stores/colStore';

const colStore = useColStore();

const onClickImg = (id) => {
  console.log(id)
  try {
    useColStore().setCardSelected(id);
    // colStore.allselectedArray.filter(card => card.idType === 2)
    // console.log(colStore.allselectedArray.value)
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

</script>

<template>
  <div class="flex  bg-zinc-300 p-1 gap-3 overflow-x-scroll">
    <card-down 
      v-for="item in colStore.selectedArray"
        :key="item.id"
        :id-type="item.idType"
        :title-txt="item.titleTxt"
        :type-title="item.typeTitle"
        :on-click-img="() => onClickImg(item.id)"
    />
  </div>
</template>
