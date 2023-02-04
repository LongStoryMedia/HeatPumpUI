'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', error => {
    throw error;
});

const webpack = require('webpack');

const webpackConfig = require(`./webpack.config.${process.argv[2]}`);

webpack(webpackConfig, (error, stats) => {
    if (error) {
        throw error;
    }

    console.log(stats.toString({colors: true}));
});
