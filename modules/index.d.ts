/**
 * Type definitions for @react-awesome-query-builder/radix-ui
 */

// Re-export all types from @react-awesome-query-builder/ui
export * from "@react-awesome-query-builder/ui";

import type { Config, Widgets } from "@react-awesome-query-builder/ui";
import type { ReactElement } from "react";

// Radix UI specific exports
export interface RadixWidgets extends Widgets {
  RadixButton: ReactElement;
  RadixButtonGroup: ReactElement;
  RadixIcon: ReactElement;
  RadixConjs: ReactElement;
  RadixFieldSelect: ReactElement;
  RadixValueSources: ReactElement;
  RadixConfirm: ReactElement;
  RadixText: ReactElement;
  RadixTextArea: ReactElement;
  RadixNumber: ReactElement;
  RadixBoolean: ReactElement;
  RadixSelect: ReactElement;
  RadixMultiSelect: ReactElement;
  RadixSlider: ReactElement;
  RadixRangeSlider: ReactElement;
  RadixDate: ReactElement;
  RadixTime: ReactElement;
  RadixDateTime: ReactElement;
  RadixPrice: ReactElement;
}

export const RadixConfig: Config;
export { RadixWidgets };

// Hook for confirm dialogs
export function useRadixConfirm(): [
  (options: {
    title?: string;
    content?: string | ReactElement;
    onOk?: () => void;
    onCancel?: () => void;
    okText?: string;
    cancelText?: string;
  }) => Promise<boolean>,
  ReactElement | null
];
