import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 会以 /<repo>/ 的子路径部署。
// 这里设置 base，避免资源路径 404。
export default defineConfig({
  base: '/yiyu-postoffice-ui/',
  plugins: [react()],
})
