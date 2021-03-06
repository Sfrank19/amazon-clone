module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  "parserOptions": {"ecmaVersion": 2017},
  "extends":
    "eslint:recommended",
  "plugins": [
    "promise"
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
