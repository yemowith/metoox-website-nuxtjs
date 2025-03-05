<script setup lang="ts">
const { locale, t } = useI18n();
const isLoading = ref(true);

onMounted(() => {
  // Remove loading state after initial render
  nextTick(() => {
    isLoading.value = false;
  });
});

useHead({
  htmlAttrs: {
    lang: locale,
    dir: computed(() => {
      return t("locale.dir") as "ltr" | "rtl" | "auto";
    }),
  },
  titleTemplate(title) {
    return title ? `${title} - ${t("site.name")}` : `${t("site.name")}`;
  },
  bodyAttrs: { class: "home-14" },
  link: [
    { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "shortcut icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
  meta: [{ name: "apple-mobile-web-app-title", content: t("site.name") }],
});

useSeoMeta({
  ogTitle: t("site.name"),
  description: t("site.description"),
  ogDescription: t("site.description"),
  ogImage: "/media/og/image.jpg",
  ogUrl: "https://metooxholding.com",
  twitterTitle: t("site.name"),
  twitterDescription: t("site.description"),
  twitterImage: "/media/og/image.jpg",
});
</script>

<template>
  <div class="relative">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
