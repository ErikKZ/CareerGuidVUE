<script setup>
import { useColSecRow2Store } from '@/stores/colSecRow2Store';
import ColFirst from '@/components/ColFirst.vue'
import ColSecondRow1 from '@/components/ColSecondRow1.vue'
import ColSecondRow2 from '@/components/ColSecondRow2.vue'
import ColThird from '@/components/ColThird.vue'
import QueryConsult from '@/components/QueryConsult.vue'
// import { computed } from 'vue';

const colSecRow2Store = useColSecRow2Store();

</script>

<template>
  <div 
    class="flex flex-row w-screen justify-center relative min-h-screen">
    <QueryConsult />
    <col-first />
    <div 
      :class="{
        'grow flex flex-col justify-between  max-w-screen-xl min-w-[600px]':
          !colSecRow2Store.dialog,
        'grow flex flex-col px-2 py-2 gap-3 relative': 
          colSecRow2Store.dialog
      }"
      style="max-width: 1100px; min-width: 600px; background-color: rgb(218, 218, 218);"
      >
      <col-second-row-1 />
      <template v-if="!colSecRow2Store.dialog">
        <col-second-row-2 />
      </template>
    </div>
    <col-third />
  </div>
  <!-- <router-view></router-view> -->
</template>
