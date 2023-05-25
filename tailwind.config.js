/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-50": "#5f6d7e",
        "gray-700": "#272d37",
        "purple-secondary-600": "#574efa",
        "base-white": "#fff",
        "neutral-700": "#dae0e6",
        "base-black": "#000",
        "default-systemblue-light": "#0057ff",
        "system-background-light-secondary": "#f2f2f7",
        "neutral-200": "#f9f9f9",
        "gradient-overlay-selected-gray": "rgba(116, 122, 139, 0.15)",
        "primary-600": "#437ef7",
      },
      fontFamily: {
        "text-l-semibold": "Inter",
        "default-bold-body": "'SF Pro Text'",
      },
      borderRadius: {
        "8xs": "5px",
        "81xl": "100px",
        "3xs": "10px",
        "6xl": "25px",
        "11xl": "30px",
        "31xl": "50px",
      },
    },
    fontSize: {
      smi: "0.81rem",
      sm: "0.88rem",
      base: "1rem",
      mini: "0.94rem",
      "5xl": "1.5rem",
      xs: "0.75rem",
      xl: "1.25rem",
      mid: "1.06rem",
      "13xl": "2rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
