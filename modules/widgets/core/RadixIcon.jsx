import React from "react";
import * as Icons from "@radix-ui/react-icons";

const iconMap = {
  "addRule": Icons.PlusIcon,
  "addGroup": Icons.PlusCircledIcon,
  "delRule": Icons.Cross2Icon,
  "delGroup": Icons.TrashIcon,
  "delRuleGroup": Icons.TrashIcon,
  "drag": Icons.DragHandleDots2Icon,
};

export default function RadixIcon({ type }) {
  const IconComponent = iconMap[type] || Icons.QuestionMarkIcon;

  return (
    <span className="qb-radix-icon">
      <IconComponent />
    </span>
  );
}
