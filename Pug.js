/**
 * This file represents an example component interface
 * for Mix. All new components can be "inserted" into
 * Mix, like so:
 *
 * // webpack.mix.js
 *
 * mix.extend('foo', new Example());
 *
 * mix.foo();
 */

 const HtmlWebpackPlugin = require("html-webpack-plugin");
//  const path = require('path');

class Pug {
    /**
     * The optional name to be used when called by Mix.
     * Defaults to the class name, lowercased.
     *
     * Ex: mix.example();
     *
     * @return {String|Array}
     */
    name() {
        // Example:
        return ['pug', 'pug'];
        // return ['example', 'alias'];
    }

    /**
     * All dependencies that should be installed by Mix.
     *
     * @return {Array}
     */
    dependencies() {
        // Example:
        return ['pug-loader', 'pug-plain-loader', 'pug'];
    }

    /**
     * Register the component.
     *
     * When your component is called, all user parameters
     * will be passed to this method.
     *
     * Ex: register(src, output) {}
     * Ex: mix.yourPlugin('src/path', 'output/path');
     *
     * @param  {*} ...params
     * @return {void}
     *
     */
    register(src, output) {

            return this.output = output;

        // Example:
        // this.config = { proxy: arg };
    }

    /**
     * Boot the component. This method is triggered after the
     * user's webpack.mix.js file has executed.
     */
    boot() {
        // Example:
        // if (Config.options.foo) {}
    }

    /**
     * Append to the master Mix webpack entry object.
     *
     * @param  {Entry} entry
     * @return {void}
     */
    webpackEntry(entry) {
        // Example:
        // entry.add('foo', 'bar');
    }

    /**
     * Rules to be merged with the master webpack loaders.
     *
     * @return {Array|Object}
     */
    webpackRules() {
        return [
            {
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: ["pug-plain-loader"]
                    },
                    {
                        use: ["pug-loader"]
                    }
                ]
            },
        ];
        // Example:
        // return {
        //     test: /\.less$/,
        //     loaders: ['...']
        // });
    }

    /*
     * Plugins to be merged with the master webpack config.
     *
     * @return {Array|Object}
     */
    webpackPlugins() {
        let newPath = path.resolve(this.output);
        // console.log(src);
        // console.log(output);
        // console.log(newFile);

        // Example:
        // return new webpack.ProvidePlugin(this.aliases);
        return new HtmlWebpackPlugin({
            publicPath: newPath,
            filename: 'index.html'
        });
    }

    /**
     * Override the generated webpack configuration.
     *
     * @param  {Object} webpackConfig
     * @return {void}
     */
    webpackConfig(webpackConfig) {
        // Example:
        webpackConfig.resolve.extensions.push('.pug');
    }

    /**
     * Babel config to be merged with Mix's defaults.
     *
     * @return {Object}
     */
    babelConfig() {
        // Example:
        // return { presets: ['@babel/preset-react'] };
    }
}

// Usage:
// mix.extend('example', new Example());
module.exports = Pug;
