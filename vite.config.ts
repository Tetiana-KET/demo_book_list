import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
		modules: {
			localsConvention: 'camelCase',
		},
	},
	build: {
		minify: 'esbuild',
	},
	resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
			'@consts': path.resolve(__dirname, 'src/consts'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@pages': path.resolve(__dirname, 'src/pages')
    }
  }
})
