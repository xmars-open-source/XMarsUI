// Build for WEB
const path = require('path');

module.exports = {
    entry: './components/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts'],
    },
    output: {
      filename: 'bundle.min.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'XMarsUI',
      libraryTarget: 'umd',
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  };