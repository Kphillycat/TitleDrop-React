const path = require("path");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, { mode }) =>
  webpackMerge(
    {
      mode,
      entry: "./src/index",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
      },
      resolve: {
        extensions: [".js", ".jsx", ".json"]
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: "Title Drop",
          favicon: "lab.ico",
          template: "index_tmp.html"
        })
      ],
      stats: {
        colors: true,
        reasons: true,
        chunks: false
      },
      module: {
        rules: [
          {
            enforce: "pre",
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/,
            options: {
              quiet: true,
              failOnWarning: true
            }
          },
          {
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options: {
              presets: ["react"]
            }
          }
        ]
      }
    },
    modeConfig(mode)
  );
