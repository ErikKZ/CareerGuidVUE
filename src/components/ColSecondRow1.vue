<script setup>
import { ref, onMounted, computed } from 'vue'
import CardDown from './CardDown.vue'

import { UseDraggable } from '@vueuse/components'

import { useColStore } from '@/stores/colStore'
import { useColSecRow2Store } from '@/stores/colSecRow2Store'

const colStore = useColStore()
const colSecRow2Store = useColSecRow2Store()
const dragAndDropContainer = ref()

const onDblClickImg = (id, idType) => {
  colStore.removeCardSelected(id, idType)
}

const cardsRow1ToDisplay = computed(() => {
  const cards = colSecRow2Store.dialog ? colStore.allselectedArray : colStore.filteredTypeArray
  // console.log(colSecRow2Store.dialog, cards);
  return cards
})

const restrictMovement = (x, y, item, container) => {
  // Получаем прямоугольник, описывающий границы контейнера
  const containerRect = container.getBoundingClientRect()
  console.log(x, y)
  // Устанавливаем границы прямоугольника
  const leftBoundary = containerRect.left
  const rightBoundary = containerRect.right
  const topBoundary = containerRect.top
  const bottomBoundary = containerRect.bottom

  // Если элемент выходит за пределы этих границ, мы перемещаем его обратно
  if (item.x < leftBoundary) {
    item.x = leftBoundary
  } else if (item.x + item.width > rightBoundary) {
    item.x = rightBoundary - item.width
  }

  if (item.y < topBoundary) {
    item.y = topBoundary
  } else if (item.y + item.height > bottomBoundary) {
    item.y = bottomBoundary - item.height
  }
}

const onDragUpdate = (coord, event) => {
  // const firstRowRect = dragAndDropContainer.value.getBoundingClientRect()
  const imageElement = dragAndDropContainer.value.querySelector('img')
  const imageRect = imageElement.getBoundingClientRect()

  const parentElement = dragAndDropContainer.value;

    // Получить геометрические характеристики родительского элемента
  const firstRowRect = parentElement.getBoundingClientRect();

  console.log(firstRowRect)
  // console.log(coord.x, coord.y, firstRowRect.left, firstRowRect, imageRect.height)
  // if (coord.x < firstRowRect.left) {
  //   coord.x = firstRowRect.left
  //   event.preventDefault()
  // } 
  // else if (coord.x > firstRowRect.right - imageRect.width) {
  //   coord.x = firstRowRect.right - imageRect.width
  //   event.preventDefault()
  // }

  // if (coord.y < 0) {
  //   coord.y = 0
  //   event.preventDefault()
  // } else if (coord.y > firstRowRect.bottom) {
  //   coord.y = firstRowRect.bottom
  //   event.preventDefault()
  // }
}

onMounted(() => {
  dragAndDropContainer.value = document.querySelector('.drag-n-drop-container')
})
</script>

<template>
  <div
    v-if="colStore.filteredTypeArray.length === 0 && !colSecRow2Store.dialog"
      class="grow text-lg flex flex-col items-center justify-center"
      style="background-color: #dadada"
  >
    Выберите карты из колоды
    <div>▼</div>
  </div>
  <div
    v-else
    ref="dragAndDropContainer"
    :class="{
      'grow flex flex-wrap p-3 gap-3 justify-center items-center overflow-y-scroll relative':
        !colSecRow2Store.dialog,
      'flex gap-3 flex-wrap content-start min-h-0': 
        colSecRow2Store.dialog
    }"
    style="background-color: rgb(218, 218, 218); max-height: calc(-240px + 100vh)"
  >
  <template v-if="colSecRow2Store.dialog">
    <UseDraggable
      :container-element="dragAndDropContainer"
      v-for="item in cardsRow1ToDisplay"
      :key="item.id"
      :exact="false"
      :on-move="(x, event) => onDragUpdate(x, event)"
      style="position: absolute;"
    >
      <card-down
        :id-type="item.idType"
        :title-txt="item.titleTxt"
        :type-title="item.typeTitle"
      />
    </UseDraggable>
  </template>
  <template v-else>
    <card-down
      v-for="item in cardsRow1ToDisplay"
        :key="item.id"
        :id-type="item.idType"
        :title-txt="item.titleTxt"
        :type-title="item.typeTitle"
        :exact="false"
        @dblclick="() => onDblClickImg(item.id, item.idType)"
        :on-move="(x, event) => onDragUpdate(x, event)"
    />
  </template>
  </div>
</template>


<!-- :style="draggableStyle" -->
<!-- <template>
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
      ref="dragAndDropContainer"
      class="drag-n-drop-container grow flex flex-wrap p-3 gap-3 justify-center items-center overflow-y-auto relative"
      style="max-height: calc(100vh - 240px)"
    >
      <UseDraggable
        :container-element="dragAndDropContainer"
        v-for="item in cardsRow1ToDisplay"   
        :key="item.id"
        :exact="false"
        :on-move="(x, event) => onDragUpdate(x, event)"
        @dblclick="() => onDblClickImg(item.id, item.idType)"
        :style="draggableStyle"
      >
        <card-down
          :id-type="item.idType"
          :title-txt="item.titleTxt"
          :type-title="item.typeTitle"
          
        />
      </UseDraggable>
    </div>
  </div>
</template> -->

<!-- // const draggableStyle = computed(() => {
  //   return {
  //     position: colSecRow2Store.dialog ? 'relative' : 'relative'
  //   }
  // }) -->