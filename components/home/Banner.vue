<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>
<template>
  <!-- banner start -->
  <div
    class="banner-14 banner-area bg-relative banner-area-1 pd-bottom-100 bi-26 bg-cover bg-center"
  >
    <div class="container">
      <div class="row">
        <div class="w-full custom-md:w-8/12 custom-lg:w-6/12">
          <div class="banner-inner">
            <h6
              class="subtitle wow animated fadeInLeft"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              {{ t("home.subtitle") }}
            </h6>
            <h2
              class="title wow animated fadeInLeft"
              data-wow-duration="0.8s"
              data-wow-delay="0.6s"
            >
              {{ t("home.title1") }}
              <span>{{ t("home.title2") }}</span>
              {{ t("home.title3") }}
              <span>{{ t("home.title4") }}</span>
            </h2>
            <p
              class="content wow animated fadeInLeft custom-lg:pe-[48px]"
              data-wow-duration="0.8s"
              data-wow-delay="0.9s"
            >
              {{ t("home.text") }}
            </p>
            <NuxtLink
              class="btn btn-base wow animated fadeInLeft"
              data-wow-duration="0.8s"
              data-wow-delay="0.6s"
              :to="localePath('/corporate/about')"
            >
              {{ t("home.button") }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <img class="animate-img-1 animate-topImageBounce" src="/img/banner/2.png" alt="img" />
    <img class="animate-img-2 animate-leftImageBounce" src="/img/banner/5.svg" alt="img" />
    <div class="banner-14-thumb">
      <img src="/img/home-banner.jpg" alt="Image" />
    </div>
    <div class="banner-13-thumb-sm">
      <img src="/img/banner/banner-shape.png" alt="Image" />
    </div>
  </div>
  <!-- banner end -->
</template>
