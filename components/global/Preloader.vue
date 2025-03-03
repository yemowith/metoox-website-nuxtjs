<script setup lang="ts">
const { locale } = useI18n();
type LocaleCode = typeof locale.value extends `${infer Code}-${string}` ? Code : never;
const currentLocale = computed(() => locale.value.slice(0, 2) as LocaleCode);

onMounted(() => {
  $(window).on("load", function () {
    var preLoder = $("#preloader");
    preLoder.fadeOut(0);

    /*---------------------
            Cancel Preloader
        ----------------------*/
    $(document).on("click", ".cancel-preloader a", function (e) {
      e.preventDefault();
      $("#preloader").fadeOut(2000);
    });
  });
});
</script>
<template>
  <!-- preloader area start -->
  <div class="preloader" id="preloader">
    <div class="preloader-inner">
      <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>
  </div>
  <!-- preloader area end -->
</template>
