import React from "react";
import moment from "moment";

export default function RadixTime(props) {
  const {
    value,
    setValue,
    config,
    readonly,
    placeholder,
    timeFormat,
    valueFormat,
    use12Hours,
    customProps,
  } = props;

  const formatValue = valueFormat || "HH:mm:ss";
  const displayFormat = timeFormat || "HH:mm";

  const onChange = (e) => {
    const val = e.target.value;
    if (!val) {
      setValue(undefined);
    } else {
      const mVal = moment(val, "HH:mm");
      setValue(mVal.format(formatValue));
    }
  };

  // Convert internal format to input format
  const inputValue = value
    ? moment(value, formatValue).format("HH:mm")
    : "";

  return (
    <input
      type="time"
      className="qb-radix-input qb-radix-time"
      value={inputValue}
      placeholder={placeholder}
      disabled={readonly}
      onChange={onChange}
      {...customProps}
    />
  );
}
