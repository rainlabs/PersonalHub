import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return {
    plugins: [react()],
    build: {
      outDir: './build/client'
    },
    server: {
      port: Number(process.env.VITE_PORT),
      host: true
    },
    ssr: {
      format: 'cjs'
    }
  }
})
