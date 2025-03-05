<script setup>
const { t } = useI18n();
const route = useRoute();

const legal = "terms_condition";
const basekey = `pages.legals.pages.${legal}`;

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
  <NoData />
</template>
