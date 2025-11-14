module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "plugins": [
    "react",
    "import",
  ],
  "parserOptions": {
    "ecmaVersion": 11,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module",
  },
  "settings": {
    "react": {
      "version": "detect"
    },
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["warn", "double", { "avoidEscape": true }],
    "semi": ["error", "always"],
    "no-unused-vars": ["warn", {
      "args": "all",
      "argsIgnorePattern": "^_",
      "ignoreRestSiblings": true,
      "varsIgnorePattern": "^_"
    }],
    "react/display-name": ["off"],
    "react/prop-types": ["off"],
  },
};
