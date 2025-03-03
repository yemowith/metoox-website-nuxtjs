<script setup>
const { t } = useI18n();
const route = useRoute();

const basekey = `pages.contact`;

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
                <a href="#">{{ t("pages.services.link") }}</a>
              </li>
              <li>{{ t(`${basekey}.link`) }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- contact area start -->
  <div class="contact-area pd-top-120 pd-bottom-120">
    <div class="container">
      <div class="contact-page-inner bg-gray wow animated fadeInUp" data-wow-duration="0.8s">
        <div class="section-title mb-[24px] pb-[8px]">
          <h2 class="title">{{ t(`${basekey}.content.subtitle`) }}</h2>
          <p class="content mb-0">
            {{ t(`${basekey}.content.description`) }}
          </p>
        </div>
        <div class="row">
          <div class="custom-sm:w-full">
            <div class="single-input-inner">
              <input type="text" :placeholder="t(`${basekey}.content.form.name`)" />
            </div>
          </div>
          <div class="custom-sm:w-full">
            <div class="single-input-inner">
              <input type="text" :placeholder="t(`${basekey}.content.form.email`)" />
            </div>
          </div>
          <div class="custom-sm:w-full">
            <div class="single-input-inner">
              <input type="text" :placeholder="t(`${basekey}.content.form.subject`)" />
            </div>
          </div>
          <div class="w-full">
            <div class="single-input-inner">
              <textarea :placeholder="t(`${basekey}.content.form.message`)"></textarea>
            </div>
          </div>
          <div class="w-full text-center">
            <button class="btn btn-base border-radius-5">
              {{ t(`${basekey}.content.form.button`) }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- contact area end -->
</template>
