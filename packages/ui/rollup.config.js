import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const alias = require('@rollup/plugin-alias');

const pkg = require('./package.json');

const external = [
   ...Object.keys(pkg.peerDependencies || {}),
   ...Object.keys(pkg.dependencies || {}),
   'react/jsx-runtime'
];

export default {
   input: 'src/index.ts',
   external,
   output: [
      {
         file: pkg.main,
         format: 'cjs',
         sourcemap: true,
      },
      {
         file: pkg.module,
         format: 'esm',
         sourcemap: true,
      },
   ],
   plugins: [
      alias({
         entries: [
            { find: '@', replacement: path.resolve(__dirname, 'src') }
         ]
      }),
      resolve({
         browser: true,
      }),
      commonjs(),
      typescript({
         tsconfig: './tsconfig.json',
         declaration: false,
         declarationMap: false,
         noEmit: true,
         outDir: 'dist',
      }),
   ],
}; 