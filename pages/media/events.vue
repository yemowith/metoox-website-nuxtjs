<script setup>
const { t } = useI18n();
const route = useRoute();

const sevice = "events";
const basekey = `pages.media.pages.${sevice}`;

useHead({
  title: t(`${basekey}.meta.title`),
  meta: [{ name: "description", content: t(`${basekey}.meta.description`) }],
  bodyAttrs: { class: "" },
});

useSeoMeta({
  title: t(`${basekey}.meta.title`),
  description: t(`${basekey}.meta.description`),
});
</script>

<template>
  <!-- page title start -->
  <div class="breadcrumb-area bg-cover bg-center">
    <div class="container">
      <div class="breadcrumb-inner">
        <div class="row justify-content-center">
          <div class="custom-md:w-1/2">
            <h2 class="page-title">{{ t(`${basekey}.meta.title`) }}</h2>
          </div>
          <div class="custom-md:w-1/2 custom-md:!text-end">
            <ul class="page-list">
              <li>
                <a href="#">{{ t("pages.media.link") }}</a>
              </li>
              <li>{{ t(`${basekey}.link`) }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="about-area pd-top-120 pb-[120px]">
    <div class="container">
      <div class="row">
        <div class="custom-md:w-1/1">
          <p class="pb-[120px] pt-[120px] text-center">{{ t("global.no_data") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
