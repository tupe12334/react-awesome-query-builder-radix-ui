import React from "react";
import PropTypes from "prop-types";

export default function RadixButton(props) {
  const { type, label, onClick, readonly, renderIcon, config, ...restProps } =
    props;

  const typeToClass = {
    delGroup: "qb-radix-button--danger",
    delRule: "qb-radix-button--danger",
    delRuleGroup: "qb-radix-button--danger",
    addRuleGroup: "qb-radix-button--primary",
    addRuleGroupExt: "qb-radix-button--primary",
    addRule: "qb-radix-button--primary",
    addGroup: "qb-radix-button--primary",
  };

  const btnClass = [
    "qb-radix-button",
    typeToClass[type] || "qb-radix-button--default",
    readonly ? "qb-radix-button--readonly" : null,
  ]
    .filter(Boolean)
    .join(" ");

  const btnLabel = label || config?.settings?.[type + "Label"];

  return (
    <button
      type="button"
      className={btnClass}
      onClick={onClick}
      disabled={readonly}
      {...restProps}
    >
      {renderIcon?.(type) || null}
      {btnLabel && <span>{btnLabel}</span>}
    </button>
  );
}

RadixButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  readonly: PropTypes.bool,
  renderIcon: PropTypes.func,
  config: PropTypes.object,
};
