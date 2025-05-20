import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: {
    port: 5001,
  },
  plugins: [
    svelte(),
    federation({
      name: 'svelteMeme',
      filename: 'remoteEntry.js',
      exposes: {
        './MemeGenerator': './src/MemeGenerator.svelte',
      },
      shared: [],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
