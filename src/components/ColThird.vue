<template>
  <div class="flex flex-col p-3 gap-3 justify-between" style="width: 220px">
      <div class="flex flex-col gap-3">
        <button
          class="mt-4 transition cursor-pointer bg-blue-500 w-full rounded-3xl py-3 uppercase text-xs font-bold text-white  disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
        >
          Показать общий экран
        </button>
      </div>
      <div class="flex flex-col gap-3">
        <button
          class="mt-4 transition cursor-pointer bg-blue-700 w-full rounded-xl py-3 uppercase text-white text-xs font-bold disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
        >
          Запрос</button
        ><a class="block" href="/dashboard"

        
          ><button
            class="mt-4 transition cursor-pointer bg-blue-700 w-full rounded-xl py-3 uppercase text-pretty text-white text-xs font-bold disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
            type="button"
          >
            Вернуться в личный кабинет
          </button></a
        >
      </div>
    </div>
</template>