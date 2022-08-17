module.exports = {
  linters: {
    "**/*.+(js|css|graphql)": [
      "eslint --fix",
      "prettier --write",
      "stylelint app/**/*.js",
      "git add",
    ],
  },
};
