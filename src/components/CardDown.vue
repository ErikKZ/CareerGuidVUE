<script setup>
import { computed } from 'vue'

const props = defineProps(['onClickImg', 'onDblClickImg', 'idType', 'titleTxt', 'typeTitle'])

const imgUrl = computed(() => {
  switch (props.idType) {
    case 1:
      return 'Yellow.jpg'
    case 2:
      return 'Turquoise.jpg'
    case 3:
      return 'Red.jpg'
    default:
      return 'Yellow.jpg'
  }
})
const iconUrl = computed(() => {
  switch (props.idType) {
    case 1:
      return '/Icons/Heart.svg'
    case 2:
      return '/Icons/Star.svg'
    case 3:
      return '/Icons/Diamond.svg'
    default:
      return '/Icons/Star.svg'
  }
})
const altText = computed(() => {
  switch (props.idType) {
    case 1:
      return 'интересы|увлечения'
    case 2:
      return 'способности|навыки'
    case 3:
      return 'условия|мотивиция'
    default:
      return 'неизвестно'
  }
})
</script>

<template>
  <div class="relative" style="opacity: 1" draggable="true" data-handler-id="T4">
    <div style="min-width: 150px">
      <img
        :alt="altText"
        loading="lazy"
        width="150"
        height="220"
        decoding="async"
        data-nimg="1"
        class="the-card"
        :src="imgUrl"
        style="color: transparent"
        @click="onClickImg"
      />
      <div class="w-full absolute top-1 left-0 flex flex-col">
        <div class="flex mx-2 items-center mb-8">
          <img class="w-4 h-4 mr-2" :src="iconUrl" :alt="altText" />
          <span class="text-black font-bold uppercase" style="font-size: 0.5rem">{{
            altText
          }}</span>
        </div>
        <div class="text-center">
          <p class="text-black -mb-1 uppercase font-bold text-xs">{{ titleTxt }}</p>
          <p class="whitespace-nowrap text-black font-bold text-xs">{{ typeTitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <template>
  <div class="relative min-w-150px group-[&:hover]:">
    <img
      :alt="altText"
      loading="lazy"
      decoding="async"
      data-nimg="1"
      class="cursor-pointer transition hover:-translate-y-1 the-card"
      srcset=""
      :src="imgUrl"
      style="user-drag: none; user-select: none;"
      @click="onClickImg"
    />
    <div class="w-full pointer-events-none absolute top-1 left-0  flex flex-col">
      <div class="flex mx-2 items-center mb-8">
        <img class="w-4 h-4 mr-2" :src="iconUrl" :alt="altText" />
        <span class="text-black font-bold uppercase" style="font-size: 0.5rem">{{altText}}</span>
      </div>
      <div class="text-center ">
        <p class="text-black -mb-1 uppercase font-bold text-xs">{{titleTxt}}</p>
        <p class="whitespace-nowrap text-black font-bold text-xs">{{typeTitle}}</p>
      </div>
    </div>
  </div>
</template> -->
