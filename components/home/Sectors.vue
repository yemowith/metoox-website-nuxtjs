<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>
<template>
  <!-- Case Stories -->
  <div class="from-primary bg-gradient-to-t to-transparent">
    <div class="relative max-w-full">
      <svg
        class="absolute -bottom-20 start-1/2 w-full -translate-x-1/2 transform"
        width="2745"
        height="488"
        viewBox="0 0 2745 488"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136"
          class="stroke-neutral-700/50"
          stroke="currentColor"
        />
      </svg>

      <div class="mx-auto max-w-5xl px-4 py-24 xl:px-0">
        <!-- Title -->
        <div class="mb-10 max-w-3xl lg:mb-14">
          <h2 class="text-lighter text-2xl font-semibold md:text-4xl md:leading-tight">
            {{ t("home.sectores") }}
          </h2>
          <p class="text-texter mt-1">
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
                  <div
                    class="text-lighter bg-secondary rounded-lg p-4 text-sm font-semibold dark:bg-neutral-800 dark:text-neutral-200 md:text-sm"
                  >
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
                  <div
                    class="text-lighter bg-secondary rounded-lg p-4 text-sm font-semibold dark:bg-neutral-800 dark:text-neutral-200 md:text-sm"
                  >
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
                  <div
                    class="text-lighter bg-secondary rounded-lg p-4 text-sm font-semibold dark:bg-neutral-800 dark:text-neutral-200 md:text-sm"
                  >
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
                  <div
                    class="text-lighter bg-secondary rounded-lg p-4 text-sm font-semibold dark:bg-neutral-800 dark:text-neutral-200 md:text-sm"
                  >
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
                  <div
                    class="bg-secondary text-lighter rounded-lg p-4 text-sm font-semibold dark:bg-neutral-800 dark:text-neutral-200 md:text-sm"
                  >
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
                  <div
                    class="text-lighter bg-secondary rounded-lg p-4 text-sm font-semibold dark:bg-neutral-800 dark:text-neutral-200 md:text-sm"
                  >
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
