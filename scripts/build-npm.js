const { globbySync } = require("globby");
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

const rootDir = path.resolve(__dirname, "..");
const modulesDir = path.join(rootDir, "modules");
const cjsDir = path.join(rootDir, "cjs");
const esmDir = path.join(rootDir, "esm");
const typesDir = path.join(rootDir, "types");

console.log("Building @react-awesome-query-builder/radix-ui...");

// Clean previous builds
console.log("Cleaning previous builds...");
[cjsDir, esmDir, typesDir].forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true });
  }
});

// Find all source files
const sourceFiles = globbySync(
  [
    "modules/**/*.{js,jsx,ts,tsx}",
    "!modules/**/*.test.{js,jsx,ts,tsx}",
    "!modules/**/__tests__/**",
  ],
  { cwd: rootDir }
);

console.log(`Found ${sourceFiles.length} source files`);

// Build CJS
console.log("\nBuilding CommonJS...");
execSync(
  `babel ${modulesDir} --out-dir ${cjsDir} --extensions ".js,.jsx,.ts,.tsx" --ignore "**/*.d.ts" --copy-files`,
  {
    cwd: rootDir,
    stdio: "inherit",
    env: {
      ...process.env,
      BABEL_ENV: "cjs",
    },
  }
);

// Build ESM
console.log("\nBuilding ES Modules...");
execSync(
  `babel ${modulesDir} --out-dir ${esmDir} --extensions ".js,.jsx,.ts,.tsx" --ignore "**/*.d.ts" --copy-files`,
  {
    cwd: rootDir,
    stdio: "inherit",
    env: {
      ...process.env,
      BABEL_ENV: "esm",
    },
  }
);

// Generate TypeScript definitions
console.log("\nGenerating TypeScript definitions...");
try {
  execSync("npm run tsc-emit-types", {
    cwd: rootDir,
    stdio: "inherit",
  });
} catch (error) {
  console.warn(
    "Warning: TypeScript definitions generation had errors, but continuing..."
  );
}

console.log("\nBuild completed successfully!");
