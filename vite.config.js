import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"; // Unable to import SVG with Vite as ReactComponent

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(),react()]
})
