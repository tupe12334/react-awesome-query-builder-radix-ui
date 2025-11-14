import React, { useState } from "react";
import {
  Query,
  Builder,
  Utils as QbUtils,
  RadixConfig,
} from "react-awesome-query-builder-radix-ui";
import "../css/styles.css";

// Define your fields
const fields = {
  qty: {
    label: "Quantity",
    type: "number",
    fieldSettings: {
      min: 0,
      max: 100,
    },
    valueSources: ["value"],
    preferWidgets: ["number"],
  },
  price: {
    label: "Price",
    type: "number",
    valueSources: ["value"],
    fieldSettings: {
      min: 10,
      max: 1000,
    },
    preferWidgets: ["slider"],
  },
  name: {
    label: "Name",
    type: "text",
    valueSources: ["value"],
  },
  description: {
    label: "Description",
    type: "text",
    valueSources: ["value"],
    preferWidgets: ["textarea"],
  },
  color: {
    label: "Color",
    type: "select",
    valueSources: ["value"],
    fieldSettings: {
      listValues: [
        { value: "yellow", title: "Yellow" },
        { value: "green", title: "Green" },
        { value: "orange", title: "Orange" },
        { value: "blue", title: "Blue" },
        { value: "red", title: "Red" },
      ],
    },
  },
  tags: {
    label: "Tags",
    type: "multiselect",
    valueSources: ["value"],
    fieldSettings: {
      listValues: [
        { value: "electronics", title: "Electronics" },
        { value: "clothing", title: "Clothing" },
        { value: "food", title: "Food" },
        { value: "books", title: "Books" },
        { value: "toys", title: "Toys" },
      ],
    },
  },
  is_promotion: {
    label: "Is Promotion?",
    type: "boolean",
    operators: ["equal"],
    valueSources: ["value"],
  },
  created_date: {
    label: "Created Date",
    type: "date",
    valueSources: ["value"],
  },
  updated_at: {
    label: "Updated At",
    type: "datetime",
    valueSources: ["value"],
  },
};

// Merge with RadixConfig
const config = {
  ...RadixConfig,
  fields,
};

// Initial query value
const queryValue = { id: QbUtils.uuid(), type: "group" };

function App() {
  const [state, setState] = useState({
    tree: QbUtils.loadTree(queryValue),
    config: config,
  });

  const onChange = (immutableTree, config) => {
    setState(prevState => ({
      ...prevState,
      tree: immutableTree,
      config: config,
    }));

    const jsonTree = QbUtils.getTree(immutableTree);
    console.log("Query tree:", jsonTree);
  };

  const renderBuilder = props => (
    <div className="query-builder-container" style={{ padding: "20px" }}>
      <div className="query-builder qb-lite">
        <Builder {...props} />
      </div>
    </div>
  );

  const renderResult = ({ tree: immutableTree, config }) => {
    const isValid = QbUtils.isValidTree(immutableTree, config);

    return (
      <div className="query-builder-result" style={{ padding: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <strong>Valid:</strong> {isValid ? "✓ Yes" : "✗ No"}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Query String:</strong>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "4px",
              overflow: "auto",
            }}
          >
            {JSON.stringify(
              QbUtils.queryString(immutableTree, config),
              null,
              2
            )}
          </pre>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>MongoDB Query:</strong>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "4px",
              overflow: "auto",
            }}
          >
            {JSON.stringify(
              QbUtils.mongodbFormat(immutableTree, config),
              null,
              2
            )}
          </pre>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>SQL WHERE:</strong>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "4px",
              overflow: "auto",
            }}
          >
            {JSON.stringify(QbUtils.sqlFormat(immutableTree, config), null, 2)}
          </pre>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>JsonLogic:</strong>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "4px",
              overflow: "auto",
            }}
          >
            {JSON.stringify(
              QbUtils.jsonLogicFormat(immutableTree, config),
              null,
              2
            )}
          </pre>
        </div>
        <div>
          <strong>Tree JSON:</strong>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "4px",
              overflow: "auto",
            }}
          >
            {JSON.stringify(QbUtils.getTree(immutableTree), null, 2)}
          </pre>
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1
        style={{
          padding: "20px",
          margin: 0,
          background: "#3b82f6",
          color: "white",
        }}
      >
        React Awesome Query Builder - Radix UI
      </h1>

      <Query
        {...config}
        value={state.tree}
        onChange={onChange}
        renderBuilder={renderBuilder}
      />

      {renderResult(state)}
    </div>
  );
}

export default App;
