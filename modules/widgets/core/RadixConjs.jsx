import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export default function RadixConjs(props) {
  const {
    id,
    readonly,
    disabled,
    selectedConjunction,
    setConjunction,
    conjunctionOptions,
    config,
    not,
    setNot,
    showNot,
  } = props;

  const conjsCount = Object.keys(conjunctionOptions).length;
  const lessThenTwo = disabled || conjsCount < 2;
  const forceShowConj = config?.settings?.forceShowConj;

  const renderOptions = () => {
    const { conjunctions } = config;
    return Object.keys(conjunctionOptions).map(key => {
      const { id, name, label, checked } = conjunctionOptions[key];
      const postfix = setConjunction.isDummyFn ? "__dummy" : "";

      return (
        <ToggleGroup.Item
          key={id + postfix}
          value={key}
          disabled={readonly || disabled}
          className="qb-radix-conj-item"
          aria-label={label}
        >
          {label}
        </ToggleGroup.Item>
      );
    });
  };

  const renderNot = () => {
    if (!showNot) return null;
    const notLabel = config?.settings?.notLabel || "NOT";

    return (
      <label className="qb-radix-conj-not">
        <input
          type="checkbox"
          id={id}
          checked={not}
          disabled={readonly}
          onChange={e => setNot(e.target.checked)}
        />
        <span>{notLabel}</span>
      </label>
    );
  };

  const renderConjsAsToggleGroup = () => {
    return (
      <ToggleGroup.Root
        type="single"
        value={selectedConjunction}
        onValueChange={value => {
          if (value) setConjunction(value);
        }}
        className="qb-radix-conj-group"
        disabled={readonly || disabled}
      >
        {renderOptions()}
      </ToggleGroup.Root>
    );
  };

  return (
    <div className="qb-radix-conjs">
      {!lessThenTwo || forceShowConj ? renderConjsAsToggleGroup() : null}
      {renderNot()}
    </div>
  );
}
