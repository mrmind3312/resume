// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    app: {
      alegraApiKey: process.env.ALEGRA_API_KEY,
      alegraApiEmail: process.env.ALEGRA_API_EMAIL,
      alegraApiUrl: process.env.ALEGRA_API_URL,
      pexelsApiKey: process.env.PEXELS_API_KEY,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  tailwindcss: {
    // TailwindCSS customs
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
  },
  icon: {
    size: "32px",
  },
});
