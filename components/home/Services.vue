<script setup lang="ts">
const { t } = useI18n();

const localePath = useLocalePath();
</script>
<template>
  <div class="service-area pd-top-120 pd-bottom-120">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="section-title wow animated fadeInUp" data-wow-duration="0.8s">
            <h6 class="sub-title">{{ t("home.services") }}</h6>
            <h2 class="title">
              {{ t("home.slogan") }}
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="custom-sm:w-1/2 custom-md:w-1/3"
          v-for="service in [
            'construction',
            'logistics',
            'defense_industry',
            'energy',
            'tourism',
            'mining',
            'food_agriculture_and_animal_husbandry',
            'chemistry',
            'national_international_trade',
          ]"
          :key="service"
        >
          <div
            class="single-service-inner wow animated fadeInUp text-center"
            data-wow-duration="0.8s"
          >
            <div class="thumb">
              <ThemeLogoMasked masked="" />
            </div>
            <div class="details">
              <h5>
                <NuxtLink class="read-more-text" :to="localePath(`/services/${service}`)">
                  {{ t(`pages.services.pages.${service}.link`) }}
                </NuxtLink>
              </h5>
              <p>{{ t(`pages.services.pages.${service}.meta.description`) }}</p>

              <NuxtLink class="read-more-text" :to="localePath(`/services/${service}`)">
                {{ t(`global.read_more`) }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
