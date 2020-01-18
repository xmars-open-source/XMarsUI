module.exports = function(context, options) {
    return {
      name: 'webpack-plugin',
      configureWebpack(config, isServer, utils) {
        // const {getCacheLoader} = utils;
        // config.module.rules.push({
        //   test: /\.foo$/,
        //   use: [getCacheLoader(isServer), 'my-custom-webpack-loader'],
        // });
        return {
            module: {
                rules: [
                    {
                        test: /\.(png|svg|jpg|gif)$/,
                        use: [
                          'file-loader',
                        ],
                    },
                    {
                        test: /\.(woff|woff2|eot|ttf|otf)$/,
                        use: [
                            'file-loader',
                        ],
                    }, 
                ]
            }
        };
      },
    };
  };