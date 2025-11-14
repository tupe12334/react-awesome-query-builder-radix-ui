import React from "react";

export default function RadixTextArea(props) {
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
    <textarea
      className="qb-radix-textarea"
      value={textValue}
      placeholder={placeholder}
      disabled={readonly}
      onChange={onChange}
      maxLength={maxLength}
      rows={maxRows || 5}
      {...customProps}
    />
  );
}
