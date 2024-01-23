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
    <div class="pointer-events-none absolute  flex flex-col">
      <img class="top-0 left-0  w-8 h-8" :src="iconUrl" alt="Heart" />
      <s class="text-black uppercase text-xl">{{altTxt}}</s>
      <h1 class="text-black uppercase font-bold text-xl">{{titleTxt}}</h1>
      <p class="mb-2 whitespace-nowrap text-black font-bold text-xs">{{typeTitle}}</p>
      
    </div>
  </div>
</template>