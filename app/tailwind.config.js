/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'menuMobile': "url('./src/assets/images/bg-sidebar-mobile.svg')",
        'menuDesktop': "url('./src/assets/images/bg-sidebar-desktop.svg')",
      }

    },
  },
  plugins: [],
}
