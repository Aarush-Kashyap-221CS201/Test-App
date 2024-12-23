import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global test functions like `describe`, `it`, etc.
    environment: "jsdom", // Sets the environment to jsdom for DOM simulation.
  },
})
