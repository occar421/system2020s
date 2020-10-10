module.exports = {
  stories: ["../**/*.stories.@(mdx|js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-actions", "@storybook/addon-docs"],
  webpackFinal: async (config) => {
    const postCssLoader = config.module.rules
      .find(({ test }) => test.test(".css"))
      .use.find((ruleSet) =>
        (typeof ruleSet === "string" ? ruleSet : ruleSet.loader).includes(
          "postcss-loader"
        )
      );

    postCssLoader.options.plugins = [
      require("postcss-prepend-selector")({ selector: "center " }),
    ]; // override

    return config;
  },
};
