/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "cta-gradient-1": "#FF0049",
        "cta-gradient-2": "#F900F9",
        misc: "#0072FF",
        media: "#FD0000",
        travel: "#5B00FF",
        music: "#31FF00",
        health: "#FFFF00",
        tech: "#FF7700",
      },
      fontFamily: {
        sans: ["Metro Sans", "sans-serif"],
        mono: ["Tronica Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
