function getStyleUse(bundleFilename) {
    return [
      {
        loader: 'file-loader',
        options: {
          name: bundleFilename,
        },
      },
      { loader: 'extract-loader' },
      { loader: 'css-loader' },
      {
        loader: 'sass-loader',
        options: {
          includePaths: ['./node_modules'],
          implementation: require('dart-sass'),
          fiber: require('fibers'),
    }
      },
    ];
  }
  
  module.exports = [
    {
      entry: './src/index.scss',
      output: {
        // This is necessary for webpack to compile, but we never reference this js file.
        filename: 'style-bundle-app.js',
      },
      module: {
        rules: [{
          test: /index.scss$/,
          use: getStyleUse('bundle-index.css')
        }]
      },
    },
    {
      entry: "./src/app.js",
      output: {
        filename: "bundle-app.js"
      },
      module: {
        loaders: [{
          test: /app.js$/,
          loader: 'babel-loader',
          query: {presets: ['env']}
        }]
      },
    }
  ];