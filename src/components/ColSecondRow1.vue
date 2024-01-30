<script setup>
import { useColStore } from '@/stores/colStore'
import CardDown from './CardDown.vue';

const colStore = useColStore()

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
      class="grow flex flex-wrap p-3 gap-3 justify-center items-center overflow-y-scroll relative"
      style="max-height: calc(100vh - 240px)"
    >
      <div class="relative" style="opacity: 1" draggable="true" data-handler-id="T8">
        <card-down
          v-for="item in colStore.allselectedArray"
          :key="item.id"
          :id-type="item.idType"
          :title-txt="item.titleTxt"
          :type-title="item.typeTitle"
          :on-click-img="() => onClickImg(item.id)"
        />
      </div>
    </div>
  </div>
</template>
