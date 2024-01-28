<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="grid grid-cols-3 my-9">
    <div class="col-span-2">
      <div class="grid grid-cols-3 gap-3 bg-white p-5 rounded-xl shadow-lg">
        <div class="text-xl font-bold mb-10 grow text-center col-span-3">Настройки кабинета</div>
        <div class="pr-4 pb-4 col-span-1">
          <div class="w-full h-full rounded-xl flex items-center justify-center bg-gray-300">
            <input accept="image/*" multiple type="file" style="display: none" />
            <div>
              <div class=""><button>Загрузить фотографию</button></div>
            </div>
          </div>
        </div>
        <form class="col-span-2">
          <div class="flex flex-col mb-4">
            <span class="font-bold mb-2 ml-0.5">Имя Фамилия</span
            ><input class="rounded-xl border-2 p-3" type="text" value="Ekaterina " name="name" />
          </div>
          <div class="flex flex-col mb-4">
            <span class="font-bold mb-2 ml-0.5">Специализация</span
            ><input class="rounded-xl border-2 p-3" type="text" value="" name="specialization" />
          </div>
          <div class="flex flex-col mb-4">
            <span class="font-bold mb-2 ml-0.5">Почта</span
            ><input
              class="rounded-xl border-2 p-3"
              type="email"
              value="erworh@gmail.com"
              name="email"
            />
          </div>
          <div class="flex flex-col mb-4">
            <span class="font-bold mb-2 ml-0.5">Телефон</span
            ><input class="rounded-xl border-2 p-3" type="text" value="87015578457" name="phone" />
          </div>
        </form>
        <div class="col-span-3 text-center mt-8">
          <button class="primary-button" type="submit">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>





