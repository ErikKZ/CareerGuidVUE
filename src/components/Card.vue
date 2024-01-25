<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  defineProps({
    imageUrl: String,
    iconUrl: String,
    onClickImg: Function
  })
</script>
<!-- min-w-150px -->
<template>
  <div class="relative  w-150 overflow-hidden group-[&:hover]: ">    
    <img
      alt="Интересы онлайн"
      loading="lazy"
      decoding="async"
      data-nimg="1"
      class="cursor-pointer transition hover:-translate-y-1 the-card"
      srcset=""
      :src="imageUrl"
      @click="onClickImg"
    />
    <div class="pointer-events-none absolute inset-1/4 text-center flex flex-col items-center">
      <h1 class="text-black uppercase font-bold text-xl">Само</h1>
      <h1 class="text-black uppercase font-bold text-xl">реализация</h1>
      <p class="mb-2 whitespace-nowrap text-black font-bold text-xs">Способности|навыки</p>
      <img class="ml-auto w-10 h-10" :src="iconUrl" alt="Heart" />
    </div>
  </div>
</template>

