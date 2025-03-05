<script setup lang="ts">
const { locale, t } = useI18n();
import config from "../../configs/contact.json";
const localePath = useLocalePath();
onMounted(() => {});
</script>
<template>
  <header class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap md:flex-nowrap md:justify-start">
    <div class="from-primary fixed -mt-4 h-36 w-full bg-gradient-to-b to-transparent"></div>
    <nav
      class="bg-secondary relative mx-2 w-full max-w-[66rem] rounded-[28px] py-3 pe-2 ps-5 md:flex md:items-center md:justify-between md:py-0 lg:mx-auto"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink
          class="inline-block flex-none rounded-md text-xl font-semibold focus:opacity-80 focus:outline-none"
          :to="localePath('index')"
          aria-label="Logo"
        >
          <svg
            id="Brand_Manual"
            class="header-logo h-auto w-[9rem]"
            data-name="Brand Manual"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 351.33 55.46"
          >
            <defs></defs>
            <g>
              <path
                class="cls-2"
                d="M4.26,46.23c1.6-.84,3.36-1.89,5.19-3.22,2.61-1.89,4.67-3.84,6.27-5.57,1.85-1.76,3.76-3.75,5.69-5.98,1.09-1.26,2.09-2.5,3.02-3.71,2.59,3.49,5.03,6.2,6.9,8.12,3.68,3.78,7.28,7.42,12.94,10.33,3.01,1.55,5.7,2.42,7.58,2.93-5.13-2.85-8.79-5.81-11.17-7.98-2.72-2.48-4.75-4.85-8.71-9.5-3.13-3.68-5.61-6.81-7.29-8.97-2.7,3.72-5.74,7.62-9.18,11.62-3.83,4.45-7.61,8.42-11.23,11.92Z"
              />
              <path
                class="cls-3"
                d="M16.06,43.24c1.97-1.24,4.87-3.21,8.06-5.99,2.35-2.04,10.31-9.02,17.22-20.59h0c3.49.48,3.92.54,3.92.54,6.24,7.22,7.95,9.26,7.95,9.26,2.15,2.56,3.22,3.85,3.38,4.06,1.52,1.85,1.63,2.05,2.5,2.92,3.49,3.47,6.98,5.61,9.37,6.87-8.41-10.53-16.82-21.07-25.22-31.6-1.25,1.69-3.07,4.14-5.29,7.08-5.09,6.77-8.47,11.26-12.75,16.56-2.2,2.73-5.3,6.48-9.15,10.9Z"
              />
              <path
                class="cls-3"
                d="M41.34,16.66c.33,2.96,1.19,7.52,3.71,12.5,2.49,4.93,5.48,8.04,6.59,9.14.7.7,5.16,5.04,11.31,7.45,14.9,5.85,30.73-3.2,30.56-3.85-.12-.48-12.07,5.68-25.47,1.37-7.22-2.33-11.95-6.76-13.98-8.9-6.33-6.68-8.19-14.06-8.8-17.16"
              />
              <path
                class="cls-3"
                d="M72.9,35.9l-11.44-13.22-3.77,4.15,1.75,2.46c.67-.64,1.35-1.28,2.02-1.93,1.36,1.51,3.17,3.27,5.5,4.99,2.15,1.58,4.21,2.73,5.95,3.55Z"
              />
            </g>
            <g>
              <g>
                <polygon
                  class="cls-3"
                  points="346.25 10.47 334.7 24.71 331.74 21.09 340.64 10.47 346.25 10.47"
                />
                <polygon
                  class="cls-3"
                  points="318.64 10.47 346.25 45.73 340.21 45.73 313.05 10.47 318.64 10.47"
                />
                <polygon
                  class="cls-3"
                  points="327.17 34.5 318.27 45.73 312.06 45.73 324.48 31.11 327.17 34.5"
                />
              </g>
              <g>
                <rect class="cls-2" x="187.69" y="10.49" width="29.54" height="4.27" />
                <rect class="cls-3" x="199.85" y="18.87" width="4.58" height="26.87" />
              </g>
              <g>
                <polygon
                  class="cls-3"
                  points="181.05 10.15 154.99 10.15 154.99 46.02 181.05 46.02 181.05 41.28 160.68 41.28 160.68 14.43 181.05 14.43 181.05 10.15"
                />
                <rect class="cls-3" x="165.1" y="25.64" width="15.95" height="3.95" />
              </g>
              <polygon
                class="cls-3"
                points="145.84 10.52 145.84 45.77 140.93 45.77 140.93 19.69 128.93 35.8 125.93 35.8 114.08 18.9 114.08 45.77 108.71 45.77 108.71 10.52 112.98 10.52 127.28 29.95 141.57 10.52 145.84 10.52"
              />
              <g>
                <path
                  class="cls-1"
                  d="M241.24,9.44c5.64,0,10.33,1.78,14.08,5.35,3.75,3.57,5.62,8.04,5.62,13.42s-1.89,9.83-5.68,13.36-8.55,5.29-14.31,5.29-10.08-1.76-13.74-5.29-5.49-7.94-5.49-13.25,1.84-9.96,5.53-13.53c3.69-3.57,8.35-5.35,13.99-5.35ZM241.45,14.4c-4.17,0-7.6,1.31-10.29,3.92-2.69,2.61-4.03,5.94-4.03,10s1.35,7.21,4.04,9.82c2.7,2.61,6.07,3.92,10.12,3.92s7.47-1.33,10.19-4c2.72-2.66,4.08-5.98,4.08-9.95s-1.36-7.12-4.08-9.75c-2.72-2.64-6.07-3.96-10.03-3.96Z"
                />
                <path
                  class="cls-1"
                  d="M286.21,9.28c5.64,0,10.33,1.78,14.08,5.35,3.75,3.57,5.62,8.04,5.62,13.42s-1.89,9.83-5.68,13.36-8.55,5.29-14.31,5.29-10.08-1.76-13.74-5.29-5.49-7.94-5.49-13.25,1.84-9.96,5.53-13.53c3.69-3.57,8.35-5.35,13.99-5.35ZM286.42,14.24c-4.17,0-7.6,1.31-10.29,3.92-2.69,2.61-4.03,5.94-4.03,10s1.35,7.21,4.04,9.82c2.7,2.61,6.07,3.92,10.12,3.92s7.47-1.33,10.19-4c2.72-2.66,4.08-5.98,4.08-9.95s-1.36-7.12-4.08-9.75c-2.72-2.64-6.07-3.96-10.03-3.96Z"
                />
              </g>
            </g>
          </svg>
        </NuxtLink>
        <!-- End Logo -->

        <div class="md:hidden">
          <button
            type="button"
            class="hs-collapse-toggle bg-primary flex size-8 items-center justify-center rounded-full text-sm font-semibold text-white disabled:pointer-events-none disabled:opacity-50"
            data-hs-collapse="#navbar-collapse"
            aria-controls="navbar-collapse"
            aria-label="Toggle navigation"
          >
            <svg
              class="size-4 flex-shrink-0 hs-collapse-open:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              class="hidden size-4 flex-shrink-0 hs-collapse-open:block"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Collapse -->
      <div
        id="navbar-collapse"
        class="hs-collapse text-lighter hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
      >
        <div
          class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:ps-7"
        >
          <NuxtLink
            class="text-lighter hover:text-light/85 focus:text-light/50 text-sm focus:outline-none md:py-4"
            :to="localePath('index')"
            aria-current="page"
            >{{ t("pages.index.link") }}</NuxtLink
          >
          <NuxtLink
            class="text-lighter hover:text-light/85 focus:text-light/50 text-sm focus:outline-none md:py-4"
            :to="localePath(`/corporate/about`)"
            >{{ t("pages.corporate.link") }}</NuxtLink
          >

          <div
            class="hs-dropdown pe-3 ps-px [--adaptive:none] [--is-collapse:true] [--strategy:static] sm:px-3 md:py-4 md:[--is-collapse:false] md:[--strategy:fixed]"
          >
            <button
              id="hs-dropdown-floating-dark"
              type="button"
              class="hs-dropdown-toggle focus:outline-hidden text-lighter hover:text-light/85 focus:text-light/50 flex w-full items-center text-sm"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              {{ t("pages.sectors.link") }}
              <svg
                class="ms-auto size-4 shrink-0 duration-300 hs-dropdown-open:-rotate-180 md:ms-1 md:hs-dropdown-open:rotate-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              class="hs-dropdown-menu md:bg-primary top-full z-10 hidden rounded-lg opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:start-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 md:w-64 md:shadow-md md:duration-[150ms]"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-dropdown-floating-dark"
            >
              <div class="mt-3 flex flex-col gap-y-3 md:mt-0 md:gap-y-0 md:px-1 md:py-1">
                <NuxtLink
                  v-for="(sector, index) in [
                    'real_estate_construction',
                    'financial_consulting_planning',
                    'industrial_technology_digitalization',
                    'finance_investments',
                    'financial_engineering',
                    'ma_consulting',
                  ]"
                  :key="index"
                  :to="localePath(`/sectors/${sector}`)"
                  class="focus:outline-hidden border-secondary text-lighter hover:text-light focus:text-light/50 flex items-center gap-x-3.5 border-b text-sm md:px-3 md:py-2"
                >
                  {{ t(`pages.sectors.pages.${sector}.link`) }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <div>
            <NuxtLink
              class="text-primary group inline-flex items-center gap-x-2 rounded-full bg-[#00A6FB] px-3 py-2 text-sm font-medium focus:outline-none"
              :to="localePath(`/contact`)"
            >
              {{ t("pages.contact.link") }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- End Collapse -->
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header-logo {
  .cls-1 {
    fill: #00a6fb;
  }

  .cls-2 {
    isolation: isolate;
  }

  .cls-2,
  .cls-3 {
    fill: #caf0f8;
  }
}
</style>
