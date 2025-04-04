import { ReactNode, useMemo } from "react";

interface IDrawer {
  isOpen: boolean;
  onClose?: () => void;
  title?: string | ReactNode;
  children: ReactNode;
  position?: "left" | "right" | "top" | "bottom";
}

const Drawer = ({ isOpen, onClose, title, children, position = "left" }: IDrawer) => {
  const renderPosition = useMemo(() => {
    switch (position) {
      case "left":
        return `top-0 left-0 h-screen w-80 ${isOpen ? "translate-x-0" : "-translate-x-full"}`;
      case "right":
        return `top-0 right-0 h-screen w-80 ${isOpen ? "translate-x-0" : "translate-x-full"}`;
      case "bottom":
        return `bottom-0 left-0 w-full max-h-[550px] ${isOpen ? "translate-y-0" : "translate-y-full"}`;
      case "top":
        return `top-0 left-0 w-full max-h-[550px] ${isOpen ? "translate-y-0" : "-translate-y-full"}`;
      default:
        return "";
    }
  }, [position, isOpen]);

  const overlayClasses = useMemo(() => {
    return `fixed inset-0 bg-[rgba(0,0,0,0.6)] transition-opacity ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`;
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={overlayClasses}
        onClick={onClose} // Close the drawer when overlay is clicked
      />

      {/* Drawer Content */}
      <div
        className={`border z-50 fixed p-0 bg-gray-100 dark:bg-gray-800 shadow-2xl transition-transform ease-in flex flex-col ${renderPosition}`}
        aria-labelledby="drawer-label"
      >
        {/* Header - Fixed, Does Not Scroll */}
        <div className="h-16 px-4 flex items-center justify-between bg-gray-100 mb-1 dark:bg-gray-800 shadow-md">
          <div id="drawer-label" className="text-base font-semibold text-gray-500 dark:text-gray-400">
            {title}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
