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
          DEFAULT: "#0A192F",
          50: "#F2F6FC",
          100: "#DCE6F5",
          200: "#B4C7E7",
          300: "#7F9DD1",
          400: "#4A6FA8",
          500: "#22477F",
          600: "#143360",
          700: "#0E2547",
          800: "#0A192F",
          900: "#06101E",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E6C766",
          dark: "#8A6A1F",
        },
        charcoal: {
          DEFAULT: "#22272B",
          light: "#3A4149",
          dark: "#14181C",
        },
        ink: "#22272B",
        mist: "#A0B3C6",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(10, 25, 47, 0.25)",
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
