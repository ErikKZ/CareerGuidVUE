<script setup>
  defineProps({
    imageUrl: String,
    iconUrl: String,
    altTxt: String, 
    titleTxt: String, 
    typeTitle: String, 
    onClickImg: Function
  })
</script>

<template>
  <div class="relative min-w-150px group-[&:hover]:">
    <img
      :alt="altTxt"
      loading="lazy"
      decoding="async"
      data-nimg="1"
      class="cursor-pointer transition hover:-translate-y-1 the-card"
      srcset=""
      :src="imageUrl"
      @click="onClickImg"
    />
    <div class="w-full pointer-events-none absolute top-1 left-0  flex flex-col">
      <div class="flex mx-2 items-center mb-8">
        <img class="w-4 h-4 mr-2" :src="iconUrl" alt={{altText}} />
        <span class="text-black font-bold uppercase" style="font-size: 0.5rem">{{altTxt}}</span>
      </div>
      <div class="text-center ">
        <p class="text-black -mb-1 uppercase font-bold text-xs">{{titleTxt}}</p>
        <p class="whitespace-nowrap text-black font-bold text-xs">{{typeTitle}}</p>
      </div>
    </div>
  </div>
</template>