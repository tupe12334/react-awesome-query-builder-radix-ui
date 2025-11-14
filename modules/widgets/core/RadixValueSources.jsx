import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export default function RadixValueSources(props) {
  const {
    config,
    valueSources,
    valueSrc,
    setValueSrc,
    readonly,
    title,
  } = props;

  const renderOptions = () => {
    return valueSources.map(([srcKey, info]) => {
      const isSelected = valueSrc === srcKey;

      return (
        <ToggleGroup.Item
          key={srcKey}
          value={srcKey}
          disabled={readonly}
          className="qb-radix-value-source-item"
          aria-label={info.label}
        >
          {info.label}
        </ToggleGroup.Item>
      );
    });
  };

  const popupTitle = title || config?.settings?.valueSourcesPopupTitle || "Select value source";

  if (valueSources.length < 2) {
    return null;
  }

  return (
    <div className="qb-radix-value-sources" title={popupTitle}>
      <ToggleGroup.Root
        type="single"
        value={valueSrc}
        onValueChange={(value) => {
          if (value) setValueSrc(value);
        }}
        className="qb-radix-value-source-group"
        disabled={readonly}
      >
        {renderOptions()}
      </ToggleGroup.Root>
    </div>
  );
}
