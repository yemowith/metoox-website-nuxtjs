<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const props = defineProps({
  isDark: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div class="logo-shadow">
    <svg
      id="Brand_Manual"
      data-name="Brand Manual"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 127.56 127.56"
    >
      <path
        class="cls-2"
        d="M1.44,84.33c2.23-1.17,4.69-2.64,7.25-4.5,3.64-2.64,6.53-5.37,8.75-7.78,2.58-2.46,5.26-5.24,7.94-8.35,1.52-1.76,2.92-3.49,4.22-5.18,3.62,4.88,7.02,8.66,9.64,11.34,5.13,5.28,10.17,10.37,18.08,14.43,4.21,2.16,7.97,3.38,10.58,4.09-7.17-3.98-12.28-8.12-15.61-11.14-3.8-3.46-6.64-6.78-12.16-13.28-4.37-5.15-7.84-9.51-10.19-12.53-3.77,5.19-8.03,10.65-12.83,16.24-5.35,6.22-10.63,11.76-15.68,16.66Z"
      />
      <path
        class="cls-1"
        d="M17.92,80.16c2.76-1.74,6.8-4.49,11.27-8.37,3.28-2.86,14.41-12.6,24.05-28.77h0c4.88.68,5.48.76,5.48.76,8.71,10.08,11.11,12.94,11.11,12.94,3,3.58,4.49,5.38,4.73,5.67,2.12,2.59,2.28,2.87,3.49,4.07,4.87,4.85,9.75,7.84,13.09,9.59-11.75-14.72-23.49-29.43-35.24-44.15-1.75,2.36-4.29,5.78-7.39,9.9-7.11,9.46-11.83,15.73-17.81,23.14-3.08,3.81-7.4,9.06-12.79,15.22Z"
      />
      <path
        class="cls-1"
        d="M53.23,43.01c.45,4.14,1.66,10.5,5.18,17.46,3.48,6.88,7.66,11.23,9.21,12.77.98.98,7.21,7.05,15.79,10.41,20.81,8.17,42.93-4.48,42.7-5.38-.17-.67-16.87,7.94-35.58,1.91-10.09-3.25-16.7-9.44-19.53-12.43-8.84-9.33-11.45-19.64-12.29-23.98"
      />
      <path
        class="cls-1"
        d="M97.33,69.9l-15.99-18.47-5.27,5.79,2.44,3.44c.94-.9,1.88-1.79,2.82-2.69,1.89,2.11,4.42,4.57,7.68,6.97,3.01,2.21,5.88,3.81,8.31,4.96Z"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.logo-shadow {
  position: fixed;
  width: 70%;
  height: 300px;
  top: 0;
  z-index: -1;
  .cls-1,
  .cls-2 {
    fill: #003554;
  }

  .cls-2 {
    isolation: isolate;
  }
}
</style>
