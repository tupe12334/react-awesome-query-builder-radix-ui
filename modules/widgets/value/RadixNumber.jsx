import React from "react";

export default function RadixNumber(props) {
  const {
    value,
    setValue,
    config,
    readonly,
    min,
    max,
    step,
    placeholder,
    customProps,
  } = props;

  const onChange = (e) => {
    let val = e.target.value;
    if (val === "" || val === null) {
      setValue(undefined);
    } else {
      val = Number(val);
      if (isNaN(val)) {
        setValue(undefined);
      } else {
        setValue(val);
      }
    }
  };

  const numberValue = value != null ? value : "";

  return (
    <input
      type="number"
      className="qb-radix-input qb-radix-number"
      value={numberValue}
      placeholder={placeholder}
      disabled={readonly}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      {...customProps}
    />
  );
}
