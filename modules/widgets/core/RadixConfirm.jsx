import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function RadixConfirm(props) {
  const {
    onOk,
    okText,
    cancelText,
    title,
    children,
  } = props;

  const [open, setOpen] = useState(true);

  const handleOk = () => {
    setOpen(false);
    if (onOk) onOk();
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="qb-radix-dialog-overlay" />
        <Dialog.Content className="qb-radix-dialog-content">
          <Dialog.Title className="qb-radix-dialog-title">
            {title || "Confirm"}
          </Dialog.Title>

          <Dialog.Description className="qb-radix-dialog-description">
            {children}
          </Dialog.Description>

          <div className="qb-radix-dialog-buttons">
            <button
              className="qb-radix-button qb-radix-button--default"
              onClick={handleCancel}
            >
              {cancelText || "Cancel"}
            </button>
            <button
              className="qb-radix-button qb-radix-button--danger"
              onClick={handleOk}
            >
              {okText || "OK"}
            </button>
          </div>

          <Dialog.Close asChild>
            <button className="qb-radix-dialog-close" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// Hook for using confirm dialogs
export function useRadixConfirm() {
  const [confirmState, setConfirmState] = useState(null);

  const confirm = ({ title, content, onOk, onCancel, okText, cancelText }) => {
    return new Promise((resolve) => {
      setConfirmState({
        title,
        content,
        okText,
        cancelText,
        onOk: () => {
          if (onOk) onOk();
          resolve(true);
          setConfirmState(null);
        },
        onCancel: () => {
          if (onCancel) onCancel();
          resolve(false);
          setConfirmState(null);
        },
      });
    });
  };

  const ConfirmComponent = confirmState ? (
    <RadixConfirm
      title={confirmState.title}
      okText={confirmState.okText}
      cancelText={confirmState.cancelText}
      onOk={confirmState.onOk}
    >
      {confirmState.content}
    </RadixConfirm>
  ) : null;

  return [confirm, ConfirmComponent];
}
