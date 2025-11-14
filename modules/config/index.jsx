import React from "react";
import merge from "lodash/merge";
import { BasicConfig } from "@react-awesome-query-builder/ui";
import * as Widgets from "../widgets";

const {
  RadixButton,
  RadixButtonGroup,
  RadixIcon,
  RadixConjs,
  RadixFieldSelect,
  RadixValueSources,
  RadixConfirm,
  useRadixConfirm,
  RadixText,
  RadixTextArea,
  RadixNumber,
  RadixBoolean,
  RadixSelect,
  RadixMultiSelect,
  RadixSlider,
  RadixRangeSlider,
  RadixDate,
  RadixTime,
  RadixDateTime,
  RadixPrice,
} = Widgets;

const settings = {
  ...BasicConfig.settings,
  renderSize: "medium",
  renderButton: (props) => <RadixButton {...props} />,
  renderIcon: (props, ctx) => {
    const {type} = props;
    return <RadixIcon type={type} />;
  },
  renderButtonGroup: (props) => <RadixButtonGroup {...props} />,
  renderConjs: (props, ctx) => <RadixConjs {...props} />,
  renderSwitch: (props) => null, // Not implemented for radix, using checkbox in conjs
  renderProvider: (props) => props.children,
  renderValueSources: (props, ctx) => <RadixValueSources {...props} />,
  renderFieldSources: (props, ctx) => <RadixValueSources {...props} />,
  renderOperator: (props, ctx) => <RadixFieldSelect {...props} />,
  renderFunc: (props, ctx) => <RadixFieldSelect {...props} />,
  renderField: (props, ctx) => <RadixFieldSelect {...props} />,
  renderConfirm: (props) => <RadixConfirm {...props} />,
  useConfirm: useRadixConfirm,
};

const ctx = {
  ...BasicConfig.ctx,
  W: {
    ...BasicConfig.ctx.W,
    RadixButton,
    RadixButtonGroup,
    RadixIcon,
    RadixConjs,
    RadixFieldSelect,
    RadixValueSources,
    RadixConfirm,
    RadixText,
    RadixTextArea,
    RadixNumber,
    RadixBoolean,
    RadixSelect,
    RadixMultiSelect,
    RadixSlider,
    RadixRangeSlider,
    RadixDate,
    RadixTime,
    RadixDateTime,
    RadixPrice,
  },
};

const widgets = {
  ...BasicConfig.widgets,
  text: {
    ...BasicConfig.widgets.text,
    factory: (props, ctx) => <RadixText {...props} />,
  },
  textarea: {
    ...BasicConfig.widgets.textarea,
    factory: (props, ctx) => <RadixTextArea {...props} />,
  },
  number: {
    ...BasicConfig.widgets.number,
    factory: (props, ctx) => <RadixNumber {...props} />,
  },
  slider: {
    ...BasicConfig.widgets.slider,
    factory: (props, ctx) => <RadixSlider {...props} />,
  },
  rangeslider: {
    ...BasicConfig.widgets.rangeslider,
    factory: (props, ctx) => <RadixRangeSlider {...props} />,
  },
  boolean: {
    ...BasicConfig.widgets.boolean,
    factory: (props, ctx) => <RadixBoolean {...props} />,
  },
  select: {
    ...BasicConfig.widgets.select,
    factory: (props, ctx) => <RadixSelect {...props} />,
  },
  multiselect: {
    ...BasicConfig.widgets.multiselect,
    factory: (props, ctx) => <RadixMultiSelect {...props} />,
  },
  date: {
    ...BasicConfig.widgets.date,
    factory: (props, ctx) => <RadixDate {...props} />,
  },
  time: {
    ...BasicConfig.widgets.time,
    factory: (props, ctx) => <RadixTime {...props} />,
  },
  datetime: {
    ...BasicConfig.widgets.datetime,
    factory: (props, ctx) => <RadixDateTime {...props} />,
  },
  price: {
    ...BasicConfig.widgets.number,
    factory: (props, ctx) => <RadixPrice {...props} />,
    formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
      if (val === undefined || val === null) return undefined;
      const decimalSeparator = fieldDef?.fieldSettings?.decimalSeparator || wgtDef?.decimalSeparator || ".";
      const thousandSeparator = fieldDef?.fieldSettings?.thousandSeparator || wgtDef?.thousandSeparator || ",";
      const prefix = fieldDef?.fieldSettings?.prefix || wgtDef?.prefix || "";
      const suffix = fieldDef?.fieldSettings?.suffix || wgtDef?.suffix || "";

      const formattedNumber = val.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);

      return isForDisplay
        ? `${prefix}${formattedNumber}${suffix}`
        : val.toString();
    },
  },
};

const RadixConfig = merge({}, BasicConfig, {
  ctx,
  settings,
  widgets,
});

export default RadixConfig;
