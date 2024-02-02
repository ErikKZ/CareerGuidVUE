<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import CardDown from './CardDown.vue';
import { useColStore } from '@/stores/colStore'

const colStore = useColStore();
const onDblClickImg = (id, idType) => {
  console.log('onDblClickImg:', id, idType);
};

let balls = ref({});
let shiftX = 0;
let shiftY = 0;

const moveAt = (event, id) => {
  const ball = balls.value[id];
  if (!ball) return;

  ball.style.left = `${event.pageX - shiftX}px`;
  ball.style.top = `${event.pageY - shiftY}px`;
  onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove);
  });
}

const dragStart = (id) => (event) => {
  
  const ball = balls.value[id];
  console.log('dragStart:', id, ball);

  if (!ball) return;

  shiftX = event.clientX - ball.getBoundingClientRect().left;
  shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = '1000';
  document.body.append(ball);
  moveAt(event, id);
  document.addEventListener('mousemove', onMouseMove);
  ball.onmouseup = () => {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };
}

const onMouseMove = (event) => {
  Object.keys(balls.value).forEach((id) => {
    moveAt(event, id);
  });
}

onMounted(() => {
  Object.values(balls.value).forEach((ball) => {
    if (!ball) return;
    ball.style.position = 'absolute';
  });
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
        @mousedown="($event) => { console.log('mousedown'); dragStart(item.id)($event) }"
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
