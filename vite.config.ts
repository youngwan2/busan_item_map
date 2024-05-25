import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react"
import path from 'path'

export default defineConfig({
    build: {
        outDir: 'build',
    },
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },

        ]
    }
})