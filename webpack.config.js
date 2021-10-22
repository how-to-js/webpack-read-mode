module.exports = function (env, argv) {
  return {
    devtool: argv.mode === "production" ? "source-map" : "eval",
  };
};
