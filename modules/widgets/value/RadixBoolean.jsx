import React from "react";
import * as Switch from "@radix-ui/react-switch";

export default function RadixBoolean(props) {
  const {
    value,
    setValue,
    labelYes,
    labelNo,
    readonly,
    config,
  } = props;

  const onToggle = (checked) => {
    setValue(checked);
  };

  const defaultYes = labelYes || config?.settings?.labelYes || "Yes";
  const defaultNo = labelNo || config?.settings?.labelNo || "No";

  return (
    <div className="qb-radix-boolean">
      <label className="qb-radix-boolean-label">
        <span className="qb-radix-boolean-label-text">
          {value ? defaultYes : defaultNo}
        </span>
        <Switch.Root
          className="qb-radix-switch-root"
          checked={!!value}
          onCheckedChange={onToggle}
          disabled={readonly}
        >
          <Switch.Thumb className="qb-radix-switch-thumb" />
        </Switch.Root>
      </label>
    </div>
  );
}
