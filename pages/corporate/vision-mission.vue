<script setup>
const { t } = useI18n();
useHead({
  title: t("pages.corporate.pages.vision-mission.meta.title"),
  meta: [
    { name: "description", content: t("pages.corporate.pages.vision-mission.meta.description") },
  ],
  bodyAttrs: { class: "" },
});

useSeoMeta({
  title: t("pages.corporate.pages.vision-mission.meta.title"),
  description: t("pages.corporate.pages.vision-mission.meta.description"),
});
</script>

<template>
  <!-- page title start -->
  <div class="breadcrumb-area bg-cover bg-center">
    <div class="container">
      <div class="breadcrumb-inner">
        <div class="row justify-content-center">
          <div class="custom-md:w-1/2">
            <h2 class="page-title">{{ t("pages.corporate.pages.vision-mission.meta.title") }}</h2>
          </div>
          <div class="custom-md:w-1/2 custom-md:!text-end">
            <ul class="page-list">
              <li>
                <a href="#">{{ t("pages.corporate.link") }}</a>
              </li>
              <li>{{ t("pages.corporate.pages.vision-mission.meta.title") }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- page title end -->

  <div class="about-area pd-top-120 pb-[120px]">
    <div class="container">
      <div class="row">
        <div class="custom-md:w-1/1">
          <div
            class="section-title wow animated fadeInRight"
            data-wow-duration="0.8s"
            data-wow-delay="0.3s"
          >
            <h6 class="sub-title">
              {{ t("pages.corporate.pages.vision-mission.content.subtitle") }}
            </h6>
            <h2 class="title">{{ t("pages.corporate.pages.vision-mission.content.title") }}</h2>
            <p class="content !mb-[24px] custom-lg:!mb-[48px]">
              {{ t("pages.corporate.pages.vision-mission.content.description") }}
            </p>
            <div class="row">
              <div class="custom-sm:w-1/2">
                <div class="single-about-inner">
                  <div class="thumb mb-[16px]">
                    <img src="/img/icon/2.png" alt="img" />
                  </div>
                  <div class="details">
                    <h5>
                      {{ t("pages.corporate.pages.vision-mission.content.commitment_title") }}
                    </h5>
                    <p>
                      {{ t("pages.corporate.pages.vision-mission.content.commitment_description") }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="custom-sm:w-1/2">
                <div class="single-about-inner">
                  <div class="thumb mb-[16px]">
                    <img src="/img/icon/3.png" alt="img" />
                  </div>
                  <div class="details">
                    <h5>{{ t("pages.corporate.pages.vision-mission.content.global_title") }}</h5>
                    <p>
                      {{ t("pages.corporate.pages.vision-mission.content.global_description") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
