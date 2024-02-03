<script setup>
  const props = defineProps(['onClickImg', 'onDblClickImg', 'idType', 'titleTxt', 'typeTitle']);
  
const getImageUrl = () => {
  switch (props.idType) {
    case 1:
      return 'Yellow.jpg';
    case 2:
      return 'Turquoise.jpg';
    case 3:
      return 'Red.jpg';
    default:
      return 'Yellow.jpg';
  }
};

const getIconUrl = () => {
  switch (props.idType) {
    case 1:
      return '/Icons/Heart.svg';
    case 2:
      return '/Icons/Star.svg';
    case 3:
      return '/Icons/Diamond.svg';
    default:
      return '/Icons/Star.svg';
  }
};

const getAltText = () => {
  switch (props.idType) {
    case 1:
      return 'интересы|увлечения';
    case 2:
      return 'способности|навыки';
    case 3:
      return 'условия|мотивиция';
    default:
      return 'неизвестно';
  }
};
  // defineProps({
  //   imageUrl: String,
  //   iconUrl: String,
  //   altTxt: String, 
  //   titleTxt: String, 
  //   typeTitle: String, 
  //   onClickImg: Function
  // })
</script>

<template>
  <div class="relative min-w-150px group-[&:hover]:">
    <img
      :alt=getAltText()
      loading="lazy"
      decoding="async"
      data-nimg="1"
      class="cursor-pointer transition hover:-translate-y-1 the-card"
      srcset=""
      :src="getImageUrl()"
      @click="onClickImg"
    />
    <div class="w-full pointer-events-none absolute top-1 left-0  flex flex-col">
      <div class="flex mx-2 items-center mb-8">
        <img class="w-4 h-4 mr-2" :src="getIconUrl()" alt={{getAltText()}} />
        <span class="text-black font-bold uppercase" style="font-size: 0.5rem">{{getAltText()}}</span>
      </div>
      <div class="text-center ">
        <p class="text-black -mb-1 uppercase font-bold text-xs">{{titleTxt}}</p>
        <p class="whitespace-nowrap text-black font-bold text-xs">{{typeTitle}}</p>
      </div>
    </div>
  </div>
</template>