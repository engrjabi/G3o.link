const webpack = require("webpack");

module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  publicPath: process.env.NODE_ENV === "production" ? "/G3o.link/" : "/",
};
