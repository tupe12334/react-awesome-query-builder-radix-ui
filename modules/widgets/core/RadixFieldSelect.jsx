import React from "react";
import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import PropTypes from "prop-types";
import mapValues from "lodash/mapValues";

export default function RadixFieldSelect(props) {
  const {
    config,
    customProps,
    items,
    placeholder,
    selectedKey,
    setField,
    readonly,
  } = props;

  const renderSelectItems = (fields, level = 0) => {
    return Object.keys(fields).map(fieldKey => {
      const field = fields[fieldKey];
      const {items, path, label, disabled, grouplabel} = field;
      const prefix = "\u00A0\u00A0".repeat(level);

      if (items) {
        const simpleItems = mapValues(items, (item, itemKey) => ({
          ...item,
          disabled: disabled
        }));
        return (
          <Select.Group key={path}>
            {grouplabel && (
              <Select.Label className="qb-radix-select-label">
                {prefix}{grouplabel}
              </Select.Label>
            )}
            {renderSelectItems(simpleItems, level + 1)}
          </Select.Group>
        );
      } else {
        return (
          <Select.Item
            key={path}
            value={path}
            disabled={disabled}
            className="qb-radix-select-item"
          >
            <Select.ItemText>{prefix}{label}</Select.ItemText>
            <Select.ItemIndicator className="qb-radix-select-item-indicator">
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>
        );
      }
    });
  };

  const placeholderText = placeholder || config?.settings?.fieldPlaceholder || "Select field";

  return (
    <Select.Root
      value={selectedKey || undefined}
      onValueChange={setField}
      disabled={readonly}
    >
      <Select.Trigger className="qb-radix-select-trigger" aria-label="Select field">
        <Select.Value placeholder={placeholderText} />
        <Select.Icon className="qb-radix-select-icon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="qb-radix-select-content" position="popper" sideOffset={5}>
          <Select.ScrollUpButton className="qb-radix-select-scroll-button">
            <ChevronUpIcon />
          </Select.ScrollUpButton>

          <Select.Viewport className="qb-radix-select-viewport">
            {renderSelectItems(items)}
          </Select.Viewport>

          <Select.ScrollDownButton className="qb-radix-select-scroll-button">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

RadixFieldSelect.propTypes = {
  config: PropTypes.object.isRequired,
  customProps: PropTypes.object,
  items: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  selectedKey: PropTypes.string,
  setField: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
};
