import React, { ButtonHTMLAttributes } from "react";

// Define the variant types
type ButtonVariant = "primary" | "secondary" | "danger" | "success" | "outline" | "ghost" | "link" | "minimal";

// Define size types
type ButtonSize = "sm" | "md" | "lg";

// Props interface
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  // Base classes for all buttons
  const baseClasses =
    "cursor-pointer inline-flex items-center justify-center transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  // Width classes
  const widthClasses = fullWidth ? "w-full" : "";

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  // Variant classes
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md",
    danger: "bg-red-600 hover:bg-red-700 text-white font-medium rounded-md shadow-sm",
    success: "bg-green-600 hover:bg-green-700 text-white font-medium rounded-md shadow-sm",
    outline: "bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300 rounded-md",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-600 rounded-md",
    link: "bg-transparent text-blue-600 hover:text-blue-800 underline",
    minimal: "text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md",
  };

  // Disabled state
  const disabledClasses = props.disabled ? "opacity-50 cursor-not-allowed" : "";

  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${disabledClasses} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
