<script setup>
import CardDown from './CardDown.vue';
import { useColStore } from '@/stores/colStore'

const colStore = useColStore();
const onDblClickImg = (id, idType) => {
  console.log('onDblClickImg:', id, idType);
};

// function onDblClickImg (id, idType){
//   console.log('onDblClickImg:', id, idType);
// };

</script>


<template>
  <div class="grow text-lg text-center flex flex-row justify-center items-center bg-stone-200">
    <div
      v-if="colStore.allselectedArray.length === 0"
      class="grow text-lg text-center flex flex-row justify-center items-center bg-stone-200"
    >
      Выберите карты из колоды
      <br />▼
    </div>
    <div
      v-else
      class="grow flex flex-wrap p-3 gap-3 justify-center items-center overflow-y-auto relative"
      style="max-height: calc(100vh - 240px)"
    >
      <div 
        v-for="item in colStore.filteredTypeArray"
        :key="item.id"
        class="relative" style="opacity: 1" draggable="true" data-handler-id="T8">
        <card-down
          :id-type="item.idType"
          :title-txt="item.titleTxt"
          :type-title="item.typeTitle"
          @dblclick="() => onDblClickImg(item.id, item.idType)"
        />
      </div>
    </div>
  </div>
</template>
