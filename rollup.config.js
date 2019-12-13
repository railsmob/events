import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default [
  // CommonJS
  {
    input: 'index.js',
    output: {
      file: 'lib/index.js',
      format: 'cjs',
      indent: false,
    },
    plugins: [babel()],
  },
  // ES
  {
    input: 'index.js',
    output: {
      file: 'es/index.js',
      format: 'es',
      indent: false,
    },
    plugins: [babel()],
  },
  // UMD Dev
  {
    input: 'index.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: 'RailsmobEvents',
      indent: false,
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
  // UMD Prod
  {
    input: 'index.js',
    output: {
      file: 'dist/index.min.js',
      format: 'umd',
      name: 'RailsmobEvents',
      indent: false,
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      terser(),
    ],
  },
];
