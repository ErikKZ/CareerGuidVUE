<script setup>
  import CardDown from './CardDown.vue';
const onClickImg = () => {
  alert('click!!')
};
</script>

<template>
  <div class="flex bg-zinc-300 p-1 gap-2 overflow-x-scroll">
    <card-down alt-txt="интересы|увлечения" title-txt="фотография" type-title="творчество" :on-click-img="onClickImg" image-url="1col.jpg" icon-url="/Icons/Heart.svg"/>
    
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
