<script setup>
const { t } = useI18n();
const localePath = useLocalePath();
useHead({
  title: t("pages.corporate.pages.about.meta.title"),
  meta: [{ name: "description", content: t("pages.corporate.pages.about.meta.description") }],
  bodyAttrs: { class: "" },
});

useSeoMeta({
  title: t("pages.corporate.pages.about.meta.title"),
  description: t("pages.corporate.pages.about.meta.description"),
});

const partners = [
  {
    name: "Polytope Holdings",
    link: "https://polytope.holdings/",
  },
  {
    name: "UNAccc",
    link: "https://unaccc.org/",
  },
  {
    name: "World Economic Forum",
    link: "https://weforum.org/",
  },
];
</script>

<template>
  <!-- About Us Section -->
  <section class="from-secondary bg-gradient-to-t to-transparent py-28">
    <div class="z-20 mx-auto max-w-5xl px-4 lg:px-0">
      <h2 class="text-lighter mb-8 text-center text-4xl font-semibold">
        {{ t("pages.corporate.pages.about.section.title") }}
      </h2>

      <div class="text-lighter mt-6 space-y-6 leading-[2rem]">
        <p>{{ t("pages.corporate.pages.about.section.paragraph1") }}</p>
        <p>{{ t("pages.corporate.pages.about.section.paragraph2") }}</p>
        <p>{{ t("pages.corporate.pages.about.section.paragraph3") }}</p>
        <p>{{ t("pages.corporate.pages.about.section.paragraph4") }}</p>
        <p>{{ t("pages.corporate.pages.about.section.paragraph5") }}</p>
        <p>{{ t("pages.corporate.pages.about.section.paragraph6") }}</p>
        <p>{{ t("pages.corporate.pages.about.section.paragraph7") }}</p>
      </div>

      <div class="text-lighter mt-16 space-y-6 text-base">
        <h3 class="text-lighter text-left text-xl font-semibold">
          {{ t("global.partner") }}
        </h3>

        <ul class="list-disc space-y-2 pl-5">
          <li v-for="partner in partners" :key="partner.name">
            <a :href="partner.link" target="_blank" class="hover:underline">
              {{ partner.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- End About Us Section -->

  <HomeApproach />
</template>
