/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "secondary-container": "#ff9800",
              "inverse-primary": "#adc7ff",
              "on-error": "#ffffff",
              "on-primary-container": "#ffffff",
              "primary-fixed": "#d8e2ff",
              "on-secondary-container": "#653900",
              "on-tertiary-container": "#0e0017",
              "surface-dim": "#c7dde9",
              "tertiary-container": "#a84fce",
              "on-tertiary-fixed": "#320047",
              "inverse-surface": "#1e333c",
              "primary-container": "#1a73e8",
              "tertiary-fixed": "#f8d8ff",
              "secondary-fixed": "#ffdcbe",
              "on-tertiary": "#ffffff",
              "surface-container-lowest": "#ffffff",
              "on-secondary": "#ffffff",
              "on-error-container": "#93000a",
              "on-secondary-fixed-variant": "#693c00",
              "surface-variant": "#cfe6f2",
              "surface-bright": "#f3faff",
              "background": "#f3faff",
              "surface-container-highest": "#cfe6f2",
              "tertiary-fixed-dim": "#ebb2ff",
              "inverse-on-surface": "#dff4ff",
              "on-tertiary-fixed-variant": "#721199",
              "surface-container-low": "#e6f6ff",
              "on-surface": "#071e27",
              "primary": "#005bbf",
              "on-primary-fixed-variant": "#004493",
              "primary-fixed-dim": "#adc7ff",
              "on-background": "#071e27",
              "surface": "#f3faff",
              "surface-container-high": "#d5ecf8",
              "outline": "#727785",
              "on-surface-variant": "#414754",
              "error": "#ba1a1a",
              "secondary-fixed-dim": "#ffb870",
              "on-secondary-fixed": "#2c1600",
              "tertiary": "#8c33b3",
              "surface-container": "#dbf1fe",
              "on-primary": "#ffffff",
              "outline-variant": "#c1c6d6",
              "on-primary-fixed": "#001a41",
              "error-container": "#ffdad6",
              "surface-tint": "#005bc0",
              "secondary": "#8b5000"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "base": "4px",
              "section-gap": "48px",
              "container-margin": "24px",
              "gutter": "16px"
      },
      "fontFamily": {
              "headline-lg-mobile": ["Inter", "sans-serif"],
              "headline-lg": ["Inter", "sans-serif"],
              "label-sm": ["Inter", "sans-serif"],
              "display-lg": ["Inter", "sans-serif"],
              "body-lg": ["Inter", "sans-serif"],
              "body-md": ["Inter", "sans-serif"],
              "headline-md": ["Inter", "sans-serif"],
              "label-md": ["Inter", "sans-serif"]
      },
      "fontSize": {
              "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
              "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "700"}],
              "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
              "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "800"}],
              "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
              "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
              "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
              "label-md": ["14px", {"lineHeight": "20px", "fontWeight": "600"}]
      },
      animation: {
        'blob': 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
