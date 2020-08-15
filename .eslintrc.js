module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": 0,
    quotes: ["error", "double"],
    "comma-dangle": ["error", "never"],
    "object-curly-newline": ["error", { multiline: true }],
    "no-restricted-syntax": ["error", "WithStatement",]
  },
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
};
