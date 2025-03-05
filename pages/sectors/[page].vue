<script setup>
const { t } = useI18n();
const route = useRoute();
const localePath = useLocalePath();
// Dynamically set the service key based on the route or selection

const sectors = [
  "real_estate_construction",
  "financial_consulting_planning",
  "industrial_technology_digitalization",
  "finance_investments",
  "financial_engineering",
  "ma_consulting",
];

const service = route.params.page;

if (!sectors.includes(service)) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

const baseKey = `pages.sectors.pages.${service}`;

useHead({
  title: t(`${baseKey}.meta.title`),
  meta: [{ name: "description", content: t(`${baseKey}.meta.description`) }],
  bodyAttrs: { class: "" },
});

useSeoMeta({
  title: t(`${baseKey}.meta.title`),
  description: t(`${baseKey}.meta.description`),
});
</script>

<template>
  <section class="from-secondary bg-gradient-to-t to-transparent sm:py-12 md:py-20 lg:py-24">
    <div class="z-20 mx-auto max-w-5xl px-4 lg:px-0">
      <!-- Blog Article -->
      <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div class="grid gap-y-8 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
          <!-- Content -->
          <div class="lg:col-span-2">
            <div class="py-8 lg:pe-8">
              <div class="text-lighter mt-6 space-y-5 text-base lg:space-y-8">
                <h2 class="text-lighter text-left text-4xl font-semibold">
                  {{ t(`${baseKey}.content.title`) }}
                </h2>
                <p>{{ t(`${baseKey}.content.paragraph1`) }}</p>
                <p>{{ t(`${baseKey}.content.paragraph2`) }}</p>
                <p>{{ t(`${baseKey}.content.paragraph3`) }}</p>
                <p>{{ t(`${baseKey}.content.paragraph4`) }}</p>
                <p>{{ t(`${baseKey}.content.paragraph5`) }}</p>
              </div>
            </div>
          </div>
          <!-- End Content -->

          <!-- Sidebar -->
          <div
            class="lg:bg-linear-to-r lg:col-span-1 lg:h-full lg:w-full lg:from-gray-50 lg:via-transparent lg:to-transparent"
          >
            <div class="sticky start-0 top-0 py-8 lg:ps-8">
              <!-- Avatar Media -->
              <div class="border-secondary group mb-8 flex items-center gap-x-3 border-b pb-4">
                <a class="focus:outline-hidden group block grow" href="">
                  <p class="text-lighter logo-icon text-base">
                    <svg
                      id="Brand_Manual"
                      height="38"
                      width="38"
                      data-name="Brand Manual"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 127.56 127.56"
                      class="inline-block"
                    >
                      <defs></defs>
                      <path
                        class="cls-1"
                        d="M2.25,84.34c2.2-1.15,4.63-2.61,7.15-4.44,3.59-2.6,6.43-5.29,8.63-7.67,2.54-2.43,5.18-5.16,7.83-8.23,1.49-1.73,2.88-3.44,4.16-5.11,3.57,4.81,6.92,8.53,9.5,11.18,5.06,5.2,10.02,10.22,17.82,14.22,4.15,2.13,7.86,3.34,10.43,4.03-7.07-3.92-12.11-8-15.39-10.98-3.75-3.41-6.55-6.68-11.99-13.09-4.31-5.07-7.73-9.37-10.05-12.35-3.71,5.12-7.91,10.5-12.65,16.01-5.27,6.13-10.48,11.59-15.46,16.42Z"
                      />
                      <path
                        class="cls-2"
                        d="M18.49,80.23c2.72-1.71,6.71-4.43,11.1-8.25,3.24-2.81,14.2-12.42,23.71-28.36h0c4.81.67,5.4.75,5.4.75,8.59,9.94,10.95,12.76,10.95,12.76,2.96,3.53,4.43,5.31,4.66,5.59,2.09,2.55,2.25,2.83,3.44,4.02,4.8,4.78,9.61,7.73,12.91,9.45-11.58-14.51-23.16-29.01-34.74-43.52-1.72,2.33-4.23,5.7-7.28,9.75-7.01,9.32-11.66,15.5-17.56,22.81-3.03,3.76-7.3,8.93-12.61,15.01Z"
                      />
                      <path
                        class="cls-2"
                        d="M53.31,43.62c.45,4.08,1.64,10.35,5.11,17.21,3.43,6.78,7.55,11.08,9.08,12.59.97.96,7.11,6.95,15.57,10.27,20.51,8.05,42.32-4.41,42.09-5.3-.17-.66-16.63,7.82-35.08,1.88-9.95-3.2-16.46-9.31-19.25-12.25-8.72-9.19-11.29-19.36-12.11-23.64"
                      />
                      <path
                        class="cls-2"
                        d="M96.78,70.12l-15.76-18.21-5.19,5.71,2.41,3.39c.93-.88,1.85-1.77,2.78-2.65,1.87,2.08,4.36,4.51,7.57,6.87,2.97,2.18,5.8,3.76,8.19,4.89Z"
                      />
                    </svg>

                    {{ t("home.sectores") }}
                  </p>
                </a>
              </div>
              <!-- End Avatar Media -->

              <div class="space-y-6">
                <!-- Media -->
                <NuxtLink
                  v-for="(sector, index) in sectors"
                  :key="index"
                  :to="localePath(`/sectors/${sector}`)"
                  class="focus:outline-hidden group flex items-center gap-x-6"
                >
                  <div class="grow">
                    <span
                      class="group-hover:text-light text-lighter translate-x-0 text-sm font-bold group-hover:ml-2 group-focus:text-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chevrons-right inline"
                      >
                        <path d="m6 17 5-5-5-5" />
                        <path d="m13 17 5-5-5-5" />
                      </svg>
                      {{ t(`pages.sectors.pages.${sector}.link`) }}
                    </span>
                  </div>
                </NuxtLink>
                <!-- End Media -->
              </div>
            </div>
          </div>
          <!-- End Sidebar -->
        </div>
      </div>
      <!-- End Blog Article -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.logo-icon {
  .cls-1 {
    isolation: isolate;
  }

  .cls-1,
  .cls-2 {
    fill: #caf0f8;
  }
}
</style>
