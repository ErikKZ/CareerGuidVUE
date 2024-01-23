<script setup>
  import { onMounted, ref } from 'vue';

  import ColFirst from '@/components/ColFirst.vue';
  import ColSecondRow1 from '@/components/ColSecondRow1.vue';
  import ColSecondRow2 from '@/components/ColSecondRow2.vue';
  import ColThird from '@/components/ColThird.vue';

  const itemsYellow = ref([]);
  const fetchData = async() => {
    try {
      const response = await import('@/data_yellow.js');
      itemsYellow.value = response.default;
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  onMounted(async() => {
    await fetchData();
  })
</script>

<template>
  <div class="flex flex-row w-screen justify-center relative min-h-screen">
    <col-first/>
    <div class="grow flex flex-col" style="max-width: 1100px; min-width: 600px">
      <col-second-row-1/>  
      <col-second-row-2 :items="itemsYellow"/>    
    </div>
    <col-third/>
  </div>
  <!-- <router-view></router-view> -->
</template>

