<script setup>
import { onMounted, ref, watch } from 'vue'

import ColFirst from '@/components/ColFirst.vue'
import ColSecondRow1 from '@/components/ColSecondRow1.vue'
import ColSecondRow2 from '@/components/ColSecondRow2.vue'
import ColThird from '@/components/ColThird.vue'

const itemsCard = []
const typeId = ref(1)
const filteredItems = ref([]);

const fetchData = async () => {
  try {
    const response = await import('@/EngDataCards.js');
    itemsCard.value = response.default;
    // Инициализируйте отфильтрованный массив
    filteredItems.value = itemsCard.value.filter(item => item.idType === 1);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
};

const handleTypeIdChange = (newTypeId) => {
  typeId.value = newTypeId;
  // Примените фильтрацию массива
  filteredItems.value = itemsCard.value.filter(item => item.idType === newTypeId);
};

onMounted(async () => {
  await  fetchData();
})
</script>

<template>
  <div class="flex flex-row w-screen justify-center relative min-h-screen">
    <col-first @typeIdChange="handleTypeIdChange"/>
    <div class="grow flex flex-col" style="max-width: 1100px; min-width: 600px">
      <col-second-row-1 />
      <col-second-row-2 :items="filteredItems"/>
    </div>
    <col-third />
  </div>
  <!-- <router-view></router-view> -->
</template>
