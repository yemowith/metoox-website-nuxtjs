<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
useHead({
  title: t("pages.index.meta.title"),
  meta: [{ name: "description", content: t("pages.index.meta.description") }],
});
useSeoMeta({
  title: t("pages.index.meta.title"),
  description: t("pages.index.meta.description"),
});
</script>
<template>
  <div class="body-overlay" id="body-overlay"></div>

  <HomeBanner />

  <HomeServices />

  <HomeAbout />
</template>
