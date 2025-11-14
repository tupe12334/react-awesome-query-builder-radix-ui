import React from "react";
import moment from "moment";

export default function RadixDateTime(props) {
  const {
    value,
    setValue,
    config,
    readonly,
    placeholder,
    dateFormat,
    timeFormat,
    valueFormat,
    use12Hours,
    customProps,
  } = props;

  const formatValue = valueFormat || "YYYY-MM-DD HH:mm:ss";

  const onChange = e => {
    const val = e.target.value;
    if (!val) {
      setValue(undefined);
    } else {
      const mVal = moment(val, "YYYY-MM-DDTHH:mm");
      setValue(mVal.format(formatValue));
    }
  };

  // Convert internal format to input format
  const inputValue = value
    ? moment(value, formatValue).format("YYYY-MM-DDTHH:mm")
    : "";

  return (
    <input
      type="datetime-local"
      className="qb-radix-input qb-radix-datetime"
      value={inputValue}
      placeholder={placeholder}
      disabled={readonly}
      onChange={onChange}
      {...customProps}
    />
  );
}
