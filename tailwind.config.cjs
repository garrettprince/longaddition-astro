/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "cta-gradient-1": "#FF2929",
        "cta-gradient-2": "#E205FF",
      },
    },
  },
  plugins: [],
};
