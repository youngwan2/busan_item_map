import { defineConfig } from 'vitest/config'
import react from "@vitejs/plugin-react"
import path from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input:'src/index.tsx',
            external: (id) => {
                // 파일 경로에 'test'가 포함된 파일을 외부 모듈로 간주하여 빌드에서 제외합니다.
                return id.includes('.test.');
              }
        },
        outDir: 'build',
    },
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },

        ]
    },
    preview : {
        port:8080
    },
    test: {
        globals:true,
        environment:'jsdom'
    }
})