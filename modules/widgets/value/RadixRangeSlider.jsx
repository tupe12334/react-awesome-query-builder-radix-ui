import React from "react";
import * as Slider from "@radix-ui/react-slider";

export default function RadixRangeSlider(props) {
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
    placeholders,
    textSeparators,
  } = props;

  const [minValue, maxValue] = Array.isArray(value) && value.length === 2
    ? value
    : [min || 0, max || 100];

  const onChange = (values) => {
    setValue(values);
  };

  return (
    <div className="qb-radix-rangeslider-wrapper">
      <div className="qb-radix-rangeslider-labels">
        <span className="qb-radix-rangeslider-label-min">
          {textSeparators?.[0] || "From:"}
        </span>
        <span className="qb-radix-rangeslider-value-min">{minValue}</span>
      </div>

      <Slider.Root
        className="qb-radix-slider-root qb-radix-rangeslider-root"
        value={[minValue, maxValue]}
        onValueChange={onChange}
        min={min}
        max={max}
        step={step || 1}
        disabled={readonly}
        minStepsBetweenThumbs={1}
        {...customProps}
      >
        <Slider.Track className="qb-radix-slider-track">
          <Slider.Range className="qb-radix-slider-range" />
        </Slider.Track>
        <Slider.Thumb className="qb-radix-slider-thumb" aria-label="Minimum value" />
        <Slider.Thumb className="qb-radix-slider-thumb" aria-label="Maximum value" />
      </Slider.Root>

      <div className="qb-radix-rangeslider-labels">
        <span className="qb-radix-rangeslider-label-max">
          {textSeparators?.[1] || "To:"}
        </span>
        <span className="qb-radix-rangeslider-value-max">{maxValue}</span>
      </div>
    </div>
  );
}
