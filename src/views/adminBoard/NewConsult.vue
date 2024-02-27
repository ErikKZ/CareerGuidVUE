<script setup>
import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue'
import { useModalNewConsultStore } from '@/stores/modalNewConsultStore'

// const modalNewConsultStore = useModalNewConsultStore();
const modalNewConsult = useModalNewConsultStore()

const date = ref('');
const time = ref('');
const firstName = ref('');
const lastName = ref('');
const city = ref('');
const contact = ref('');
const comment = ref('');

const saveToLocalStorage = (event) => {
  event.preventDefault();

  const token = uuidv4();
  // Создаем объект с данными формы
  const formData = {
    date: date.value,
    time: time.value,
    firstName: firstName.value,
    lastName: lastName.value,
    city: city.value,
    contact: contact.value,
    comment: comment.value,
    token: token,
  };

  // Получаем существующие данные из локального хранилища
  const existingData = JSON.parse(localStorage.getItem('appointments')) || [];

  // Добавляем новые данные в массив
  existingData.push(formData);

  // Сохраняем обновленные данные в локальное хранилище
  localStorage.setItem('appointments', JSON.stringify(existingData));

  // Закрываем модальное окно после сохранения данных
  modalNewConsult.closeModal();

  resetForm();
};

const resetForm = () => {
  date.value = '';
  time.value = '';
  firstName.value = '';
  lastName.value = '';
  city.value = '';
  contact.value = '';
  comment.value = '';
};

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
          v-model="date"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="time" class="block text-sm font-medium">Время</label>
        <input
          type="time"
          v-model="time"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="firstName" class="block text-sm font-medium">Имя</label>
        <input
          v-model="firstName"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="lastName" class="block text-sm font-medium">Фамилия</label>
        <input
          v-model="lastName"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="city" class="block text-sm font-medium">Город</label>
        <input v-model="city" class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label for="contact" class="block text-sm font-medium">Контакт</label>
        <input
          type="contact"
          v-model="contact"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label for="comment" class="block text-sm font-medium">Комментарий</label>
        <textarea
          v-model="comment"
          rows="3"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div class="flex justify-end space-x-4">
        <button
        @click="() => { resetForm(); modalNewConsult.closeModal();}"
          class="py-2 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Отмена
        </button>
        <button
          type="submit"
          @click="saveToLocalStorage"
          class="py-2 px-4 border bo
          
          rder-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Назначить
        </button>
      </div>
    </form>
  </div>
</template>
