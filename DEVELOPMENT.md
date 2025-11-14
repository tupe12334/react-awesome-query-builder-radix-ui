# Development Guide

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or pnpm (pnpm recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/tupe12334/react-awesome-query-builder-radix-ui.git
cd react-awesome-query-builder-radix-ui

# Install dependencies
npm install
# or
pnpm install
```

### Building

```bash
# Build the package
npm run build

# This will create:
# - cjs/ - CommonJS modules
# - esm/ - ES modules
# - types/ - TypeScript definitions
```

### Development Workflow

1. Make changes to files in `modules/`
2. Run build to test changes
3. Use the example app to test functionality

### Project Structure

```
react-awesome-query-builder-radix-ui/
├── modules/                 # Source code
│   ├── config/             # Configuration
│   │   └── index.jsx       # Main config with widget definitions
│   ├── widgets/            # Widget implementations
│   │   ├── core/           # Core widgets (Button, Icon, etc.)
│   │   └── value/          # Value widgets (Text, Number, etc.)
│   └── index.jsx           # Main entry point
├── css/                    # Styles
│   └── styles.scss         # Main stylesheet
├── scripts/                # Build scripts
│   └── build-npm.js        # Build script
├── example/                # Example usage
│   └── App.jsx             # Demo app
└── package.json            # Package configuration
```

## Widget Development

### Creating a New Widget

1. Create a new file in `modules/widgets/value/` (or `core/` for core widgets)
2. Export the widget component
3. Add the widget to `modules/widgets/index.js`
4. Update the config in `modules/config/index.jsx`

Example widget:

```jsx
import React from "react";

export default function MyCustomWidget(props) {
  const {
    value,
    setValue,
    config,
    readonly,
    customProps,
  } = props;

  return (
    <input
      type="text"
      value={value || ""}
      onChange={(e) => setValue(e.target.value)}
      disabled={readonly}
      {...customProps}
    />
  );
}
```

### Widget Props

All value widgets receive these standard props:

- `value` - Current value
- `setValue` - Function to update value
- `config` - Query builder config
- `readonly` - Whether widget is read-only
- `placeholder` - Placeholder text
- `customProps` - Custom props from field config

Type-specific props (e.g., `min`, `max` for number widgets) are also passed through.

## Styling

Styles are written in SCSS and compiled to CSS. The main stylesheet is at `css/styles.scss`.

### CSS Variables

You can customize appearance using CSS variables:

```css
:root {
  --button-primary-bg: #3b82f6;
  --button-primary-text: white;
  --select-border-color: #d1d5db;
  /* ... etc */
}
```

### Dark Mode

Dark mode is supported through `prefers-color-scheme` media query and CSS variables.

## Testing

Currently testing is done manually using the example app. Future versions may include automated tests.

## Linting

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint-fix
```

## TypeScript

The package is written in JSX but includes TypeScript definitions. The build process generates type definitions from JSDoc comments and type inference.

## Publishing

Before publishing:

1. Update version in `package.json`
2. Run `npm run build`
3. Test the build
4. Run `npm publish`

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Architecture

This package follows the same patterns as other react-awesome-query-builder UI packages:

- **Core widgets** handle UI infrastructure (buttons, icons, field selectors)
- **Value widgets** handle actual value input (text, numbers, dates, etc.)
- **Config** ties everything together with widget factories and settings
- **Styles** provide consistent appearance

The package re-exports everything from `@react-awesome-query-builder/ui` so users only need to import from this package.
