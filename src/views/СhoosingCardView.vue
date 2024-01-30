<script setup>

import ColFirst from '@/components/ColFirst.vue'
import ColSecondRow1 from '@/components/ColSecondRow1.vue'
import ColSecondRow2 from '@/components/ColSecondRow2.vue'
import ColThird from '@/components/ColThird.vue'

</script>

<template>
  <div class="flex flex-row w-screen justify-center relative min-h-screen">
    <col-first />
    <div class="grow flex flex-col" style="max-width: 1100px; min-width: 600px">
      <col-second-row-1 />
      <col-second-row-2 />
    </div>
    <col-third />
  </div>
  <!-- <router-view></router-view> -->
</template>
