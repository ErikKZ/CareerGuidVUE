<script setup>
import { ref, onMounted, watchEffect, computed } from 'vue'
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
const draggingCardIndex = ref(null);

const cardsPerRow = computed(() => {
  return Math.floor(dragAndDropContainer.value / widthCard)
})

const dragStart = (uniqueId) => {
  draggingCardIndex.value = uniqueId;
};

const dragEnd = (currentCardId) => {
  let maxZIndex = Math.max(...colStore.allselectedArray.map(card => card.zIndex));
  
  let currentCard = colStore.allselectedArray.find(card => card.id === currentCardId);
  if (currentCard) {
      currentCard.zIndex = maxZIndex + 1;
  }
  else {
    console.error(`DragEnd:Card with ID ${currentCardId} not found in allselectedArray.`);
  }
};

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

const allIdTypes = ref([1, 2, 3]) // Here we directly set the possible types

const groupedCards = computed(() => {
  let groups = allIdTypes.value.reduce((acc, id) => ({ ...acc, [id]: [] }), {})
  // console.log('all', colStore.allselectedArray)
  for (const item of colStore.allselectedArray) {
    groups[item.idType].push(item)
  }
  // console.log(groups)
  return groups
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
      <div ref="dragAndDropContainer" class="w-full h-full flex flex-wrap">
        <div
          v-for="idType in Object.keys(groupedCards)"
          :key="idType"
          class="flex gap-3 flex-wrap content-start"
          style="min-height: auto"
        >
          <UseDraggable
            v-for="(item, index) in groupedCards[idType]"
              :key="index"
              v-slot="{ x, y }"
              :initial-value="{
                x: 400 + 160 * (index % 6),
                y: 8 + heightCard * Math.floor(index / 6) ,
              }"
              :prevent-default="true"
              :on-start="() => dragStart(`${idType}-${index}`)"
              :on-end="() => dragEnd(item.id)"
              :class="{ 'fixed': true }"
              :style="{ zIndex: draggingCardIndex ===  `${idType}-${index}` ? 9999 : item.zIndex }"
              :on-move="onDragUpdate"
          >
            <card-down
              :id-type="item.idType"
              :title-txt="item.titleTxt"
              :type-title="item.typeTitle"
              @dblclick="() => onDblClickImg(item.id, item.idType)"
              class="cursor-move"
            />
            <!-- I am at {{ draggingCardIndex }}, {{ Math.floor(index / 6) }}, {{ Math.round(x) }}, {{ Math.round(y) }}, z-index: {{ draggingCardIndex === `${idType}-${index}` ? 100 : 10 }} -->
            I am at {{ index }}, {{ idType }},  {{ x }}, {{ y }}
          </UseDraggable>
        </div>
      </div>
    </template>
    <div
      v-else
      class="grow flex flex-wrap p-3 gap-3 justify-center items-center overflow-y-scroll relative"
      style="max-height: calc(-240px + 100vh)"
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

<style scoped>
.draggable-card {
  max-width: calc(100% - 160px); /* Максимальная ширина = 100% - 160px */
  max-height: calc(100% - 8px); /* Максимальная высота = 100% - 8px */
  overflow: auto; /* Добавить полосы прокрутки при необходимости */
}
</style>
