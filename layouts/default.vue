<script setup lang="ts">
const { t } = useI18n();
useLocaleHead({
  dir: true,
  key: "id",
  seo: true,
  lang: true,
});

useHead({
  script: [
    {
      src: "https://code.jquery.com/jquery-3.7.1.min.js",
      integrity: "sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=",
      crossorigin: "anonymous",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/js/all.min.js",
      integrity:
        "sha512-UwcC/iaz5ziHX7V6LjSKaXgCuRRqbTp1QHpbOJ4l1nw2/boCfZ2KlFIqBUA/uRVF0onbREnY9do8rM/uT/ilqw==",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer",
    },
    {
      src: "/js/app.js",
      defer: true,
      type: "module",
    },
  ],
});

// wow js
</script>
<template>
  <ThemeHeader />
  <slot />
  <ThemeFooter />
</template>
<style lang="postcss"></style>
