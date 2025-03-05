<script setup lang="ts">
const { locale, t } = useI18n();
const localePath = useLocalePath();
import config from "../../configs/contact.json";
onMounted(() => {
  var backtoTop = $(".back-to-top");
  backtoTop.fadeOut();
});
</script>
<template>
  <footer class="relative overflow-hidden">
    <svg
      class="absolute -bottom-20 start-1/2 w-[1900px] -translate-x-1/2 transform"
      width="2745"
      height="488"
      viewBox="0 0 2745 488"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
      <path
        d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136"
        class="stroke-lighter/5"
        stroke="currentColor"
      />
    </svg>

    <div class="relative z-10">
      <div class="mx-auto w-full max-w-5xl px-4 py-10 lg:pt-16 xl:px-0">
        <div class="inline-flex items-center">
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

          <div class="border-lighter/40 ms-5 border-s ps-5">
            <p class="text-lighter/65 text-sm">{{ new Date().getFullYear() }} Metoox Holding AG.</p>
          </div>
        </div>

        <div class="border-secondary mt-5 border-t pt-5 dark:border-neutral-700">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex flex-wrap items-center gap-3">
              <LanguageSelector />

              <div class="space-x-4 text-sm">
                <NuxtLink
                  v-for="legal in ['terms_condition', 'privacy_policy', 'cookies_policy']"
                  :key="legal"
                  :to="localePath(`/legal/${legal}`)"
                  class="focus:outline-hidden text-texter/65 inline-flex gap-x-2 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  >{{ t(`pages.legals.pages.${legal}.link`) }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
