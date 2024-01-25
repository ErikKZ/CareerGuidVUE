<script setup>
import { ref } from 'vue'
import Card from './Card.vue'
// import CardDownVue  from './CardDown.vue';
// const showCardDown = ref(false);

const onClickImg = () => {
  targetIdCard.value = 1
  console.log(targetIdCard.value)
}
</script>

<template>
  <div class="flex flex-col p-3 gap-3 h-screen sticky top-0" style="width: 174px">
    <Card :on-click-img="onClickImg" image-url="1col.jpg" icon-url="/Icons/Heart.svg" />
    <Card image-url="2col.jpg" icon-url="/Icons/Star.svg" />
    <Card image-url="3col.jpg" icon-url="/Icons/Diamond.svg" />
  </div>
</template>
