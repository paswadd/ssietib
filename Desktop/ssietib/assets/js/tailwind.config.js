/*
 * Tailwind CSS configuration for SSIETIB
 * Loaded after the Tailwind Play CDN script on every page.
 *
 * Institutional palette (restrained):
 *   - Navy   : deep navy blue, primary brand surface
 *   - Gold   : brand accent (large text, graphics, buttons only) + WCAG-safe dark tone
 *   - Charcoal: dark neutral for utility bars, footer base and body copy
 *   - White  : page surfaces
 *
 * Contrast note: gold (#D4AF37) is only used on navy or as a button fill behind
 * navy text. For small text on white, use `text-gold-dark` (#8A6A1F, ~5:1 on white).
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1220",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#0F172A",
          900: "#071021",
        },
        gold: {
          DEFAULT: "#FBBF24",
          light: "#FDE047",
          dark: "#F59E0B",
        },
        charcoal: {
          DEFAULT: "#18181B",
          light: "#27272A",
          dark: "#09090B",
        },
        ink: "#0F172A",
        mist: "#CBD5E1",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 18px 40px -16px rgba(30, 64, 175, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
};
