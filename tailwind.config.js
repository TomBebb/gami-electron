import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/renderer/**/*.{html,vue}'],

  theme: {
    extend: {}
  },
  plugins: [daisyui]
}
