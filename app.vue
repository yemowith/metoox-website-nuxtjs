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
  ],
  meta: [{ name: "apple-mobile-web-app-title", content: "Han" }],
});

useSeoMeta({
  ogTitle: t("site.name"),
  description: t("site.description"),
  ogDescription: t("site.description"),
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="relative">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300 dark:bg-gray-900"
    ></div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
