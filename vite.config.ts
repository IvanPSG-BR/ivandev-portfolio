import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import VitePluginWebpCompress from 'vite-plugin-webp-compress';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), VitePluginWebpCompress()],
    server: {
        watch: {
            usePolling: true,
        },
    },
})