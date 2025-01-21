import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { resolvePath } from './pathResolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // Auto-import plugin for composable functions
    AutoImport({
      imports: ['vue'],
      dirs: [resolvePath('./src/composables')], // The directory where the composable functions are located
      dts: resolvePath('./src/auto-imports.d.ts'), // TypeScript file for auto-import
    }),
    // Auto-import plugin for components
    Components({
      dirs: [resolvePath('./src/components')], // The directory where the components are located
      dts: resolvePath('./src/components.d.ts'), // TypeScript file for auto-import
    }),
  ],
  resolve: {
    alias: {
      '@': resolvePath('./src'), // Alias for the src directory
    },
  },
  // Library build configuration
  build: {
    lib: {
      // Entry point for the library (src/index.ts)
      entry: resolvePath('./src/index.ts'),
      // Library name (exposed globally)
      name: 'LyraUI',
      // Output file format (e.g., my-ui-library.umd.js and my-ui-library.es.js)
      fileName: (format) => `lyra-ui.${format}.js`,
    },
    // Rollup options (for bundling and optimization)
    rollupOptions: {
      // External dependencies that should not be bundled (e.g., Vue)
      external: ['vue'],
      // Global variables for external dependencies
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
