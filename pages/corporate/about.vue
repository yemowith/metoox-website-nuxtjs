<script setup>
const { t } = useI18n();
useHead({
  title: t("pages.corporate.pages.about.meta.title"),
  meta: [{ name: "description", content: t("pages.corporate.pages.about.meta.description") }],
  bodyAttrs: { class: "" },
});

useSeoMeta({
  title: t("pages.corporate.pages.about.meta.title"),
  description: t("pages.corporate.pages.about.meta.description"),
});
</script>

<template>
  <!-- page title start -->
  <div class="breadcrumb-area bg-cover bg-center">
    <div class="container">
      <div class="breadcrumb-inner">
        <div class="row justify-content-center">
          <div class="custom-md:w-1/2">
            <h2 class="page-title">{{ t("pages.corporate.pages.about.meta.title") }}</h2>
          </div>
          <div class="custom-md:w-1/2 custom-md:!text-end">
            <ul class="page-list">
              <li>
                <a href="#">{{ t("pages.corporate.link") }}</a>
              </li>
              <li>{{ t("pages.corporate.pages.about.meta.title") }}</li>
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
        <div class="custom-md:w-1/2">
          <div
            class="about-thumb-inner wow animated fadeInLeft custom-lg:me-[48px] custom-lg:pe-[48px]"
            data-wow-duration="0.8s"
          >
            <img class="animate-img-1 animate-topImageBounce" src="/img/about/2.png" alt="img" />
            <img class="animate-img-2 animate-leftImageBounce" src="/img/about/3.png" alt="img" />
            <img class="animate-img-3 animate-topImageBounce" src="/img/banner/5.svg" alt="img" />
            <img class="main-img" src="/img/about-banner.jpg" alt="img" />
          </div>
        </div>
        <div class="custom-md:w-1/2">
          <div
            class="section-title wow animated fadeInRight"
            data-wow-duration="0.8s"
            data-wow-delay="0.3s"
          >
            <h6 class="sub-title">{{ t("pages.corporate.pages.about.content.subtitle") }}</h6>
            <h2 class="title">{{ t("pages.corporate.pages.about.content.title") }}</h2>
            <p class="content !mb-[24px] custom-lg:!mb-[48px]">
              {{ t("pages.corporate.pages.about.content.description") }}
            </p>
            <div class="row">
              <div class="custom-sm:w-1/2">
                <div class="single-about-inner">
                  <div class="thumb mb-[16px]">
                    <img src="/img/icon/2.png" alt="img" />
                  </div>
                  <div class="details">
                    <h5>{{ t("pages.corporate.pages.about.content.commitment_title") }}</h5>
                    <p>{{ t("pages.corporate.pages.about.content.commitment_description") }}</p>
                  </div>
                </div>
              </div>
              <div class="custom-sm:w-1/2">
                <div class="single-about-inner">
                  <div class="thumb mb-[16px]">
                    <img src="/img/icon/3.png" alt="img" />
                  </div>
                  <div class="details">
                    <h5>{{ t("pages.corporate.pages.about.content.global_title") }}</h5>
                    <p>{{ t("pages.corporate.pages.about.content.global_description") }}</p>
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
