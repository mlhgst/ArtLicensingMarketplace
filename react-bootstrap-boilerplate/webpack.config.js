var path = require('path');

  module.exports = {
    context: process.cwd(),
    entry: {
      script: './build/App.jsx'
  },
    output: {
      path: './public',
      filename: "[name].js",
      chunkFilename: "[id].js"
    },

    devtools: 'eval-source-map',
    node:{
      fs:"empty"
    },
    module: {
      loaders: [
        { test: /\.css$/,
          loader: 'style-loader!css-loader' },
        { test: /\.jsx$/, exclude: (/node_modules/), loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        },
          {loader:'json-loader',
          test: /\.json$/
          }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx']
    }
  };
