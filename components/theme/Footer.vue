<script setup lang="ts">
const { locale, t } = useI18n();
const localePath = useLocalePath();
import config from "../../configs/contact.json";
onMounted(() => {
  var backtoTop = $(".back-to-top");
  backtoTop.fadeOut();
});
</script>
<template>
  <footer class="footer-area bg-black bg-cover bg-center">
    <div class="container">
      <div class="row">
        <div class="custom-sm:w-1/2 custom-md:w-1/3">
          <div class="widget widget_about wow animated fadeInUp" data-wow-duration="0.8s">
            <div class="thumb">
              <ThemeLogo :isDark="true" />
            </div>
            <div class="details">
              <p>{{ t("global.slogan") }}</p>
              <p class="mt-[16px]">
                <a :href="'mailto:' + config.email"
                  ><i class="fas fa-envelope"></i>{{ config.email }}</a
                >
              </p>
              <p class="mt-[8px]">
                <a :href="'tel:' + config.phone"
                  ><i class="fa fa-phone-alt"></i> {{ config.phone }}</a
                >
              </p>
              <ul class="social-media">
                <li>
                  <a
                    :href="config.socialMedia.facebook"
                    target="_blank"
                    :aria-label="t('media.follow')"
                    title="facebook"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    :href="config.socialMedia.x"
                    target="_blank"
                    :aria-label="t('media.follow')"
                    title="X"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    :href="config.socialMedia.linkedin"
                    target="_blank"
                    :aria-label="t('media.follow')"
                    title="linkedin"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    :href="config.socialMedia.instagram"
                    target="_blank"
                    :aria-label="t('media.follow')"
                    title="instagram"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="custom-sm:w-1/2 custom-md:w-1/3">
          <div
            class="widget widget_nav_menu wow animated fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.3s"
          >
            <h4 class="widget-title">{{ t("global.business_sectors") }}</h4>
            <ul>
              <li
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
                <NuxtLink :to="localePath(`/services/${service}`)"
                  ><i class="fas fa-arrow-right"></i>
                  {{ t(`pages.services.pages.${service}.link`) }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="custom-sm:w-1/2 custom-md:w-1/3">
          <div
            class="widget widget_nav_menu wow animated fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.6s"
          >
            <h4 class="widget-title mb-10">{{ t("pages.corporate.link") }}</h4>
            <ul>
              <li v-for="page in ['about', 'vision-mission']" :key="page">
                <NuxtLink :to="localePath(`/corporate/${page}`)"
                  ><i class="fas fa-arrow-right"></i>
                  {{ t(`pages.corporate.pages.${page}.link`) }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom !border-[rgba(50,47,47,1)]">
      <div class="container">
        <div class="row">
          <div class="self-center custom-sm:w-1/2">
            <p>
              © {{ t("site.name") }} {{ new Date().getFullYear() }} | {{ t("global.copyright") }}
            </p>
          </div>
          <div class="custom-sm:w-1/2 custom-md:!text-end">
            <NuxtLink
              v-for="legal in ['terms_condition', 'privacy_policy', 'cookies_policy']"
              :key="legal"
              :to="localePath(`/legal/${legal}`)"
              >{{ t(`pages.legals.pages.${legal}.link`) }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <div class="back-to-top">
    <span class="back-top"><i class="fa fa-angle-up"></i></span>
  </div>
</template>
