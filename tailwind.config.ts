import { type Config } from "tailwindcss";

export default {
  // content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter"],
      serif: ["serif"],
      mono: ["monospace"],
      display: ["Inter"],
      body: ["Inter"],
    },
    extend: {
      colors: {
        primary: "#051923",
        secondary: "#003554",
        texter: "#0582CA",
        light: "#00A6FB",
        lighter: "#caf0f8",
      }
    },
  },
   plugins: [
      require('preline/plugin'),
  ],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./app.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
    './node_modules/preline/preline.js',
  ],
  // safelist: [
  //   'safelisted',
  //   {
  //     pattern: /bg-(red|green|blue)-(100|200|300)/,
  //   },
  // ]
} satisfies Config;
