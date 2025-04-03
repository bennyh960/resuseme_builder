import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id, className, labelClassName, containerClassName, ...rest }) => {
  // Generate a unique ID if not provided
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`flex items-center ${containerClassName || ""}`}>
      <input
        type="checkbox"
        id={checkboxId}
        className={`
          h-4 w-4 rounded border-gray-300 text-indigo-600 
          focus:ring-indigo-600 
          ${className || ""}
        `}
        {...rest}
      />
      {label && (
        <label
          htmlFor={checkboxId}
          className={`
            ml-2 block text-sm font-medium text-gray-900 
            cursor-pointer select-none
            ${labelClassName || ""}
          `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
