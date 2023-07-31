import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  // 禁用预检样式 (样式重置)
  preflight: false,
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096'
        }
      }
    }
  },
  plugins: [formsPlugin]
})
