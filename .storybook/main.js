const wConfig = require('../webpack.config');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    // do mutation to the config
    
    config.module.rules = [...config.module.rules, ...wConfig.module.rules];
    config.resolve.extensions = [...config.resolve.extensions, ...wConfig.resolve.extensions];
    
    return config;
  },
};
