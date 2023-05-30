
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
const name = 'entity'
import path from 'path'
export default defineConfig(({ mode }) => {
    console.log('hi嗯哼IE')
    return {
        base: 'http://localhost:8082',
        plugins: [
            vue(),
            qiankun(
                'entity', // 微应用名称，与主应用注册的微应用保持一致
                { useDevMode: true }
            ),
        ],
        server: {
            port: 8032,
            // 跨域
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        },
        build: {
            lib: {
                name,
                entry: path.resolve(__dirname, 'src/index.tsx'),
                formats: ['umd'],
            },
        },
    }
})