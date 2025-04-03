import React from "react";
import checkIcon from "../../assets/circle-check.svg";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  isValid?: boolean;
  className?: string;
  showIcon?: boolean;
}

const FormField = ({ id, label, isValid, className, showIcon = true, ...rest }: FormFieldProps) => {
  const isRenderCheckIcon = () => {
    if (isValid === true) return true;
    else if (isValid === undefined && rest.value) return true;
    return false;
  };
  return (
    <div className={`${className ?? ""} sm:col-span-4 w-full`}>
      {label && (
        <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900 mb-2">
          {label}
        </label>
      )}
      <div>
        <div className="flex items-center rounded-md bg-white pl-1 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            className="block min-w-0 grow px-1  py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            {...rest}
            id={id}
          />
          {showIcon && isRenderCheckIcon() && (
            <div className="mr-4 ml-1">
              <img src={checkIcon} alt="check icon" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormField;
