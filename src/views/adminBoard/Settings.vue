<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

const fileInputRef = ref(null)
const imgSrc = ref('')

function handleClick() {
  fileInputRef.value.click()
}

function handleFileUpload(event) {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()

    reader.onload = (e) => {
      imgSrc.value = e.target.result
    }

    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <div class="grid grid-cols-3 my-9">
    <div class="col-span-2">
      <div class="grid grid-cols-3 gap-3 bg-white p-5 rounded-xl shadow-lg">
        <div class="text-xl font-bold mb-10 grow text-center col-span-3">Настройки кабинета</div>
        <div class="pr-2 pb-4  col-span-1">
          <div class="w-48 h-64 rounded-xl flex items-center justify-center bg-gray-300 relative">
            <input
              ref="fileInputRef"
              accept="image/*"
              multiple
              type="file"
              style="display: none"
              @change="handleFileUpload"
            />
            <img
              v-if="imgSrc"
              :src="imgSrc"
              alt="Загруженное изображение"
              class="object-cover w-full h-full rounded-xl"
            />
            <div
              class="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-xl bg-black bg-opacity-50 transition-opacity hover:opacity-100 opacity-0"
            >
              <button @click="handleClick" class="text-white">Загрузить новую фотографию</button>
            </div>
          </div>
        </div>
        <form class="col-span-2">
          <div class="flex flex-col mb-4">
            <span class="font-bold mb-2 ml-0.5">Имя Фамилия</span
            ><input class="rounded-xl border-2 p-3" type="text" value="" name="name" />
          </div>
          <div class="flex flex-col mb-4">
            <span class="font-bold mb-2 ml-0.5">Специализация</span
            ><input class="rounded-xl border-2 p-3" type="text" value="" name="specialization" />
          </div>
          <div class="flex flex-col mb-4">
            <span class="font-bold mb-2 ml-0.5">Почта</span
            ><input class="rounded-xl border-2 p-3" type="email" value="" name="email" />
          </div>
          <div class="flex flex-col mb-4">
            <span class="font-bold mb-2 ml-0.5">Телефон</span
            ><input class="rounded-xl border-2 p-3" type="text" value="" name="phone" />
          </div>
        </form>
        <div class="col-span-3 text-center mt-8">
          <button class="primary-button" type="submit">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>
