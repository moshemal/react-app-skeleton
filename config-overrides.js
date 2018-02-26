/* config-overrides.js */

module.exports = function override(config, env) {
    //do stuff with the webpack config...

    if (env === 'production') {
        console.log('⚡ Production build with Preact');
    }

    return config;
};