<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import CardDown from './CardDown.vue';
import { useColStore } from '@/stores/colStore'

const colStore = useColStore();
const onDblClickImg = (id, idType) => {
  console.log('onDblClickImg:', id, idType);
};

const cardMove = ref({});

let shiftX = 0;
let shiftY = 0;

const moveAt = (pageX, pageY, cardElement) => {
  // const ball = cardMove.value[id];
  cardElement.style.left = `${pageX - shiftX}px`;
  cardElement.style.top = `${pageY - shiftY}px`;
};

const dragStart = (event, id) => {
  const cardElement = cardMove.value[id];

  if(!cardElement) return;
  console.log(cardElement, cardMove.value[0], id);
  shiftX = event.clientX - cardElement.getBoundingClientRect().left;
  shiftY = event.clientY - cardElement.getBoundingClientRect().top;

  cardElement.value.style.position = 'absolute';
  cardElement.value.style.zIndex = '1000';
  document.body.append(cardElement.value);

  moveAt(event.pageX, event.pageY, cardElement);

  document.addEventListener('mousemove', onMouseMove);

  cardElement.value.onmouseup = () => {
    document.removeEventListener('mousemove', onMouseMove);
    cardElement.value.onmouseup = null;
  };
};

const onMouseMove = (event) => {
  moveAt(event.pageX, event.pageY);
};

onMounted(() => {
  for (let i = 0; i < 14; i++) {
    cardMove.value[i] = null;
  }
  // console.log("getFilteredCards", cardMove.value)  
  colStore.filteredTypeArray.forEach(item => {
    cardMove.value[item.id] = null;
    ;
  });
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove);
});
</script>


<template>
  <div class="grow text-lg text-center flex flex-row justify-center items-center bg-stone-200">
    <div
      v-if="colStore.filteredTypeArray.length === 0"
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
        :ref="el => { if (el) cardMove.value[item.id] = el }"
        @mousedown="($event) => dragStart($event, item.id)"
        @dragstart.prevent
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
