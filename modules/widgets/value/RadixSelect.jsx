import React from "react";
import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

export default function RadixSelect(props) {
  const {
    value,
    setValue,
    listValues,
    readonly,
    placeholder,
    customProps,
  } = props;

  const onChange = (val) => {
    setValue(val);
  };

  const renderOptions = () => {
    if (!listValues) return null;

    return listValues.map(item => {
      const {value: itemValue, title} = item;
      return (
        <Select.Item
          key={itemValue}
          value={itemValue}
          className="qb-radix-select-item"
        >
          <Select.ItemText>{title}</Select.ItemText>
          <Select.ItemIndicator className="qb-radix-select-item-indicator">
            <CheckIcon />
          </Select.ItemIndicator>
        </Select.Item>
      );
    });
  };

  return (
    <Select.Root
      value={value}
      onValueChange={onChange}
      disabled={readonly}
    >
      <Select.Trigger className="qb-radix-select-trigger" aria-label="Select value">
        <Select.Value placeholder={placeholder || "Select..."} />
        <Select.Icon className="qb-radix-select-icon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="qb-radix-select-content">
          <Select.ScrollUpButton className="qb-radix-select-scroll-button">
            <ChevronUpIcon />
          </Select.ScrollUpButton>

          <Select.Viewport className="qb-radix-select-viewport">
            {renderOptions()}
          </Select.Viewport>

          <Select.ScrollDownButton className="qb-radix-select-scroll-button">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
