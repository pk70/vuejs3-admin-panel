import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { Server } from 'node:http'

// https://vitejs.dev/config/
export default defineConfig({

    plugins: [vue(), vueJsx()],

    server: {
        host: "localhost",
        port: 3000,
        //strictPort: true,
        hmr: {
            port: 3000,
        },
        watch: {
            ignored: ['!**/node_modules/your-package-name/**'],
            usePolling: true,
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        }
    },
    build: {
        // entry: 'src/main.js',
        // outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            output: {
                // Default
                // dir: 'dist',
                // With laravel: laravel-app/public/js
                dir: '../public/js',
                entryFileNames: 'app-[name].js',
                assetFileNames: 'app-[name].css',
                chunkFileNames: "chunk-[name].js",
                manualChunks: undefined,
            }
        }
    }

})