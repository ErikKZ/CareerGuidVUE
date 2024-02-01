<template>
  <div
    class="p-6 bg-gray-100 border-2 rounded-xl shadow-lg flex justify-center items-center flex-col relative"
  >
    <div class="absolute right-4 top-4 text-2xl text-gray-500 cursor-pointer hover:text-red-500">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="xmark"
        class="svg-inline--fa fa-xmark"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path
          fill="currentColor"
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        ></path>
      </svg>
    </div>
    <div class="font-bold text-xl mb-6">Запрос на консультацию</div>
    <form class="block" style="width: 50vw">
      <textarea rows="20" class="w-full shadow p-5" name="text"></textarea>
      <div class="text-center mt-5">
        <button class="primary-button" type="submit">Сохранить</button>
      </div>
    </form>
  </div>
</template>
