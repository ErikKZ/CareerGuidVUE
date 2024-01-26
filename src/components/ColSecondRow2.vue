<script setup>
import { defineProps,ref, computed, watchEffect } from 'vue';

import CardDown from './CardDown.vue';

defineProps({
  items: Array,
  // targetIdCard: Number
});

// const targetIdCard = ref(props.targetIdCard || 1);

// const filteredItems = computed(() => {
//   if (props.targetIdCard) {
//     return props.items.filter(item => item.idType === targetIdCard.value);
//   } else {
//     return props.items;
//   }
// });


// const onClickImg = () => {
//   targetIdCard.value = 1;
//   console.log(targetIdCard.value);
// }

// watchEffect(() => {
//   targetIdCard.value = props.targetIdCard ;
// });
</script>

<template>
  <div class="flex  bg-zinc-300 p-1 gap-3 overflow-x-scroll">
    <card-down
      v-for="item in items"
        :key="item.id"
        :altTxt="item.altTxt"
        :title-txt="item.titleTxt"
        :type-title="item.typeTitle"
        :on-click-img="onClickImg"
        image-url="Yellow.jpg"
        icon-url="/Icons/Heart.svg"
    />
  </div>
</template>
