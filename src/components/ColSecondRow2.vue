<script setup>
import CardDown from './CardDown.vue'

defineProps({
  items: Array
})
const onClickImg = () => {
  alert('click!!')
}
</script>

<template>
  <div class="flex  bg-zinc-300 p-1 gap-3 overflow-x-scroll">
    <card-down
      v-for="item in items"
        :key="item.id"
        :altTxt="item.altTxt"
        :title-txt="item.titleTxt"
        :type-title="item.typeTitle"
        :on-click-img="onClickImg"
        image-url="1col.jpg"
        icon-url="/Icons/Heart.svg"
    />

    <!-- <div style="min-width: 150px ">
          <img
            alt=""
            loading="lazy"
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
            decoding="async"
            data-nimg="1"
            class="cursor-pointer the-card"
            srcset=""
            src="/Image/Yellow/3.jpg"
          />
        </div> -->
  </div>
</template>
