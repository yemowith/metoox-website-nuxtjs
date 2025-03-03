<script setup>
const { t } = useI18n();
const route = useRoute();

const services = [
  "construction",
  "logistics",
  "defense_industry",
  "energy",
  "tourism",
  "mining",
  "food_agriculture_and_animal_husbandry",
  "chemistry",
  "national_international_trade",
];

const sevice = "tourism";
const basekey = `pages.services.pages.${sevice}`;

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

  <div class="about-area pd-top-120 pb-[120px]">
    <div class="container">
      <div class="row">
        <div class="custom-md:w-1/1">
          <div
            class="section-title wow animated fadeInRight"
            data-wow-duration="0.8s"
            data-wow-delay="0.3s"
          >
            <h6 class="sub-title">{{ t(basekey + ".content.subtitle") }}</h6>
            <h2 class="title">{{ t(basekey + ".content.title") }}</h2>
            <p class="content !mb-[24px] custom-lg:!mb-[48px]">
              {{ t(basekey + ".content.description") }}
            </p>
            <div class="row">
              <div class="custom-sm:w-1/2">
                <div class="single-about-inner">
                  <div class="details">
                    <h5>{{ t(basekey + ".content.luxury_title") }}</h5>
                    <p>{{ t(basekey + ".content.luxury_description") }}</p>
                  </div>
                </div>
              </div>
              <div class="custom-sm:w-1/2">
                <div class="single-about-inner">
                  <div class="details">
                    <h5>{{ t(basekey + ".content.culture_title") }}</h5>
                    <p>{{ t(basekey + ".content.culture_description") }}</p>
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
