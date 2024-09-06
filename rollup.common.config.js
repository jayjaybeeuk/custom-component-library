import postcss from 'rollup-plugin-postcss';
import { cssModules } from 'rollup-plugin-css-modules';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: './src/index.jsx', // Adjust this to your actual entry point
  output: [
    {
      file: 'lib/index.cjs.js', // Output for CommonJS
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'lib/index.esm.js', // Output for ES Modules
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    typescript({
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      exclude: [
        './node_modules/**/*',
        'src/**/__tests__/**/*',
        '**/*.stories.tsx',
      ],
      tsconfig: './tsconfig.json', // Ensure this points to your TypeScript configuration
    }),
    commonjs(),
    postcss({
      extract: true, // Extract the CSS into a separate file
      modules: true, // Enable CSS Modules
      minimize: true, // Minifies the CSS
      use: ['sass'], // Optional: if you want to use Sass
    }),
    cssModules(), // Enable CSS Modules
    terser(), // Minify JS for production
  ],
  external: ['react', 'react-dom'], // Mark React as an external dependency
};
