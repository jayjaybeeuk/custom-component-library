import postcss from 'rollup-plugin-postcss';
import { cssModules } from 'rollup-plugin-css-modules';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.jsx', // Adjust this to your actual entry point
  output: {
    dir: 'lib',
    format: 'cjs', // CommonJS format for libraries
  },
  plugins: [
    resolve(),
    typescript({
      include: ['./src/**/*.ts', './src/**/*.tsx'], // Include TypeScript files
      exclude: ['./node_modules/**/*','src/**/__tests__/**/*'], // Exclude node_modules
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
  ],
  external: ['react', 'react-dom'], // Mark React as an external dependency
};
