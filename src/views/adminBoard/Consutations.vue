<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import { useModalNewConsultStore } from '@/stores/modalNewConsultStore';
  
  import NewConsult from './NewConsult.vue';

  const modalNewConsultStore = useModalNewConsultStore();
</script>


<template>
  <div class="mx-4">
        <div id="modal-root"></div>
        <div class="flex pt-10 justify-between">
          <div class="flex gap-3">
            <button @click="() => modalNewConsultStore.openModal()"  class="primary-button">Новая консультация</button>
            <!-- <a href="/adminBoard/consultations/create"
              ><button  class="primary-button">Новая консультация</button>
              </a           > -->
            <div>
              <a href="/adminBoard/consultation/sandbox"
                ><button class="auxiliary-button">Тестовая консультация (для обучения)</button></a
              >
            </div>
          </div>
        </div>
        <div>
          <div class="text-lg text-center border-b border-gray-200 dark:border-gray-300 my-4">
            <ul class="flex flex-wrap -mb-px">
              <li class="mr-2">
                <a
                  class="inline-block p-3 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 rounded-lg bg-blue-100"
                  href="/adminBoard/consultations/status/planned"
                  >Запланированные</a
                >
              </li>
              <li class="mr-2">
                <a
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-500 hover:border-gray-300"
                  href="/adminBoard/consultations/status/passed"
                  >Прошедшие</a
                >
              </li>
              <li class="mr-2">
                <a
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-500 hover:border-gray-300"
                  href="/adminBoard/consultations/status/archive"
                  >Архив</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 mb-4">
          <NewConsult/>
          <div
            v-if="!modalNewConsultStore.isModalConsultOpen"
            class="col-span-4 text-lg py-4 px-6 mb-4 text-gray-700 rounded-lg bg-white shadow-lg shadow-gray-200"
            role="alert"
          >
            У вас нет запланированных консультаций
          </div>
        </div>
      </div>
</template>
