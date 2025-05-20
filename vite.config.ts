import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { federation } from '@module-federation/vite'

export default defineConfig({
  server: {
    port: 5001,
    cors: true,
  },
  preview: {
    port: 5001,
    cors: true,
  },
  plugins: [
    svelte(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './MemeGenerator': './src/MemeGenerator.svelte',
      },
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
