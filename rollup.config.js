import babel from 'rollup-plugin-babel';

module.exports = {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};