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
        return `top-0 left-0 h-screen overflow-y-auto w-80 ${isOpen ? "translate-x-0" : "-translate-x-full"}`;

      default:
        break;
    }
  }, [position, isOpen]);

  return (
    <div
      className={`border z-50 fixed p-4 bg-white dark:bg-gray-800 transition-transform ease-in ${renderPosition}`}
      aria-labelledby="drawer-label"
    >
      <div className="flex w-full sticky top-0 justify-between bg-inherit">
        <h5
          id="drawer-label"
          className="inline-flex flex-basis items-center sticky top-0 mt-2 mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          {title}
        </h5>

        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8  flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          ✕
        </button>
      </div>

      {children}
    </div>
  );
};

export default Drawer;
