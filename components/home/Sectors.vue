<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>
<template>
  <!-- Case Stories -->
  <div class="from-primary bg-gradient-to-t to-transparent">
    <div class="relative max-w-full">
      <div class="mx-auto max-w-5xl px-4 py-24 xl:px-0">
        <!-- Title -->
        <div class="mb-10 max-w-3xl lg:mb-14">
          <h2 class="text-lighter text-2xl font-semibold md:text-4xl md:leading-tight">
            {{ t("home.sectores") }}
          </h2>
          <p class="text-lighter/50 mt-1">
            {{ t("home.sectores_desc") }}
          </p>
        </div>
        <!-- End Title -->

        <!-- Masonry Cards -->
        <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <!-- Grid -->
          <div class="grid gap-6 sm:grid-cols-12">
            <div
              class="col-span-12 sm:col-span-7 sm:self-end md:col-span-8 lg:col-span-5 lg:col-start-3"
            >
              <!-- Card -->
              <NuxtLink
                class="group relative block overflow-hidden rounded-xl focus:outline-none"
                :to="localePath('/sectors/real_estate_construction')"
              >
                <div class="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                  <img
                    class="w-full rounded-xl object-cover hue-rotate-15 transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                    src="/media/sectores/realstate.jpg"
                    :alt="t('pages.sectors.pages.real_estate_construction.meta.title')"
                  />
                </div>
                <div class="absolute bottom-0 end-0 start-0 p-2 sm:p-4">
                  <div class="text-lighter bg-secondary rounded-lg p-4 text-sm font-semibold">
                    {{ t("pages.sectors.pages.real_estate_construction.meta.title") }}
                  </div>
                </div>
              </NuxtLink>
              <!-- End Card -->
            </div>
            <!-- End Col -->

            <div class="col-span-12 sm:col-span-5 sm:self-end md:col-span-4 lg:col-span-3">
              <!-- Card -->
              <NuxtLink
                class="group relative block overflow-hidden rounded-xl focus:outline-none"
                :to="localePath('/sectors/financial_consulting_planning')"
              >
                <div class="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                  <img
                    class="w-full rounded-xl object-cover hue-rotate-15 transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                    src="/media/sectores/financial-consulting.jpg"
                    :alt="t('pages.sectors.pages.financial_consulting_planning.meta.title')"
                  />
                </div>
                <div class="absolute bottom-0 end-0 start-0 p-2 sm:p-4">
                  <div class="text-lighter bg-secondary rounded-lg p-4 text-sm font-semibold">
                    {{ t("pages.sectors.pages.financial_consulting_planning.meta.title") }}
                  </div>
                </div>
              </NuxtLink>
              <!-- End Card -->
            </div>
            <!-- End Col -->

            <div class="col-span-12 md:col-span-4">
              <!-- Card -->
              <NuxtLink
                class="group relative block overflow-hidden rounded-xl focus:outline-none"
                :to="localePath('/sectors/industrial_technology_digitalization')"
              >
                <div class="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                  <img
                    class="w-full rounded-xl object-cover hue-rotate-15 transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                    src="/media/sectores/industrial-technology.jpg"
                    :alt="t('pages.sectors.pages.industrial_technology_digitalization.meta.title')"
                  />
                </div>
                <div class="absolute bottom-0 end-0 start-0 p-2 sm:p-4">
                  <div class="text-lighter bg-secondary rounded-lg p-4 text-sm font-semibold">
                    {{ t("pages.sectors.pages.industrial_technology_digitalization.meta.title") }}
                  </div>
                </div>
              </NuxtLink>
              <!-- End Card -->

              <!-- Card -->
              <NuxtLink
                class="group relative mt-8 block overflow-hidden rounded-xl focus:outline-none"
                :to="localePath('/sectors/finance_investments')"
              >
                <div class="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                  <img
                    class="w-full rounded-xl object-cover hue-rotate-15 transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                    src="/media/sectores/finance-investmen.jpg"
                    :alt="t('pages.sectors.pages.finance_investments.meta.title')"
                  />
                </div>
                <div class="absolute bottom-0 end-0 start-0 p-2 sm:p-4">
                  <div class="text-lighter bg-secondary rounded-lg p-4 text-sm font-semibold">
                    {{ t("pages.sectors.pages.finance_investments.meta.title") }}
                  </div>
                </div>
              </NuxtLink>
              <!-- End Card -->
            </div>
            <!-- End Col -->

            <div class="col-span-12 sm:col-span-6 md:col-span-4">
              <!-- Card -->
              <NuxtLink
                class="group relative block overflow-hidden rounded-xl focus:outline-none"
                :to="localePath('/sectors/financial_engineering')"
              >
                <div class="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                  <img
                    class="w-full rounded-xl object-cover hue-rotate-15 transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                    src="/media/sectores/financial-engineering.jpg"
                    :alt="t('pages.sectors.pages.financial_engineering.meta.title')"
                  />
                </div>
                <div class="absolute bottom-0 end-0 start-0 p-2 sm:p-4">
                  <div class="bg-secondary text-lighter rounded-lg p-4 text-sm font-semibold">
                    {{ t("pages.sectors.pages.financial_engineering.meta.title") }}
                  </div>
                </div>
              </NuxtLink>
              <!-- End Card -->
            </div>
            <!-- End Col -->

            <div class="col-span-12 sm:col-span-6 md:col-span-4">
              <!-- Card -->
              <NuxtLink
                class="group relative block overflow-hidden rounded-xl focus:outline-none"
                :to="localePath('/sectors/finance_investments')"
              >
                <div class="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                  <img
                    class="w-full rounded-xl object-cover hue-rotate-15 transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                    src="/media/sectores/merger.jpg"
                    :alt="t('pages.sectors.pages.ma_consulting.meta.title')"
                  />
                </div>
                <div class="absolute bottom-0 end-0 start-0 p-2 sm:p-4">
                  <div class="text-lighter bg-secondary rounded-lg p-4 text-sm font-semibold">
                    {{ t("pages.sectors.pages.ma_consulting.meta.title") }}
                  </div>
                </div>
              </NuxtLink>
              <!-- End Card -->
            </div>
            <!-- End Col -->
          </div>
          <!-- End Grid -->
        </div>
      </div>
    </div>
  </div>
  <!-- End Case Stories -->
</template>
