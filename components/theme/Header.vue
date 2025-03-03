<script setup lang="ts">
const { locale, t } = useI18n();
import config from "../../configs/contact.json";
const localePath = useLocalePath();
onMounted(() => {
  /**-----------------------------
   *  Navbar fix
   * ---------------------------*/
  $(document).on("click", ".navbar-area .navbar-nav li.menu-item-has-children>a", function (e) {
    e.preventDefault();
  });

  /*-------------------------------------
            menu
        -------------------------------------*/
  $(".navbar-area .menu").on("click", function () {
    $(this).toggleClass("open");
    $(".navbar-area .navbar-collapse").toggleClass("sopen");
  });

  // mobile menu
  // @ts-ignore
  if ($(window).width() < 992) {
    $(".in-mobile").clone().appendTo(".sidebar-inner");
    $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
    $('<i class="fas fa-chevron-right"></i>').insertAfter("");

    $(".menu-item-has-children a").on("click", function (e) {
      $(this).siblings(".sub-menu").animate(
        {
          height: "toggle",
        },
        300
      );
    });
  }

  var menutoggle = $(".menu-toggle");
  var mainmenu = $(".navbar-nav");

  menutoggle.on("click", function () {
    if (menutoggle.hasClass("is-active")) {
      mainmenu.removeClass("menu-open");
    } else {
      mainmenu.addClass("menu-open");
    }
  });
});
</script>
<template>
  <ThemeSearchForm />
  <!-- ==== topbar start ==== -->
  <div class="topbar hidden custom-md:block">
    <div class="custom-container container">
      <div class="row align-items-center">
        <div class="w-full custom-md:w-7/12">
          <div class="topbar__list-wrapper">
            <ul class="topbar__list">
              <li>
                <a class="" :href="'mailto:' + config.email"
                  ><i class="fas fa-envelope"></i>{{ config.email }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full custom-md:w-5/12">
          <div class="topbar__items justify-content-end">
            <LanguageSelector />

            <div class="social">
              <a
                :href="config.socialMedia.facebook"
                target="_blank"
                :aria-label="t('media.follow')"
                title="facebook"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                :href="config.socialMedia.x"
                target="_blank"
                :aria-label="t('media.follow')"
                title="X"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                :href="config.socialMedia.linkedin"
                target="_blank"
                :aria-label="t('media.follow')"
                title="linkedin"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                :href="config.socialMedia.instagram"
                target="_blank"
                :aria-label="t('media.follow')"
                title="instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ==== / topbar end ==== -->
  <!-- navbar start -->
  <nav class="navbar navbar-area navbar-area-2 navbar-expand-lg !mt-0 bg-white">
    <div class="nav-container custom-container container">
      <div class="responsive-mobile-menu">
        <button
          class="menu toggle-btn block custom-md:hidden"
          data-target="#itech_main_menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="icon-left"></span>
          <span class="icon-right"></span>
        </button>
      </div>

      <ThemeLogo />

      <div class="navbar-collapse collapse" id="itech_main_menu">
        <ul class="navbar-nav menu-open custom-md:ps-[48px] custom-md:!text-center">
          <li>
            <NuxtLink :to="localePath('index')">{{ t("pages.index.link") }}</NuxtLink>
          </li>
          <li class="menu-item-has-children">
            <NuxtLink :to="localePath('index')">{{ t("pages.corporate.link") }}</NuxtLink>
            <ul class="sub-menu">
              <li v-for="page in ['about', 'vision-mission']" :key="page">
                <NuxtLink :to="localePath(`/corporate/${page}`)">{{
                  t(`pages.corporate.pages.${page}.link`)
                }}</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <NuxtLink :to="localePath('index')">{{ t("pages.services.link") }}</NuxtLink>
            <ul class="sub-menu">
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
                <NuxtLink :to="localePath(`/services/${service}`)">{{
                  t(`pages.services.pages.${service}.link`)
                }}</NuxtLink>
              </li>
            </ul>
          </li>

          <li class="menu-item-has-children">
            <NuxtLink :to="localePath('media')">{{ t("pages.media.link") }}</NuxtLink>
            <ul class="sub-menu">
              <li v-for="media in ['in_press', 'news', 'events', 'gallery']" :key="media">
                <NuxtLink :to="localePath(`/media/${media}`)">{{
                  t(`pages.media.pages.${media}.link`)
                }}</NuxtLink>
              </li>
            </ul>
          </li>

          <li>
            <NuxtLink :to="localePath('/contact')">{{ t("pages.contact.link") }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="nav-right-part nav-right-part-desktop items-center custom-md:inline-flex">
        <a class="navbar-phone !hidden custom-lg:!inline-block" :href="'tel:' + config.phone">
          <span class="icon">
            <img src="/img/icon/1.png" alt="img" />
          </span>
          <span>{{ t("global.needHelp") }}</span>
          <h5>{{ config.phone }}</h5>
        </a>
      </div>
    </div>
  </nav>
  <!-- navbar end -->
</template>
