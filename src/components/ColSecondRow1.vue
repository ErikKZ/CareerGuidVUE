<script setup>
import { useColStore } from '@/stores/colStore'

const colStore = useColStore()
</script>

<template>
  <div class="grow text-lg text-center flex flex-row justify-center items-center bg-stone-200">
    <div
      v-if="colStore.cards.length === 0"
      class="grow text-lg text-center flex flex-row justify-center items-center bg-stone-200"
    >
      Выберите карты из колоды
      <br />▼
    </div>
    <div v-else
      class="grow flex flex-wrap p-3 gap-3 justify-center items-center overflow-y-scroll relative"
      style="max-height: calc(100vh - 240px)"
    >
      <div class="relative" style="opacity: 1" draggable="true" data-handler-id="T8">
        <div style="min-width: 150px">
          <img
            alt=""
            loading="lazy"
            width="150"
            height="220"
            decoding="async"
            data-nimg="1"
            class="cursor-pointer the-card"
            src="/1col.jpg"
            style="color: transparent"
          />
        </div>
      </div>
    </div>
  </div>
</template>
