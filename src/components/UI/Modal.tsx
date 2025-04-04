import React, { useEffect, ReactNode, CSSProperties, useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { Language } from "../../hooks/useCustomContext";
import Button, { ButtonProps } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttons: ButtonProps[];
  children: ReactNode;
  width?: string;
  height?: string;
  dir?: "ltr" | "rtl";
  language?: Language;
  style?: CSSProperties;
  draggable?: boolean;
  title?: string | ReactNode;
  maskClosable?: boolean;
  cssClass?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  width,
  height,
  dir = "ltr",
  language,
  style,
  draggable,
  maskClosable = true,
  cssClass,
  title,
  buttons,
}) => {
  const [draggingPosition, setDraggingPosition] = useState<{ x: string | number; y: string | number }>({
    x: `calc(50% - ${width})`,
    y: `calc(50% - ${height})`,
  });

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

  const handleOverlayClick = () => {
    if (maskClosable) onClose();
  };

  // Don't render anything if modal shouldn't be shown
  // if (!showModal && !isOpen) return null;

  const handelDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (draggable) {
      // const rect = e.currentTarget.getBoundingClientRect();

      setDraggingPosition({ x: e.clientX, y: e.clientY });
    }
  };

  return createPortal(
    <div
      className={`z-10 w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] inset-0 flex items-center justify-center transition-all duration-500 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleOverlayClick}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <div
        draggable={draggable}
        onDragEndCapture={handelDrag}
        className={`w-full max-w-md bg-white rounded-lg border shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } ${cssClass ?? ""}`}
        style={modalClassDynamicStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader onClose={onClose} title={title} />

        <div className="p-6 space-y-6">{children}</div>
        <ModalFooter buttons={buttons} />
      </div>
    </div>,
    document.body
  );
};

export default Modal;

const ModalHeader = ({ onClose, title }: { onClose: ModalProps["onClose"]; title: ModalProps["title"] }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <button onClick={onClose} className="p-1 rounded-sm cursor-pointer hover:bg-gray-100 transition-colors">
        ✕
      </button>
    </div>
  );
};

const ModalFooter = ({ buttons }: { buttons: ModalProps["buttons"] }) => {
  return (
    <div className="px-6 py-4 border-t flex gap-3">
      {buttons.map((btn, idx) => {
        return (
          <Button key={idx} {...btn} className="px-4 py-2 text-sm">
            {btn.children}
          </Button>
        );
      })}
    </div>
  );
};
