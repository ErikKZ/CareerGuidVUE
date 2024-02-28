<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Clipboard from 'clipboard'
import { useClipboard } from '@vueuse/core';

import { ref } from 'vue'
import ConsultationService from '@/services/ConsultationService'
import { useModalNewConsultStore } from '@/stores/modalNewConsultStore'

import NewConsult from './NewConsult.vue'

const copyToClipboard = (url) => {
    const { copy, copied } = useClipboard();
    copy(url);

    // Теперь 'copied' будет содержать информацию о том, скопирован ли токен.
  };

// const clipboard = new Clipboard('.text-blue-500')

// const copyToClipboard = (token) => {
//   const clipboard = new Clipboard('.text-blue-500')
//   // console.log(clipboard)
//   clipboard.on('success', (e) => {
//     e.clearSelection()
//     showNotification('Токен скопирован в буфер обмена!')
//   })

//   clipboard.on('error', () => {
//     showNotification('Не удалось скопировать токен в буфер обмена.')
//   })

//   clipboard.destroy()
// }

// const showNotification = (message) => {
//   // Реализуйте отображение уведомления, например, используя библиотеку для уведомлений
//   console.log(message)
// }

const modalNewConsultStore = useModalNewConsultStore()

const consultations = ref(ConsultationService.getConsultations())
const hasConsultations = ref(ConsultationService.hasConsultations())

// console.log(hasConsultations.value)
const updateConsultations = () => {
  consultations.value = ConsultationService.getConsultations()
  hasConsultations.value = ConsultationService.hasConsultations()
  console.log(consultations.value)
}

const generateConsultationUrl = (token) => {
  // Здесь вы можете формировать URL на основе токена
  return `https://example.com/consultation/${token}`
}
</script>

<template>
  <div class="mx-4">
    <div id="modal-root"></div>
    <div class="flex pt-10 justify-between">
      <div class="flex gap-3">
        <button @click="() => modalNewConsultStore.openModal()" class="primary-button">
          Новая консультация
        </button>
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
      <NewConsult @consultationSaved="updateConsultations" />
      <div
        v-if="!hasConsultations"
        class="col-span-4 text-lg py-4 px-6 mb-4 text-gray-700 rounded-lg bg-white shadow-lg shadow-gray-200"
        role="alert"
      >
        У вас нет запланированных консультаций
      </div>
      <table class="min-w-full border divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Дата
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Время
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Имя
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Фамилия
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Город
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Контакт
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Комментарий
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Ссылка
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="consultation in consultations"
            :key="consultation.token"
            class="hover:bg-gray-100 border-b"
          >
            <td class="px-6 py-4 whitespace-nowrap">{{ consultation.date }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ consultation.time }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ consultation.firstName }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ consultation.lastName }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ consultation.city }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ consultation.contact }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ consultation.comment }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <a
                :href="generateConsultationUrl(consultation.token)"
                class="text-blue-500 underline"
                @click.prevent="copyToClipboard(generateConsultationUrl(consultation.token))"
              >
                {{ consultation.token }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
