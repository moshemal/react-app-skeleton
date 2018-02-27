const paths = require('react-scripts/config/paths');

module.exports = function override(config, env) {
    //change configurations for both production and development
    Object.assign(config.resolve.alias, alias);
    
    if (env === 'production') {
        //enter production specific configurations
    } else {
        //enter development specific configurations
    }

    return config;
};

const alias = {
    'app-src':          `${paths.appSrc}`,
    'app-components':   `${paths.appSrc}/components`,
    'app-scenes':       `${paths.appSrc}/scenes`,
    'app-services':     `${paths.appSrc}/services`
};