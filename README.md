# react-awesome-query-builder-radix-ui

<p align="center">
  <a href="https://www.radix-ui.com/" target="_blank"><img src="https://avatars.githubusercontent.com/u/75042455?s=200&v=4" width="100" alt="Radix UI Logo" /></a>
</p>

<p align="center">
  <strong>Radix UI widgets for <a href="https://github.com/ukrbublik/react-awesome-query-builder">react-awesome-query-builder</a></strong>
</p>

<p align="center">
  Build beautiful, accessible query builders with Radix UI primitives
</p>

---

## Features

✨ **Built with Radix UI** - Leverages accessible, unstyled primitives
🎨 **Highly Customizable** - Full control via CSS variables
🌙 **Dark Mode** - Automatic dark mode support
♿ **Accessible** - WCAG compliant components
📦 **Tree-shakeable** - Optimized bundle size
⚡ **Fast** - Optimized for performance
🔧 **TypeScript** - Full type definitions included
🎯 **Production Ready** - Battle-tested patterns from react-awesome-query-builder

## Installation

```bash
npm install react-awesome-query-builder-radix-ui
```

### Peer Dependencies

Install the required Radix UI primitives:

```bash
npm install @radix-ui/react-select @radix-ui/react-switch @radix-ui/react-slider \
  @radix-ui/react-checkbox @radix-ui/react-toggle @radix-ui/react-toggle-group \
  @radix-ui/react-dialog @radix-ui/react-popover @radix-ui/react-dropdown-menu \
  @radix-ui/react-icons
```

Or install all at once:

```bash
npm install react-awesome-query-builder-radix-ui \
  @radix-ui/react-{select,switch,slider,checkbox,toggle,toggle-group,dialog,popover,dropdown-menu,icons}
```

## Quick Start

```jsx
import React, { useState } from "react";
import {
  Query,
  Builder,
  Utils as QbUtils,
  RadixConfig,
} from "react-awesome-query-builder-radix-ui";
import "react-awesome-query-builder-radix-ui/css/styles.css";

const config = {
  ...RadixConfig,
  fields: {
    name: {
      label: "Name",
      type: "text",
    },
    age: {
      label: "Age",
      type: "number",
      fieldSettings: {
        min: 0,
        max: 120,
      },
    },
    premium: {
      label: "Premium User",
      type: "boolean",
    },
  },
};

function App() {
  const [tree, setTree] = useState(
    QbUtils.loadTree({ id: QbUtils.uuid(), type: "group" })
  );

  const onChange = immutableTree => {
    setTree(immutableTree);
    console.log("Query:", QbUtils.sqlFormat(immutableTree, config));
  };

  return (
    <Query
      {...config}
      value={tree}
      onChange={onChange}
      renderBuilder={props => (
        <div className="query-builder qb-lite">
          <Builder {...props} />
        </div>
      )}
    />
  );
}
```

## Widgets

### Core Widgets

| Widget              | Description           | Radix Component         |
| ------------------- | --------------------- | ----------------------- |
| `RadixButton`       | Action buttons        | Custom styled button    |
| `RadixButtonGroup`  | Button grouping       | `ToggleGroup`           |
| `RadixIcon`         | Icons                 | `@radix-ui/react-icons` |
| `RadixConjs`        | AND/OR conjunctions   | `ToggleGroup`           |
| `RadixFieldSelect`  | Field selector        | `Select`                |
| `RadixValueSources` | Value source selector | `ToggleGroup`           |
| `RadixConfirm`      | Confirmation dialogs  | `Dialog`                |

### Value Widgets

| Widget             | Description       | Type          | Radix Component        |
| ------------------ | ----------------- | ------------- | ---------------------- |
| `RadixText`        | Text input        | `text`        | Native input           |
| `RadixTextArea`    | Multi-line text   | `text`        | Native textarea        |
| `RadixNumber`      | Number input      | `number`      | Native input           |
| `RadixPrice`       | Formatted numbers | `number`      | `react-number-format`  |
| `RadixBoolean`     | Boolean toggle    | `boolean`     | `Switch`               |
| `RadixSelect`      | Single select     | `select`      | `Select`               |
| `RadixMultiSelect` | Multi-select      | `multiselect` | `Popover` + `Checkbox` |
| `RadixSlider`      | Range slider      | `number`      | `Slider`               |
| `RadixRangeSlider` | Two-thumb slider  | `number`      | `Slider`               |
| `RadixDate`        | Date picker       | `date`        | Native input           |
| `RadixTime`        | Time picker       | `time`        | Native input           |
| `RadixDateTime`    | Date+time picker  | `datetime`    | Native input           |

## Customization

### CSS Variables

Customize the appearance using CSS variables:

```css
:root {
  /* Buttons */
  --button-primary-bg: #3b82f6;
  --button-primary-text: white;
  --button-danger-bg: #ef4444;
  --button-border-color: #d1d5db;

  /* Inputs */
  --input-bg-color: white;
  --input-border-color: #d1d5db;
  --input-focus-color: #3b82f6;

  /* Selects */
  --select-bg-color: white;
  --select-border-color: #d1d5db;
  --select-item-highlighted-bg: #3b82f6;

  /* Conjunctions */
  --conj-active-bg-color: #3b82f6;
  --conj-active-text-color: white;

  /* Slider */
  --slider-range-bg: #3b82f6;
  --slider-track-bg: #e5e7eb;
  --slider-thumb-border: #3b82f6;

  /* And many more... */
}
```

### Dark Mode

Dark mode is automatically applied via `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode variables are automatically applied */
}
```

Or force dark mode:

```css
[data-theme="dark"] {
  --button-bg-color: #1f2937;
  --input-bg-color: #1f2937;
  /* ... */
}
```

## Advanced Usage

### Custom Field Configuration

```jsx
const config = {
  ...RadixConfig,
  fields: {
    price: {
      label: "Price",
      type: "number",
      preferWidgets: ["price"], // Use price widget
      fieldSettings: {
        prefix: "$",
        thousandSeparator: ",",
        decimalScale: 2,
      },
    },
    rating: {
      label: "Rating",
      type: "number",
      preferWidgets: ["slider"],
      fieldSettings: {
        min: 0,
        max: 5,
        step: 0.5,
      },
    },
    tags: {
      label: "Tags",
      type: "multiselect",
      fieldSettings: {
        listValues: [
          { value: "featured", title: "Featured" },
          { value: "new", title: "New" },
          { value: "sale", title: "On Sale" },
        ],
      },
    },
  },
};
```

### Export to Multiple Formats

```jsx
import { Utils as QbUtils } from "react-awesome-query-builder-radix-ui";

// SQL
const sql = QbUtils.sqlFormat(tree, config);
// => "name LIKE '%John%' AND age > 18"

// MongoDB
const mongo = QbUtils.mongodbFormat(tree, config);
// => { $and: [{ name: { $regex: 'John' } }, { age: { $gt: 18 } }] }

// JsonLogic
const jsonLogic = QbUtils.jsonLogicFormat(tree, config);
// => { and: [{ in: ["John", { var: "name" }] }, { ">": [{ var: "age" }, 18] }] }

// SpEL (Spring Expression Language)
const spel = QbUtils.spelFormat(tree, config);
// => "name matches '.*John.*' && age > 18"

// Elasticsearch
const es = QbUtils.elasticSearchFormat(tree, config);
```

### Import from JsonLogic

```jsx
const jsonLogic = {
  and: [{ "==": [{ var: "name" }, "John"] }, { ">": [{ var: "age" }, 18] }],
};

const tree = QbUtils.loadFromJsonLogic(jsonLogic, config);
```

### Validation

```jsx
// Check if tree is valid
const isValid = QbUtils.isValidTree(tree, config);

// Get validation errors
const errors = QbUtils.validateTree(tree, config);
console.log(errors); // Array of error objects

// Sanitize tree (fix errors automatically)
const { fixedTree, fixedErrors, nonFixedErrors } = QbUtils.sanitizeTree(
  tree,
  config
);
```

### Confirmation Dialogs

```jsx
import { useRadixConfirm } from "react-awesome-query-builder-radix-ui";

function MyComponent() {
  const [confirm, ConfirmDialog] = useRadixConfirm();

  const handleDelete = async () => {
    const result = await confirm({
      title: "Delete Rule",
      content: "Are you sure you want to delete this rule?",
      okText: "Delete",
      cancelText: "Cancel",
    });

    if (result) {
      // User confirmed
    }
  };

  return (
    <>
      <button onClick={handleDelete}>Delete</button>
      {ConfirmDialog}
    </>
  );
}
```

## Examples

See the [`example`](./example) directory for a complete working example.

To run the example:

```bash
cd example
npm install
npm run dev
```

## API

This package re-exports everything from `@react-awesome-query-builder/ui`, plus:

- `RadixConfig` - Configuration object with Radix widgets
- `RadixWidgets` - Object containing all widget components
- `useRadixConfirm` - Hook for confirmation dialogs

For the full API, see the [react-awesome-query-builder documentation](https://github.com/ukrbublik/react-awesome-query-builder).

## TypeScript

Full TypeScript support is included:

```tsx
import type {
  Config,
  ImmutableTree,
} from "react-awesome-query-builder-radix-ui";

const config: Config = {
  // ...
};

const [tree, setTree] = useState<ImmutableTree>(/* ... */);
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please see [DEVELOPMENT.md](./DEVELOPMENT.md) for development instructions.

## License

MIT © [Your Name]

## Acknowledgments

- [react-awesome-query-builder](https://github.com/ukrbublik/react-awesome-query-builder) - The core library
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- All contributors and users

## Related

- [@react-awesome-query-builder/antd](https://www.npmjs.com/package/@react-awesome-query-builder/antd) - Ant Design widgets
- [@react-awesome-query-builder/mui](https://www.npmjs.com/package/@react-awesome-query-builder/mui) - Material-UI widgets
- [@react-awesome-query-builder/bootstrap](https://www.npmjs.com/package/@react-awesome-query-builder/bootstrap) - Bootstrap widgets
- [@react-awesome-query-builder/fluent](https://www.npmjs.com/package/@react-awesome-query-builder/fluent) - Fluent UI widgets
