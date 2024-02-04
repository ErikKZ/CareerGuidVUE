<script setup>
import { useModalNewConsultStore } from '@/stores/modalNewConsultStore'

// const modalNewConsultStore = useModalNewConsultStore();
const modalNewConsult = useModalNewConsultStore()


</script>

<template>
  <div
    v-if="modalNewConsult.isModalConsultOpen"
    class="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
  >
    <form class="space-y-6 bg-white p-6 rounded-lg w-1/6 md:w-1/4">
      <h2 class="text-lg text-center font-bold">Новая консультация</h2>
      <div>
        <label for="date" class="block text-sm font-medium">Дата</label>
        <input
          type="date"
          id="date"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="time" class="block text-sm font-medium">Время</label>
        <input
          type="time"
          id="time"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="firstName" class="block text-sm font-medium">Имя</label>
        <input
          id="firstName"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="lastName" class="block text-sm font-medium">Фамилия</label>
        <input
          id="lastName"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="city" class="block text-sm font-medium">Город</label>
        <input id="city" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label for="contact" class="block text-sm font-medium">Контакт</label>
        <input
          type="contact"
          id="contact"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="comment" class="block text-sm font-medium">Комментарий</label>
        <textarea
          id="comment"
          rows="3"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div class="flex justify-end space-x-4">
        <button
          @click="() => modalNewConsult.closeModal()"
          class="py-2 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Отмена
        </button>
        <button
          type="submit"
          class="py-2 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Назначить
        </button>
      </div>
    </form>
  </div>
</template>
