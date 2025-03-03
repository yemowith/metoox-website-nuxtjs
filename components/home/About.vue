<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <div class="about-area bg-gradient-gray pd-top-120">
    <div class="container">
      <div class="row">
        <div
          class="wow animated fadeInLeft custom-md:w-1/2"
          data-wow-duration="0.8s"
          data-wow-delay="0.3s"
        >
          <div class="about-thumb-inner mb-[24px] custom-md:mb-0">
            <img class="main-img" src="/img/home-about.jpg" alt="img" />
          </div>
        </div>
        <div
          class="wow animated fadeInRight custom-md:w-1/2"
          data-wow-duration="0.8s"
          data-wow-delay="0.3s"
        >
          <div class="section-title !mb-0">
            <h6 class="sub-title">
              {{ t("home.about.subtitle") }}
            </h6>
            <h2 class="title">{{ t("home.about.title") }}</h2>
            <p class="content !mb-[24px]">
              {{ t("home.about.description") }}
            </p>
            <div class="row">
              <div class="custom-sm:w-1/2">
                <ul class="single-list-inner style-check style-heading style-check mb-[16px]">
                  <li><i class="fas fa-check-circle"></i>{{ t("home.about.list_item_1") }}</li>
                  <li><i class="fas fa-check-circle"></i>{{ t("home.about.list_item_2") }}</li>
                </ul>
              </div>
              <div class="custom-sm:w-1/2">
                <ul class="single-list-inner style-check style-heading style-check mb-[16px]">
                  <li><i class="fas fa-check-circle"></i>{{ t("home.about.list_item_3") }}</li>
                  <li><i class="fas fa-check-circle"></i>{{ t("home.about.list_item_4") }}</li>
                </ul>
              </div>
            </div>
            <p class="content">
              {{ t("home.about.additional_description") }}
            </p>
            <NuxtLink :to="localePath('/corporate/about')" class="btn btn-base !mt-[24px]">{{
              t("home.about.button_text")
            }}</NuxtLink>
          </div>
        </div>
      </div>
      <div class="bg-base client-border-radius mt-[120px] p-[16px] custom-lg:p-[48px]">
        <HomePartners />
      </div>
    </div>
  </div>
</template>
