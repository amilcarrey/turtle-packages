import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

const isCSS = process.env.BUILD_CSS === 'true'

export default defineConfig({
  plugins: isCSS ? [tailwindcss()] : [],
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
    },
  },
  build: isCSS ? {
    // CSS build configuration
    outDir: 'dist',
    emptyOutDir: false,
    cssMinify: true,
    rollupOptions: {
      input: resolve(process.cwd(), 'src/styles/globals.css'),
      output: {
        assetFileNames: 'styles.css',
      },
    },
  } : {
    // Component build configuration
    lib: {
      entry: resolve(process.cwd(), 'src/index.ts'),
      name: 'TurtleUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: [
        'react', 
        'react-dom',
        'react/jsx-runtime',
        '@radix-ui/react-slot',
        '@radix-ui/react-label',
        '@radix-ui/react-scroll-area',
        '@radix-ui/react-select',
        '@radix-ui/react-separator',
        '@radix-ui/react-switch',
        '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group',
        '@radix-ui/react-tooltip',
        'class-variance-authority',
        'clsx',
        'lucide-react',
        'next-themes',
        'sonner'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime'
        }
      }
    }
  }
})