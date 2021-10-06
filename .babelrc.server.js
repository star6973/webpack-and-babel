const config = require('./.babelrc.common.js');
config.plugins.push('@babel/plugin-transform-modules-commonjs');
config.plugins.push('@babel/plugin-transform-runtime');

module.exports = config;
