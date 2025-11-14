import React from "react";
import * as Slider from "@radix-ui/react-slider";

export default function RadixSlider(props) {
  const {
    value,
    setValue,
    config,
    readonly,
    min,
    max,
    step,
    marks,
    customProps,
  } = props;

  const onChange = (values) => {
    setValue(values[0]);
  };

  const sliderValue = value != null ? [value] : [min || 0];

  return (
    <div className="qb-radix-slider-wrapper">
      <Slider.Root
        className="qb-radix-slider-root"
        value={sliderValue}
        onValueChange={onChange}
        min={min}
        max={max}
        step={step || 1}
        disabled={readonly}
        {...customProps}
      >
        <Slider.Track className="qb-radix-slider-track">
          <Slider.Range className="qb-radix-slider-range" />
        </Slider.Track>
        <Slider.Thumb className="qb-radix-slider-thumb" aria-label="Value" />
      </Slider.Root>
      <div className="qb-radix-slider-value">{value}</div>
    </div>
  );
}
