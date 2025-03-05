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

const steps = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
</script>
<template>
  <HomeSlider />

  <HomeSectors />

  <HomeTeam />

  <HomeContact />
</template>
