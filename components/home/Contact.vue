<script setup lang="ts">
const { t } = useI18n();

const localePath = useLocalePath();
</script>
<template>
  <!-- Contact -->
  <div class="from-secondary bg-gradient-to-b to-transparent">
    <div class="mx-auto max-w-5xl px-4 py-10 lg:py-20 xl:px-0">
      <!-- Title -->
      <div class="mb-10 max-w-3xl lg:mb-14">
        <h2 class="text-lighter text-2xl font-semibold md:text-4xl md:leading-tight">
          {{ t("pages.contact.link") }}
        </h2>
        <p class="text-lighter/50 mt-1">{{ t("pages.contact.meta.description") }}</p>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div class="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:gap-x-16">
        <div
          class="mb-10 border-b border-neutral-800 pb-10 md:order-2 md:mb-0 md:border-b-0 md:pb-0"
        >
          <form>
            <div class="space-y-4">
              <!-- Input -->
              <div class="relative">
                <input
                  type="text"
                  id="hs-tac-input-name"
                  class="text-lighter bg-secondary peer block w-full rounded-lg border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                  :placeholder="t('pages.contact.content.form.name')"
                />
                <label
                  for="hs-tac-input-name"
                  class="text-lighter/75 peer-focus:text-lighter/75 peer-[:not(:placeholder-shown)]:text-lighter/75 pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-xs"
                  >{{ t("pages.contact.content.form.name") }}</label
                >
              </div>
              <!-- End Input -->

              <!-- Input -->
              <div class="relative">
                <input
                  type="email"
                  id="hs-tac-input-email"
                  class="text-lighter bg-secondary peer block w-full rounded-lg border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                  :placeholder="t('pages.contact.content.form.email')"
                />
                <label
                  for="hs-tac-input-email"
                  class="text-lighter/75 peer-focus:text-lighter/75 peer-[:not(:placeholder-shown)]:text-lighter/75 pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-xs"
                  >{{ t("pages.contact.content.form.email") }}</label
                >
              </div>
              <!-- End Input -->

              <!-- Input -->
              <div class="relative">
                <input
                  type="text"
                  id="hs-tac-input-phone"
                  class="text-lighter bg-secondary peer block w-full rounded-lg border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                  :placeholder="t('pages.contact.content.form.phone')"
                />
                <label
                  for="hs-tac-input-phone"
                  class="text-lighter/75 peer-focus:text-lighter/75 peer-[:not(:placeholder-shown)]:text-lighter/75 pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-xs"
                  >{{ t("pages.contact.content.form.phone") }}</label
                >
              </div>
              <!-- End Input -->

              <!-- Input -->
              <div class="relative">
                <input
                  type="text"
                  id="hs-tac-input-company"
                  class="text-lighter bg-secondary peer block w-full rounded-lg border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                  :placeholder="t('pages.contact.content.form.subject')"
                />
                <label
                  for="hs-tac-input-company"
                  class="text-lighter/75 peer-focus:text-lighter/75 peer-[:not(:placeholder-shown)]:text-lighter/75 pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-xs"
                  >{{ t("pages.contact.content.form.subject") }}</label
                >
              </div>
              <!-- End Input -->

              <!-- Textarea -->
              <div class="relative">
                <textarea
                  id="hs-tac-message"
                  class="text-lighter bg-secondary peer block w-full rounded-lg border-transparent p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                  :placeholder="t('pages.contact.content.form.message')"
                ></textarea>
                <label
                  for="hs-tac-message"
                  class="text-lighter/75 peer-focus:text-lighter/75 peer-[:not(:placeholder-shown)]:text-lighter/75 pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 text-sm transition duration-100 ease-in-out peer-focus:-translate-y-1.5 peer-focus:text-xs peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-xs"
                  >{{ t("pages.contact.content.form.message") }}</label
                >
              </div>
              <!-- End Textarea -->
            </div>

            <div class="mt-2">
              <p class="mt-5">
                <a
                  class="group inline-flex items-center gap-x-2 rounded-full bg-[#00A6FB] px-3 py-2 text-sm font-medium text-neutral-800 focus:outline-none"
                  href="#"
                >
                  Submit
                  <svg
                    class="size-4 flex-shrink-0 transition"
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
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </p>
            </div>
          </form>
        </div>
        <!-- End Col -->

        <div class="space-y-14">
          <!-- Item -->
          <div class="flex gap-x-5">
            <svg
              class="text-lighter size-6 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div class="grow">
              <h4 class="text-lighter font-semibold">{{ t("pages.contact.content.address") }}:</h4>

              <address class="text-lighter/65 mt-1 text-sm not-italic">
                Gewerbestrasse 11 <br />
                CH-6330 Cham
              </address>
            </div>
          </div>
          <!-- End Item -->

          <!-- Item -->
          <div class="flex gap-x-5">
            <svg
              class="text-lighter size-6 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
              />
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
            </svg>
            <div class="grow">
              <h4 class="text-lighter font-semibold">
                {{ t("pages.contact.content.form.email") }}:
              </h4>

              <a
                class="text-lighter/65 mt-1 text-sm"
                href="mailto:info@metooxholding.com"
                target="_blank"
              >
                info@metooxholding.com
              </a>
            </div>
          </div>
          <!-- End Item -->

          <!-- Item -->
          <div class="flex gap-x-5">
            <svg
              class="text-lighter size-6 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m3 11 18-5v12L3 14v-3z" />
              <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
            </svg>
            <div class="grow">
              <h4 class="text-lighter font-semibold">{{ t("pages.contact.content.we") }}</h4>
              <p class="text-lighter/65 mt-1 text-sm">
                {{ t("pages.contact.content.we_desc") }}
              </p>
            </div>
          </div>
          <!-- End Item -->
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
  </div>
  <!-- End Contact -->
</template>

<style lang="scss" scoped>
.bk-logo {
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
