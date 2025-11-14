const env = process.env.BABEL_ENV || process.env.NODE_ENV;

const moduleFormat = env === "esm" ? false : "commonjs";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "18",
        },
        modules: moduleFormat,
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-class-properties",
    "@babel/plugin-transform-private-methods",
    "@babel/plugin-transform-private-property-in-object",
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true,
        useESModules: env === "esm",
      },
    ],
  ],
  env: {
    cjs: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "commonjs",
          },
        ],
      ],
    },
    esm: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false,
          },
        ],
      ],
    },
  },
};
