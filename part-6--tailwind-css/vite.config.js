import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})


// why this file is mandatory? because vite needs to know that we are using tailwindcss in our project. so we need to add this file in our project. 