import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	build: {
		outDir: 'dist',
		lib: {
			name: 'Test React Component Library',
			entry: {
				appContext: './src/Context/AppContext.jsx'
			},
			formats: ['cjs'],
		},
		rollupOptions: {
			external: ['react'],
		},
	},
	plugins: [libInjectCss()],
});
