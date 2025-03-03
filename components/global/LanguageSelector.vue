<script setup lang="ts">
const router = useRouter();
const { locale, locales, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

onMounted(() => {
  if ($(".single-select").length) {
    // @ts-ignore
    $(".single-select").niceSelect();
  }

  $(".country-select").on("change", switchLocale);
});

const switchLocale = () => {
  const selectedLocale = $(".country-select").val();

  if (selectedLocale) {
    const newLocale = locales.value.find((l) => l.code === selectedLocale);
    if (newLocale) {
      router.push(switchLocalePath(newLocale.code));
    }
  }
};
</script>

<template>
  <div>
    <div class="select-country">
      <select name="country" class="country-select select single-select">
        <option
          v-for="_locale in locales"
          :key="_locale.code"
          data-flag="fi-gb-eng"
          :selected="_locale.code === locale"
          :value="_locale.code"
        >
          {{ $t("locale." + _locale.code) }}
        </option>
      </select>
    </div>
  </div>
</template>
