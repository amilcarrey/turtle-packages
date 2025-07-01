import { defineConfig } from 'tsup'

export default defineConfig([
  // Main index
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    external: ['react', 'wagmi', '@rainbow-me/rainbowkit', 'viem'],
    clean: true,
    sourcemap: true,
  },
  // Wagmi adapter
  {
    entry: ['src/adapters/wagmi.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    external: ['react', 'wagmi', '@rainbow-me/rainbowkit', 'viem'],
    outDir: 'dist',
    clean: false,
    sourcemap: true,
  }
])