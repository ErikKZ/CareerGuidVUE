<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col gap-6 my-9 mr-6">
    <div class="mb-4">
      <div class="flex gap-3">
        <div class="bg-white rounded-lg hover:bg-gray-200 cursor-pointer py-5 px-14 shadow-lg">
          <div class="text-gray-500 mb-6">Продлить&nbsp;тариф&nbsp;на</div>
          <div class="font-bold text-2xl text-center mb-4">1 месяц</div>
          <div class="text-gray-500 mb-1 text-center">1200 тенге.</div>
        </div>
        <div class="bg-white rounded-lg hover:bg-gray-200 cursor-pointer py-5 px-12 shadow-lg">
          <div class="text-gray-500 mb-6">Продлить&nbsp;тариф&nbsp;на</div>
          <div class="font-bold text-2xl text-center mb-4">3 месяца</div>
          <div class="text-gray-500 mb-1 text-center">3000 тенге.</div>
        </div>
        <div class="bg-white rounded-lg hover:bg-gray-200 cursor-pointer py-5 px-12 shadow-lg">
          <div class="text-gray-500 mb-6">Продлить&nbsp;тариф&nbsp;на</div>
          <div class="font-bold text-2xl text-center mb-4">12 месяцев</div>
          <div class="text-gray-500 mb-1 text-center">9600 тенге.</div>
        </div>
      </div>
    </div>
    <table
      class="table-auto border-collapse bg-white shadow-lg shadow-gray-200 rounded-xl w-full relative"
    >
      <thead class="sticky top-0">
        <tr class="rounded-t-xl bg-slate-200 border-b">
          <th class="p-4 text-left rounded-tl-xl uppercase text-gray-800 text-sm">Дата оплаты</th>
          <th class="p-4 text-left uppercase text-gray-800 text-sm">Сумма оплаты</th>
          <th class="p-4 text-left uppercase text-gray-800 text-sm rounded-tr-xl">Оплачено до</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-red-50">
          <td class="p-5">17.12.2023</td>
          <td class="p-5">1200&nbsp;₸</td>
          <td class="p-5">17.01.2024</td>
        </tr>
        <tr>
          <td colspan="3" class="px-5 pb-2 bg-red-50 text-red-800 border-b border-red-200">
            Не удалось найти операцию
          </td>
        </tr>
        <tr class="border-b">
          <td class="p-5">07.12.2023</td>
          <td class="p-5">0&nbsp;₸</td>
          <td class="p-5">08.12.2023</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
