import type { Config } from "tailwindcss";

/**
 * DESIGN TOKENS
 * -------------
 * Palette and type carried over from Isabella's existing portfolio
 * (styles.css) so the new layout reads as the same person's site, not a
 * reskin. Warm off-white background, a blush sidebar tint, ink-brown text,
 * and a single mauve accent used for emphasis (headlines, active states,
 * links) — italic Cormorant Garamond doing the editorial-serif work,
 * Fira Sans for body copy, DM Mono for labels/utility text.
 */

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFFDFD",
        panel: "#FCF0F9", // sidebar/nav tint
        cream: "#F7F4EF", // card / image-well surface
        ink: {
          DEFAULT: "#1A1714",
          60: "#9A9187", // muted — matches --muted exactly (labels, nav, captions)
          40: "#1A171466", // faint ink, for de-emphasized hints/placeholders
          20: "#1A171433",
        },
        prose: "#5A5450", // dedicated long-form paragraph color, matches original .about-prose/.project-prose
        line: "rgba(26, 23, 20, 0.12)",
        signal: {
          DEFAULT: "#9D3A72", // accent — mauve
          light: "#B4568C",
          dark: "#7D2D5A",
          dim: "#9D3A7214",
        },
        // Dark-mode counterparts (panel toggle, future work)
        dark: {
          paper: "#161213",
          panel: "#241A20",
          ink: "#F7F4EF",
          line: "#3A322F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "ui-serif", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // Editorial type scale — major third-ish, tuned by hand
        "display-xl": ["clamp(3.5rem, 7vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.75rem, 5vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3.2vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem, 2.2vw, 2.125rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        "body-lg": ["1.25rem", { lineHeight: "1.55" }],
        caption: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
        label: ["0.75rem", { lineHeight: "1", letterSpacing: "0.08em" }],
      },
      spacing: {
  18: "4.5rem",
  22: "5.5rem",
  30: "7.5rem",
  section: "clamp(3rem, 7vw, 6.5rem)", // was: clamp(5rem, 12vw, 10rem)
  gutter: "clamp(1.25rem, 4vw, 3rem)",
},
      maxWidth: {
        content: "1200px",
        prose: "68ch",
      },
      transitionTimingFunction: {
        // Motion tokens — see components/motion/tokens.ts for the animation-side mirror
        signature: "cubic-bezier(0.16, 1, 0.3, 1)",
        snap: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
        lg: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
