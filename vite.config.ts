import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {viteStaticCopy} from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/locales/**/*',
            dest: 'locales'
          }
        ]
      })
  ],
  server: {
    port: 3000,
  }
})
