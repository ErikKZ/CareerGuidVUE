<script setup>
import CardDown from './CardDown.vue'
import { ref, onMounted } from 'vue'
import { UseDraggable } from '@vueuse/components'

import { useColStore } from '@/stores/colStore'

const colStore = useColStore()
const dragAndDropContainer = ref()

const onDblClickImg = (id, idType) => {
  colStore.removeCardSelected(id, idType)
}

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
  const firstRowRect = dragAndDropContainer.value.getBoundingClientRect()
  const imageElement = dragAndDropContainer.value.querySelector('img') 
  const imageRect = imageElement.getBoundingClientRect()
  
  console.log(coord.x, coord.y, firstRowRect.left, firstRowRect, imageRect.height)
  if (coord.x < firstRowRect.left) {
    coord.x = firstRowRect.left
    event.preventDefault()
  } else if (coord.x > firstRowRect.right - imageRect.width) {
    coord.x = firstRowRect.right - imageRect.width
    event.preventDefault()
  }

  if (coord.y < 0) {
    coord.y = 0
    event.preventDefault()
  } else if (coord.y > firstRowRect.bottom) {
    coord.y = firstRowRect.bottom
    event.preventDefault()
  }
}

onMounted(() => {
  dragAndDropContainer.value = document.querySelector('.drag-n-drop-container')
})
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
      ref="dragAndDropContainer"
      class="drag-n-drop-container grow flex flex-wrap p-3 gap-3 justify-center items-center overflow-y-auto relative"
      style="max-height: calc(100vh - 240px)"
    >
      <UseDraggable
        :container-element="dragAndDropContainer"
        v-for="item in colStore.filteredTypeArray"
        :key="item.id"
        :exact="false"
        :on-move="(x, event) => onDragUpdate(x, event)"
        @dblclick="() => onDblClickImg(item.id, item.idType)"
        style="opacity: 1; position: fixed; "
      >
        <card-down
          :id-type="item.idType"
          :title-txt="item.titleTxt"
          :type-title="item.typeTitle"
          
        />
      </UseDraggable>
    </div>
  </div>
</template>
