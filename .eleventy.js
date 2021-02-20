module.exports = (config) => {
  config.addCollection("status-updates", (coll) => {
    const statusCollection = coll.getFilteredByGlob("src/status-updates/*.md");
    return statusCollection;
  });
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
