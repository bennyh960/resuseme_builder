import React, { useEffect, useRef, ReactNode, CSSProperties, useState, useMemo } from "react";
import ReactDOM, { createPortal } from "react-dom";
import { Language } from "../../hooks/useCustomContext";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOk: () => void;
  children: ReactNode;
  width?: string;
  height?: string;
  dir?: "ltr" | "rtl";
  language?: Language;
  style?: CSSProperties;
  draggable?: boolean;
  okText?: string | ReactNode;
  cancelText?: string | ReactNode;
  maskClosable?: boolean;
  cssClass?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onOk,
  onClose,
  children,
  width,
  height,
  dir = "ltr",
  language,
  style,
  draggable,
  okText,
  cancelText,
  maskClosable = true,
  cssClass,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState<{ x: string | number; y: string | number }>({
    x: `calc(50% - ${width})`,
    y: `calc(50% - ${height})`,
  });

  // Handle transition with useEffect
  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      // Delay hiding the modal until after the transition completes
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 1000); // This should match your transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  let modalClassDynamicStyle: CSSProperties = {
    width: width ? width : undefined,
    height: height ? height : undefined,
    direction: dir ? dir : language === "he" ? "rtl" : "ltr",
  };

  if (style) {
    modalClassDynamicStyle = { ...modalClassDynamicStyle, ...style };
  }

  if (draggable) {
    modalClassDynamicStyle = {
      ...modalClassDynamicStyle,
      left: draggingPosition.x,
      top: draggingPosition.y,
      position: "fixed",
    };
  }

  const drawButtons = useMemo(() => {
    const defaultButtons: any[] = [
      {
        children: okText || language === "he" ? "אישור" : "Confirm",
        ariaLabel: "ok",
        onClick: onOk,
      },
      {
        children: cancelText || language === "he" ? "ביטול" : "Cancel",
        ariaLabel: "cancel",
        onClick: onClose,
        variant: "outline",
      },
    ];

    return defaultButtons.map((btn, idx) => {
      return (
        <Button key={idx} {...btn}>
          {btn.children}
        </Button>
      );
    });
  }, [cancelText, okText, onOk, onClose, language]);

  const handleOverlayClick = () => {
    maskClosable && onClose();
  };

  // Don't render anything if modal shouldn't be shown
  if (!showModal && !isOpen) return null;

  return createPortal(
    <div
      className={`z-10 w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] inset-0 flex items-center justify-center transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleOverlayClick}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <div
        draggable={draggable}
        onDragEnd={(e) => draggable && setDraggingPosition({ x: e.clientX, y: e.clientY })}
        className={`relative w-fit h-fit min-w-[300px] min-h-[200px] flex flex-col justify-between p-3 shadow-lg border bg-white z-20 rounded-lg transition-all duration-500 ease-in-out transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${cssClass ?? ""}`}
        style={modalClassDynamicStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 absolute top-1 right-1 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-7 h-7 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          ✕
        </button>
        <div className="modal-content">{children}</div>
        <div className="flex gap-5 justify-center">{drawButtons}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
