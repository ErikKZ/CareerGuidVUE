<script setup>
  import { ref } from 'vue';
  const selectedImage = ref('/Image/Yellow/1.jpg');

</script>

<template>
  <div class="flex flex-row w-screen justify-center relative min-h-screen">
    <div class="flex flex-col p-3 gap-3 h-screen sticky top-0" style="width: 174px">
      <div class="min-width:150px">
        <img
          alt="Интересы онлайн"
          loading="lazy"
          width="150"
          height="220"
          decoding="async"
          data-nimg="1"
          class="cursor-pointer the-card"
          srcset=""
          src="/1col.jpg"

        />
      </div>
      <div class="min-width:150px">
        <img
          alt="Способности"
          loading="lazy"
          width="150"
          height="220"
          decoding="async"
          data-nimg="1"
          class="cursor-pointer the-card"
          srcset=""
          src="/2col.jpg"
        />
      </div>
      <div class="min-width:150px">
        <img
          alt="Мотивация"
          loading="lazy"
          width="150"
          height="220"
          decoding="async"
          data-nimg="1"
          class="cursor-pointer the-card"
          srcset=""
          src="/3col.jpg"
        />
      </div>
    </div>
    <div class="grow flex flex-col" style="max-width: 1100px; min-width: 600px">
      <div class="grow text-lg text-center flex flex-row justify-center items-center bg-stone-200" >
        Выберите карты из колоды<br/>▼
      </div>
      <div class="flex bg-zinc-300 p-2 gap-2 overflow-x-scroll">
        <div style="min-width: 150px ">
          <img
            alt=""
            loading="lazy"
            width="150"
            height="220"
            decoding="async"
            data-nimg="1"
            class="cursor-pointer the-card"
            srcset=""
            src="/Image/Yellow/1.jpg"
          />
        </div>
        <div style="min-width: 150px">
          <img
            alt=""
            loading="lazy"
            width="150"
            height="220"
            decoding="async"
            data-nimg="1"
            class="cursor-pointer the-card"
            srcset=""
            src="/Image/Yellow/2.jpg"
          />
        </div>
        <div style="min-width: 150px">
          <img
            alt=""
            loading="lazy"
            width="150"
            height="220"
            decoding="async"
            data-nimg="1"
            class="cursor-pointer the-card"
            srcset=""
            src="/Image/Yellow/3.jpg"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col p-3 gap-3 justify-between" style="width: 220px">
      <div class="flex flex-col gap-3">
        <button
          class="mt-4 transition cursor-pointer bg-blue-500 w-full rounded-3xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
        >
          Показать общий экран
        </button>
      </div>
      <div class="flex flex-col gap-3">
        <button
          class="mt-4 transition cursor-pointer bg-blue-700 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
        >
          Запрос</button
        ><a class="block" href="/dashboard"
          ><button
            class="mt-4 transition cursor-pointer bg-blue-700 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700"
            type="button"
          >
            Вернуться в личный кабинет
          </button></a
        >
      </div>
    </div>
  </div>
  <!-- <router-view></router-view> -->
</template>
