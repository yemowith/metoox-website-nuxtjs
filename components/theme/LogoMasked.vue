<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const props = defineProps({
  masked: {
    type: String,
    default: "",
    required: false,
  },
});
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="85" height="84" fill="none" viewBox="0 0 85 84">
    <g clip-path="url(#a)">
      <path
        fill="#003295"
        d="M72.99 9.89v7.2H58.72V0H46.27v28.95h-7.6V6.65H26.31v17.14H12.29V9.9H2.34C1.05 9.9 0 10.95 0 12.24v42.03a4.7 4.7 0 0 0 2.1 3.91l11.61 7.69V42.75c0-3.04 2.34-5.7 5.39-5.79 3.05-.09 5.73 2.43 5.73 5.55v29.46c0 .79.39 1.52 1.05 1.95l15.15 10.04c.78.52 1.8.52 2.58 0L59.23 73.7c.66-.43 1.06-1.17 1.06-1.96V35.77c0-3.04 2.34-5.7 5.39-5.79 3.05-.09 5.73 2.43 5.73 5.55V65.7l11.49-7.54a4.689 4.689 0 0 0 2.11-3.92V12.23c0-1.29-1.05-2.34-2.34-2.34h-9.68ZM38.67 66.96V41.85h7.6v25.02c0 3.13-1.42 6.09-3.85 8.05a10.327 10.327 0 0 1-3.74-7.96h-.01Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h85v84H0z" />
      </clipPath>
    </defs>
  </svg>
</template>
