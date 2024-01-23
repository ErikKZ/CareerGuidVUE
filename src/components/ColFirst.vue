<script setup>
  import Card from './Card.vue';

  const onClickImg = () => {
    alert('click!!')
  };
</script>

<template>
  <div class="flex flex-col p-3 gap-3 h-screen sticky top-0" style="width: 174px">
      <Card :on-click-img="onClickImg" image-url="1col.jpg" icon-url="/Icons/Heart.svg"/>
      <Card image-url="2col.jpg" icon-url="/Icons/Star.svg"/>
      <Card image-url="3col.jpg" icon-url="/Icons/Diamond.svg"/>
      <!-- <div class="min-width:150px">
        <img
          alt="Интересы онлайн"
          loading="lazy"
          decoding="async"
          data-nimg="1"
          class="cursor-pointer transition hover:-translate-y-1 the-card"
          srcset=""
          src="/1col.jpg"
        />
      </div>
      <div class="min-width:150px">
        <img
          alt="Способности"
          loading="lazy"
          decoding="async"
          data-nimg="1"
          class="cursor-pointer transition hover:-translate-y-1 the-card"
          srcset=""
          src="/2col.jpg"
        />
      </div>
      <div class="min-width:150px">
        <img
          alt="Мотивация"
          loading="lazy"
          decoding="async"
          data-nimg="1"
          class="cursor-pointer transition hover:-translate-y-1 the-card"
          srcset=""
          src="/3col.jpg"
        />
      </div> -->
    </div>
</template>