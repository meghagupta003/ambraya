import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config = {
  ...defaultConfig,
  content: [...defaultConfig.content, "./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...defaultConfig.theme,
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        brand: {
          purple: "#9e209d",
          black: "#161618",
          white: "#ffffff",
          neutral: {
            light: "#fafafb",
            medium: "#f5f5f6",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wider: "0.1em",
        widest: "0.2em",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
} satisfies Config

export default config
