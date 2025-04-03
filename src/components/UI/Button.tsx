import { FC, ReactNode, useState } from "react";

type ButtonProps = {
  children: ReactNode; // Text displayed on the button
  onClick?: () => void; // Event handler for button click
  disabled?: boolean; // Disables the button when true
  variant?: "primary" | "secondary" | "danger" | "outline"; // Style variants for the button
  cssClass?: string;
  isLoading?: boolean;
};

const Button: FC<ButtonProps> = ({ children, onClick, disabled = false, variant = "primary", cssClass, isLoading }) => {
  const handleClick = () => {
    if (disabled || isLoading) return;
    if (onClick) onClick();
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700 text-white";
      case "secondary":
        return "bg-gray-200 hover:bg-gray-300 text-gray-800";
      case "danger":
        return "bg-red-600 hover:bg-red-700 text-white";
      case "outline":
        return "bg-white hover:border-blue-200 transition-all duration-300 ease border";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`px-3 py-2 rounded-lg ${getVariantStyles()} cursor-pointer ${
        disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
      } ${cssClass ?? ""}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
