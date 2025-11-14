import React from "react";
import moment from "moment";

export default function RadixDate(props) {
  const {
    value,
    setValue,
    config,
    readonly,
    placeholder,
    dateFormat,
    valueFormat,
    customProps,
  } = props;

  const formatValue = valueFormat || "YYYY-MM-DD";
  const displayFormat = dateFormat || "YYYY-MM-DD";

  const onChange = e => {
    const val = e.target.value;
    if (!val) {
      setValue(undefined);
    } else {
      const mVal = moment(val, "YYYY-MM-DD");
      setValue(mVal.format(formatValue));
    }
  };

  // Convert internal format to input format
  const inputValue = value
    ? moment(value, formatValue).format("YYYY-MM-DD")
    : "";

  return (
    <input
      type="date"
      className="qb-radix-input qb-radix-date"
      value={inputValue}
      placeholder={placeholder}
      disabled={readonly}
      onChange={onChange}
      {...customProps}
    />
  );
}
