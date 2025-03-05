<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <!-- Testimonials -->
  <div class="from-secondary bg-gradient-to-t to-transparent">
    <div class="mx-auto max-w-5xl px-4 py-10 lg:py-20 xl:px-0">
      <!-- Title -->
      <div class="mb-10 max-w-3xl lg:mb-14">
        <h2 class="text-lighter text-2xl font-semibold md:text-4xl md:leading-tight">
          {{ t("home.team.title") }}
        </h2>
        <p class="text-texter mt-1">
          {{ t("home.team.description") }}
        </p>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div class="grid grid-cols-2 gap-8 md:grid-cols-2 md:gap-12">
        <div class="text-center">
          <img
            class="mx-auto rounded-xl grayscale sm:size-48 lg:size-60"
            src="/media/team/thomas.jpg"
            alt="Avatar"
          />
          <div class="mt-2 sm:mt-4">
            <h3
              class="text-lighter text-sm font-medium dark:text-neutral-200 sm:text-base lg:text-lg"
            >
              Thomas Berg
            </h3>
            <p class="text-light mb-2 text-xs dark:text-neutral-400 sm:text-xs lg:text-xs">
              {{ t("home.team.pos") }}
            </p>

            <!-- Social Brands -->
            <div class="mt-4 space-x-2.5 sm:mt-auto">
              <a
                class="focus:outline-hidden text-lighter inline-flex items-center justify-center rounded-full hover:text-gray-800 focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="tel:+41782466363"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
              </a>

              <a
                class="focus:outline-hidden text-lighter inline-flex items-center justify-center rounded-full hover:text-gray-800 focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="mail:berg@metooxholding.com"
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
                  class="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
            <!-- End Social Brands -->
          </div>
        </div>
        <!-- End Col -->

        <div class="text-center">
          <img
            class="mx-auto rounded-xl grayscale sm:size-48 lg:size-60"
            src="/media/team/edundar.jpg"
            alt="Avatar"
          />
          <div class="mt-2 sm:mt-4">
            <h3
              class="text-lighter text-sm font-medium dark:text-neutral-200 sm:text-base lg:text-lg"
            >
              Emrah dündar
            </h3>
            <p class="text-light mb-2 text-xs dark:text-neutral-400 sm:text-xs lg:text-xs">
              {{ t("home.team.pos") }}
            </p>

            <!-- Social Brands -->
            <div class="mt-4 space-x-2.5 sm:mt-auto">
              <a
                class="focus:outline-hidden text-lighter inline-flex items-center justify-center rounded-full hover:text-gray-800 focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="tel:+41783414242"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
              </a>

              <a
                class="focus:outline-hidden text-lighter inline-flex items-center justify-center rounded-full hover:text-gray-800 focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="mail:edundar@metooxholding.com"
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
                  class="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
            <!-- End Social Brands -->
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
  </div>
  <!-- End Testimonials -->
</template>

<style></style>
