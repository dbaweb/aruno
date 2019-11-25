module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/aruno/" : "/",
  chainWebpack: config => {
    config.performance.maxEntrypointSize(4000000).maxAssetSize(4000000);
  }
};
