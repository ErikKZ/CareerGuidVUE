<script setup>
import { ref, onMounted, computed } from 'vue'
import CardDown from './CardDown.vue'

import { useDraggable } from '@vueuse/core'
import { UseDraggable } from '@vueuse/components'

import { useColStore } from '@/stores/colStore'
import { useColSecRow2Store } from '@/stores/colSecRow2Store'

const colStore = useColStore()
const colSecRow2Store = useColSecRow2Store()
const dragAndDropContainer = ref()

const widthCard = 150
const heightCard = 220

const x = ref(0)
const y = ref(0)


const onDragUpdate = (position, event) => {
  const parentRef = dragAndDropContainer.value.getBoundingClientRect()
  console.log('Parent', parentRef)

  if (position.x < parentRef.left || position.x > parentRef.right - widthCard) {
    position.x = Math.max(parentRef.left, Math.min(position.x, parentRef.right - widthCard));
  }

  if (position.y < parentRef.top || position.y > parentRef.bottom - heightCard) {
    position.y = Math.max(parentRef.top, Math.min(position.y, parentRef.bottom - heightCard));
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
      <div class="w-full h-full" ref="dragAndDropContainer">
        <div
          v-for="idType in Object.keys(groupedCards)"
          :key="idType"
          class="flex gap-3 flex-wrap content-start"
          style="min-height: auto"
        >
          <div
            v-for="(item, index) in groupedCards[idType]"
            :key="index"
          >
            <UseDraggable
              v-slot="{ x, y }"
              :initial-value="{ x: 400 + 200 * index, y: 8 }"
              :prevent-default="true"
              :on-move="onDragUpdate"
              class="fixed z-124"
            >
              <card-down
                :id-type="item.idType"
                :title-txt="item.titleTxt"
                :type-title="item.typeTitle"
                @dblclick="() => onDblClickImg(item.id, item.idType)"
                class="cursor-move"
              />
              I am at {{ Math.round(x) }}, {{ Math.round(y) }}
            </UseDraggable>
          </div>
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
