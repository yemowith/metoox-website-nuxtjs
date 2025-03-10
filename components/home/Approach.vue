<script setup lang="ts">
import { twMerge } from "tailwind-merge";
const { t } = useI18n();
const localePath = useLocalePath();
const steps = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
</script>
<template>
  <!-- Approach Section -->
  <div class="from-secondary bg-gradient-to-b to-transparent">
    <div class="mx-auto max-w-5xl px-4 py-10 xl:px-0">
      <!-- Title -->
      <div class="mb-10 max-w-3xl lg:mb-14">
        <h2 class="text-lighter text-2xl font-semibold md:text-4xl md:leading-tight">
          {{ t("home.approach.title") }}
        </h2>
        <p class="mt-1 text-white">
          {{ t("home.approach.description") }}
        </p>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img
            class="w-full rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image Description"
          />
        </div>

        <!-- Timeline -->
        <div>
          <div class="mb-4">
            <h3 class="text-lighter text-xs font-medium uppercase">
              {{ t("home.approach.steps") }}
            </h3>
          </div>

          <!-- Step Items -->
          <div v-for="step in steps" :key="step.id" class="ms-1 flex gap-x-5">
            <div
              :class="
                twMerge(
                  'relative after:absolute after:bottom-0 after:start-4 after:top-8 after:w-px after:-translate-x-[0.5px]',
                  step.id === steps.length ? '' : 'after:bg-light'
                )
              "
            >
              <div class="relative z-10 flex size-8 items-center justify-center">
                <span
                  class="border-texter text-light flex size-8 flex-shrink-0 items-center justify-center rounded-full border text-xs font-semibold uppercase"
                >
                  {{ step.id }}
                </span>
              </div>
            </div>

            <div class="grow pb-8 pt-0.5 sm:pb-12">
              <p class="text-lighter text-sm lg:text-base">
                <span class="text-light"> {{ t(`home.approach.step${step.id}.title`) }}: </span>
                {{ t(`home.approach.step${step.id}.description`) }}
              </p>
            </div>
          </div>
          <!-- End Step Items -->

          <NuxtLink
            class="text-primary group inline-flex items-center gap-x-2 rounded-full bg-[#00A6FB] px-3 py-2 text-sm font-medium focus:outline-none"
            to="tel:+41783414242"
          >
            <svg
              class="size-4 flex-shrink-0"
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
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
              <path
                class="opacity-0 transition group-hover:opacity-100 group-hover:delay-100 group-focus:opacity-100"
                d="M14.05 2a9 9 0 0 1 8 7.94"
              ></path>
              <path
                class="opacity-0 transition group-hover:opacity-100 group-focus:opacity-100"
                d="M14.05 6A5 5 0 0 1 18 10"
              ></path>
            </svg>
            {{ t("home.approach.cta.text") }}
          </NuxtLink>
        </div>
        <!-- End Timeline -->
      </div>
      <!-- End Grid -->
    </div>
  </div>
  <!-- End Approach -->
</template>
