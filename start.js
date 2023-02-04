'use strict';
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.env.TEST_SCRIPT = process.argv[2];

process.on('unhandledRejection', error => {
    throw error;
});

const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

const stats = {
    all: undefined,
    assets: false,
    assetsSort: 'size',
    builtAt: false,
    cached: false,
    cachedAssets: false,
    children: false,
    chunks: false,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    chunksSort: 'size',
    colors: true,
    depth: false,
    entrypoints: false,
    env: false,
    errors: true,
    errorDetails: true,
    hash: false,
    maxModules: 1500,
    modules: false,
    modulesSort: 'size',
    moduleTrace: false,
    performance: false,
    providedExports: false,
    publicPath: false,
    reasons: false,
    source: false,
    timings: false,
    usedExports: false,
    version: false,
    warnings: true
};

const options = {
    hot: true,
    host: 'localhost',
    port: '3000',
    open: true,
    stats
};

const server = new DevServer(webpack(config));

server.listen(options.port, options.host, error => {
    if (error) {
        console.log(error);
    }

    console.log(`
    	view app at http://localhost:${options.port}
    `);
});
