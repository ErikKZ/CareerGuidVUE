<script setup>
import { ref } from 'vue';
import { useModalQueryStore } from '@/stores/modalQueryStore';

const modalQueryStore = useModalQueryStore();
const textArea = ref(null);

console.log(modalQueryStore.isModalResultOpen)

const steps = ref([
  { title: '', deadline: '', criteria: '', help: '' },
]);

let activeStep = ref(0);

const addStep = () => {
  steps.value.push({ title: '', deadline: '', criteria: '', help: '' });
  activeStep.value = steps.value.length - 1;
};

const saveToLocalStorage = () => {
  const stepsData = steps.value.map(step => ({
    title: step.title,
    deadline: step.deadline,
    criteria: step.criteria,
    help: step.help,
  }));
  localStorage.setItem('savedQuerySteps', JSON.stringify(stepsData));
  modalQueryStore.closeModalResult();
};
</script>

<template>
  <div v-if="modalQueryStore.isModalResultOpen" class="fixed w-full h-full bg-black/70 top-0 left-0 flex justify-center items-center" style="z-index: 9900">
    <div class="p-6 bg-gray-100 border-2 rounded-xl shadow-lg flex flex-col relative w-1/3">
      <div class="font-bold text-xl mb-6">План действий по итогам консультации</div>

      <!-- Вкладки -->
      <div class="flex mb-4">
        <div v-for="(step, index) in steps" :key="index" class="mr-2 cursor-pointer" @click="activeStep = index">
          <div :class="{ 'bg-blue-500 text-white': activeStep === index }" class="px-4 py-2 rounded">
            Шаг {{ index + 1 }}
          </div>
        </div>
        <button @click="addStep" class="ml-auto bg-green-500 text-white px-4 py-2 rounded cursor-pointer">Добавить шаг</button>
      </div>

      <!-- Форма для каждого шага -->
      <form>
        <div v-for="(step, index) in steps" :key="index" v-show="activeStep === index">
          <label class="block mb-2">Шаг {{ index + 1 }}</label>
          <input v-model="step.title" type="text" placeholder="Шаг" class="w-full h-16 border p-2 mb-4">

          <label class="block mb-2">Сроки</label>
          <input v-model="step.deadline" type="text" placeholder="Сроки" class="w-full border p-2 mb-4">

          <label class="block mb-2">Критерии реализации</label>
          <textarea v-model="step.criteria" placeholder="Критерии реализации" class="w-full h-32 border p-2 mb-4"></textarea>

          <label class="block mb-2">Помощь в реализации шага</label>
          <textarea v-model="step.help" placeholder="Помощь в реализации шага" style="max-height: 350px;" class="w-full h-32 border p-2 mb-4 overflow-y-auto"></textarea>
        </div>
      </form>

      <!-- Кнопка сохранения -->
      <button @click="saveToLocalStorage" class="mt-4 w-40 transition cursor-pointer bg-blue-500 rounded-3xl py-3 uppercase text-xs font-bold text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700">Сохранить</button>

      <!-- Кнопка закрытия модального окна -->
      <div @click="() => modalQueryStore.closeModalResult()" class="absolute right-4 top-4 text-2xl text-gray-500 cursor-pointer hover:text-red-500">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
          <path fill="black" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
        </svg>
      </div>
    </div>
  </div>
</template>


