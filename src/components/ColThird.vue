<script setup>
import { useModalQueryStore } from '@/stores/modalQueryStore'
import { useColSecRow2Store } from '@/stores/colSecRow2Store'

const ColSecRow2Store = useColSecRow2Store()

const modalQueryStore = useModalQueryStore()
</script>

<template>
  <div class="flex flex-col p-3 gap-3 justify-between" style="width: 220px">
    <div class="flex flex-col gap-3">
      <button
        @click="() => ColSecRow2Store.changeDialog()"
        class="mt-4 transition cursor-pointer bg-blue-500 w-full rounded-3xl py-3 uppercase text-xs font-bold text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
      >
        <template v-if="!ColSecRow2Store.dialog"> Показать общий экран </template>
        <template v-else> Выйти из общего экрана </template>
      </button>
      <button
        v-if="ColSecRow2Store.dialog"
        @click="yourFunctionHere"
        class="mt-4 transition cursor-pointer bg-blue-500 w-full rounded-3xl py-3 uppercase text-xs font-bold text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
      >
        Окно результатов
      </button>
    </div>
    <div class="flex flex-col gap-3">
      <button
        @click="() => modalQueryStore.openModal()"
        class="mt-4 transition cursor-pointer bg-blue-700 w-full rounded-xl py-3 uppercase text-white text-xs font-bold disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
      >
        Запрос</button
      ><router-link to="/adminBoard/consults" class="block"
        ><button
          class="mt-4 transition cursor-pointer bg-blue-700 w-full rounded-xl py-3 uppercase text-pretty text-white text-xs font-bold disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
          type="button"
        >
          Вернуться в личный кабинет
        </button>
      </router-link>
    </div>
  </div>
</template>
