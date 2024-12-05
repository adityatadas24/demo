import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure the build output goes to the 'dist' folder
    rollupOptions: {
      input: 'index.html',  // Make sure Vite knows to use index.html as the entry point
    }
  },
})
