<script setup>
const { t } = useI18n();
const localePath = useLocalePath();
useHead({
  title: t("pages.corporate.pages.middel_east.meta.title"),
  meta: [{ name: "description", content: t("pages.corporate.pages.middel_east.meta.description") }],
  bodyAttrs: { class: "" },
});

useSeoMeta({
  title: t("pages.corporate.pages.middel_east.meta.title"),
  description: t("pages.corporate.pages.middel_east.meta.description"),
});
</script>

<template>
  <!-- About Us Section -->
  <section class="from-secondary bg-gradient-to-t to-transparent py-28">
    <div class="z-20 mx-auto max-w-5xl px-4 lg:px-0">
      <h2 class="text-lighter mb-6 text-center text-4xl font-semibold">
        {{ t("pages.corporate.pages.middel_east.meta.title") }}
      </h2>

      <div class="text-lighter mt-6 space-y-6 leading-[2rem]">
        <p>{{ t("pages.corporate.pages.about.section.paragraph1") }}</p>
        <p>{{ t("pages.corporate.pages.about.section.paragraph2") }}</p>
        <p>{{ t("pages.corporate.pages.about.section.paragraph3") }}</p>
        <p>{{ t("pages.corporate.pages.about.section.paragraph4") }}</p>
        <p>{{ t("pages.corporate.pages.about.section.paragraph5") }}</p>
        <p>{{ t("pages.corporate.pages.about.section.paragraph6") }}</p>
      </div>
    </div>
  </section>
  <!-- End About Us Section -->

  <HomeApproach />
</template>
