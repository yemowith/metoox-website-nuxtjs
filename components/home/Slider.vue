<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <!-- Slider -->
  <div class="px-4 py-10 sm:px-6 lg:px-8">
    <div
      data-hs-carousel='{
      "loadingClasses": "opacity-0"
    }'
      class="relative"
    >
      <div
        class="hs-carousel relative h-[30rem] w-full overflow-hidden rounded-2xl bg-gray-100 md:h-[calc(100vh-106px)]"
      >
        <div
          class="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap opacity-0 transition-transform duration-700"
        >
          <!-- Item -->
          <div class="hs-carousel-slide">
            <div
              class="flex h-[30rem] flex-col bg-[url('/media/slider/slider.jpg')] bg-cover bg-center bg-no-repeat md:h-[calc(100vh-75px)]"
            >
              <div class="mb-20 mt-auto w-2/3 pb-5 ps-5 md:max-w-lg md:pb-10 md:ps-10">
                <span class="block text-white">{{ t("home.welcone") }}</span>
                <span class="block text-xl text-white md:text-3xl">{{ t("home.slogan") }}</span>
                <div class="mt-5">
                  <NuxtLink
                    class="inline-flex items-center gap-x-2 rounded-xl border border-transparent bg-white px-3 py-2 text-sm font-medium text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    :to="localePath('/corporate/about')"
                    >{{ t("home.read") }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <!-- End Item -->
        </div>
      </div>
    </div>
  </div>
  <!-- End Slider -->
</template>
