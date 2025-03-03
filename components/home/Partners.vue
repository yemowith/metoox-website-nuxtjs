<script setup lang="ts">
const { t } = useI18n();
onMounted(() => {
  var leftArrow = '<i class="fa fa-angle-left"></i>';
  var rightArrow = '<i class="fa fa-angle-right"></i>';
  // @ts-ignore
  $(".client-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    smartSpeed: 1500,
    autoplay: true,
    navText: [leftArrow, rightArrow],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      992: {
        items: 5,
      },
    },
  });
});
</script>

<template>
  <div class="client-slider owl-carousel">
    <div class="thumb">
      <img src="/img/partners/1.svg" alt="img" />
    </div>
    <div class="thumb">
      <img src="/img/partners/2.png" alt="img" />
    </div>
    <div class="thumb">
      <img src="/img/partners/3.png" alt="img" />
    </div>
    <div class="thumb">
      <img src="/img/partners/4.svg" alt="img" />
    </div>
  </div>
</template>

<style>
.thumb img {
  max-height: 75px;
}
</style>
