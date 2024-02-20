<script setup>
import { ref, onMounted, computed } from 'vue'
import CardDown from './CardDown.vue'

// import { useDraggable as useDraggableCore } from '@vueuse/core'
import { UseDraggable } from '@vueuse/components'


import { useColStore } from '@/stores/colStore'
import { useColSecRow2Store } from '@/stores/colSecRow2Store'


const colStore = useColStore()
const colSecRow2Store = useColSecRow2Store()
const dragAndDropContainer = ref()

const widthCard = 150
const heightCard = 220
const draggingCardIndex = ref(null)
const cardOpacity = ref(1)


const dragStart = (uniqueId) => {
  draggingCardIndex.value = uniqueId
  cardOpacity.value = 0.5;
}

const dragEnd = (currentCardId) => {
  cardOpacity.value = 1;
  let maxZIndex = Math.max(...colStore.allselectedArray.map((card) => card.zIndex))

  let currentCard = colStore.allselectedArray.find((card) => card.id === currentCardId)
  if (currentCard) {
    currentCard.zIndex = maxZIndex + 1
  } else {
    console.error(`DragEnd:Card with ID ${currentCardId} not found in allselectedArray.`)
  }
}

const onDragUpdate = (position) => {
  const parentRef = dragAndDropContainer.value.getBoundingClientRect()

  if (position.x < parentRef.left || position.x > parentRef.right - widthCard) {
    position.x = Math.max(parentRef.left, Math.min(position.x, parentRef.right - widthCard))
  }

  if (position.y < parentRef.top || position.y > parentRef.bottom - heightCard) {
    position.y = Math.max(parentRef.top, Math.min(position.y, parentRef.bottom - heightCard))
  }
}

const onDblClickImg = (id, idType) => {
  colStore.removeCardSelected(id, idType)
}

const cardsRow1ToDisplay = computed(() => {
  const cards = colSecRow2Store.dialog ? colStore.allselectedArray : colStore.filteredTypeArray
  // console.log(colSecRow2Store.dialog, cards);
  return cards
})


onMounted(() => {
  // dragAndDropContainer.value = document.querySelector('.drag-n-drop-container')
  
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
  <template v-else>
    <template v-if="colSecRow2Store.dialog">
      <div ref="dragAndDropContainer" 
        class="w-full h-screen flex flex-wrap overflow-y-auto "
      >
        <UseDraggable
          v-for="(item, index) in colStore.allselectedArray"
          :key="index"
          :initial-value="{
            x: 400 + 160 * (index % 6),
            y: 8 + heightCard * Math.floor(index / 6) + 20 * Math.floor(index / 6)
          }"
          :prevent-default="true"
          :on-start="() => dragStart(index)"
          :on-end="() => dragEnd(item.id)"
          :class="{ fixed: true,  'overflow-y-auto': true }"
          :style="{ 
              zIndex: draggingCardIndex === index ? 9999 : item.zIndex ,
              opacity: cardOpacity  // Добавлено проразчонтси
          }"
          :on-move="onDragUpdate"
        >
          <card-down
            :id-type="item.idType"
            :title-txt="item.titleTxt"
            :type-title="item.typeTitle"
            @dblclick="() => onDblClickImg(item.id, item.idType)"
            class="cursor-move"
          />    
                <!-- I am at {{ index }}, {{ idType }},  {{ x }}, {{ y }}  -->
        </UseDraggable>
      </div>
    </template>
    <div
      v-else
      class="grow flex flex-wrap p-3 gap-3 justify-center items-center overflow-y-auto relative"
      style="max-height: calc(-240px - 16px + 100vh)"
    >
      <card-down
        v-for="item in cardsRow1ToDisplay"
        :key="item.id"
        :id-type="item.idType"
        :title-txt="item.titleTxt"
        :type-title="item.typeTitle"
        @dblclick="() => onDblClickImg(item.id, item.idType)"
      />
    </div>
  </template>
</template>

<!-- 
<style scoped>
.draggable-card {
  max-width: calc(100% - 160px); /* Максимальная ширина = 100% - 160px */
  max-height: calc(100% - 8px); /* Максимальная высота = 100% - 8px */
  overflow: auto; /* Добавить полосы прокрутки при необходимости */
}
</style> -->
