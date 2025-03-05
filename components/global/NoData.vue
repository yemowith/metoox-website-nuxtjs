<script setup lang="ts">
const { locale, t } = useI18n();
</script>
<template>
  <div class="about-area pd-top-120 min-h-[calc(700px)] pb-[120px]">
    <div class="container">
      <div class="row">
        <div class="custom-md:w-1/1">
          <p class="text-lighter pb-[120px] pt-[120px] text-center">{{ t("global.no_data") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
