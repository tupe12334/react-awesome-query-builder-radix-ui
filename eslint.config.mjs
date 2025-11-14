import agentConfig from "eslint-config-agent";
import packageJson from "eslint-plugin-package-json";

export default [
  ...agentConfig,
  {
    // Relax some strict rules for this React component library
    rules: {
      // Allow namespace imports (common in React libraries)
      "import/no-namespace": "off",
      // Allow optional chaining (modern JavaScript feature)
      "no-optional-chaining/no-optional-chaining": "off",
      // Relax file length restrictions for complex components
      "max-lines": ["warn", { max: 200 }],
      "max-lines-per-function": ["warn", { max: 100 }],
      // Allow export syntax used in index files
      "no-restricted-syntax": "off",
      "single-export/single-export": "off",
      // Allow default parameters (common in React)
      "default/no-default-params": "off",
      // Relax security rules for known safe patterns
      "security/detect-object-injection": "warn",
      "security/detect-unsafe-regex": "warn",
      // Allow React patterns without className (Radix UI components)
      "custom/jsx-classname-required": "off",
      // Allow import ordering as is (TypeScript definition files)
      "import/first": "warn",
    },
  },
  {
    // Package.json validation for publishable packages
    files: ["**/package.json"],
    plugins: {
      "package-json": packageJson,
    },
    processor: "package-json/package-json",
    rules: {
      "package-json/valid-package-def": "error",
      "package-json/valid-name": "error",
      "package-json/valid-version": "error",
      "package-json/sort-collections": [
        "error",
        ["dependencies", "devDependencies", "peerDependencies", "scripts"],
      ],
    },
    settings: {
      packageJson: {
        enforceForPrivate: false, // Only enforce for public packages
      },
    },
  },
  {
    ignores: [
      "dist/**",
      "build/**",
      "cjs/**",
      "esm/**",
      "types/**",
      "node_modules/**",
      "*.config.js",
      "*.config.mjs",
      ".eslintrc.js",
      "example/**",
      "scripts/**",
    ],
  },
];
