import React from "react";

export default function RadixText(props) {
  const {
    value,
    setValue,
    config,
    readonly,
    placeholder,
    customProps,
    maxLength,
    maxRows,
  } = props;

  const onChange = e => {
    const val = e.target.value;
    if (val === "") {
      setValue(undefined);
    } else {
      setValue(val);
    }
  };

  const textValue = value || "";

  return (
    <input
      type="text"
      className="qb-radix-input qb-radix-text"
      value={textValue}
      placeholder={placeholder}
      disabled={readonly}
      onChange={onChange}
      maxLength={maxLength}
      {...customProps}
    />
  );
}
