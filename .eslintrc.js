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
    "no-restricted-syntax": ["error", "WithStatement",],
    "no-console": ["error", { allow: ["log"] }],
    "no-unused-expressions": ["error", { "allowShortCircuit": true }],
    "react/jsx-one-expression-per-line": [2, { "allow": "none" }],
    "no-param-reassign": 0,
    "no-underscore-dangle": ["error", { "allow": ["_id"] }]
  },
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
};
