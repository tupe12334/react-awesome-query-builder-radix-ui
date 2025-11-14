import React from "react";
import { NumericFormat } from "react-number-format";

export default function RadixPrice(props) {
  const {
    value,
    setValue,
    config,
    readonly,
    placeholder,
    customProps,
    thousandSeparator,
    decimalSeparator,
    decimalScale,
    prefix,
    suffix,
    allowNegative,
  } = props;

  const onValueChange = (values) => {
    const { floatValue } = values;
    if (floatValue === undefined || floatValue === null) {
      setValue(undefined);
    } else {
      setValue(floatValue);
    }
  };

  return (
    <NumericFormat
      className="qb-radix-input qb-radix-price"
      value={value}
      onValueChange={onValueChange}
      placeholder={placeholder}
      disabled={readonly}
      thousandSeparator={thousandSeparator !== undefined ? thousandSeparator : ","}
      decimalSeparator={decimalSeparator || "."}
      decimalScale={decimalScale}
      prefix={prefix}
      suffix={suffix}
      allowNegative={allowNegative !== false}
      {...customProps}
    />
  );
}
