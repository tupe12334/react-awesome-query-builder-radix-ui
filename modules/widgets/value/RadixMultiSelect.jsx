import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Popover from "@radix-ui/react-popover";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

export default function RadixMultiSelect(props) {
  const { value, setValue, listValues, readonly, placeholder, customProps } =
    props;

  const selectedValues = value || [];

  const toggleValue = itemValue => {
    const newValues = selectedValues.includes(itemValue)
      ? selectedValues.filter(v => v !== itemValue)
      : [...selectedValues, itemValue];
    setValue(newValues);
  };

  const renderSelectedText = () => {
    if (!selectedValues.length) {
      return placeholder || "Select...";
    }

    const selectedTitles = listValues
      .filter(item => selectedValues.includes(item.value))
      .map(item => item.title);

    return selectedTitles.join(", ");
  };

  const renderOptions = () => {
    if (!listValues) return null;

    return listValues.map(item => {
      const { value: itemValue, title } = item;
      const isChecked = selectedValues.includes(itemValue);

      return (
        <label key={itemValue} className="qb-radix-multiselect-item">
          <Checkbox.Root
            className="qb-radix-checkbox-root"
            checked={isChecked}
            onCheckedChange={() => toggleValue(itemValue)}
            disabled={readonly}
          >
            <Checkbox.Indicator className="qb-radix-checkbox-indicator">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <span className="qb-radix-multiselect-label">{title}</span>
        </label>
      );
    });
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="qb-radix-select-trigger"
          disabled={readonly}
          aria-label="Select multiple values"
        >
          <span className="qb-radix-multiselect-value">
            {renderSelectedText()}
          </span>
          <span className="qb-radix-select-icon">
            <ChevronDownIcon />
          </span>
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="qb-radix-popover-content qb-radix-multiselect-content">
          <div className="qb-radix-multiselect-options">{renderOptions()}</div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
