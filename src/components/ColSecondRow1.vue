<script setup>
import { ref, onUnmounted } from 'vue';

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
  
  const parentElement = cardElement.parentElement; // Родительский элемент для перемещаемого блока
  const boundaries = parentElement.getBoundingClientRect(); 
  console.log(parentElement);

  let newLeft = pageX - shiftX - boundaries.left;
  let newTop = pageY - shiftY - boundaries.top;

  let rightEdge = parentElement.clientWidth - cardElement.clientWidth;
  if (newLeft > rightEdge) newLeft = rightEdge;  // Блок не перемещается за правую границу родительского элемента

  let bottomEdge = parentElement.clientHeight - cardElement.clientHeight;
  if (newTop > bottomEdge) newTop = bottomEdge; // Блок не перемещается за
  
  // Блок не должен выходить за верхнюю границу родительского элемента
  if (newTop < 0) newTop = 0;

  // Блок не должен выходить за левую границу родительского элемента
  if (newLeft < 0) newLeft = 0;

  // Применяем расчетные координаты к блоку
  cardElement.style.left = `${newLeft}px`;
  cardElement.style.top = `${newTop}px`;

};

const dragStart = (event, id) => {
  const cardElement = cardMove.value[id];

  if(!cardElement) return;
  // console.log(cardElement,  id);
  shiftX = event.clientX - cardElement.getBoundingClientRect().left;
  shiftY = event.clientY - cardElement.getBoundingClientRect().top;

  cardElement.style.position = 'absolute';
  cardElement.style.zIndex = '1000';
  // document.body.append(cardElement.value);
  const parentElement = cardElement.parentElement.parentElement; // Получаем родительский элемент родительского элемента

  parentElement.appendChild(cardElement);
  
  moveAt(event.pageX, event.pageY, cardElement);

  document.addEventListener('mousemove', (event) => onMouseMove(event, cardElement));

  
  cardElement.onmouseup = () => {
    document.removeEventListener('mousemove', onMouseMove);
    cardElement.value.onmouseup = null;
  };
};

const onMouseMove = (event, cardElement) => {
  moveAt(event.pageX, event.pageY, cardElement);
};


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
        :ref="el => { cardMove[item.id] = el }"
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
