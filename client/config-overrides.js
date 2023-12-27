const TerserPlugin = require("terser-webpack-plugin");

module.exports = function override(config, env) {
    // Do stuff with the webpack config...
    if (env === "production") {
        config.optimization.minimizer = [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true,
                },
            }),
        ];
    }
    return config;
};
