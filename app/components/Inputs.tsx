import React, { forwardRef } from "react";

interface InputsProps {
  label: string;
}

interface InputsProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputsProps>(
  ({ label, className, type, disabled, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 mt-4 w-full">
        <p className="text-xs text-[#3C3737] font-normal">{label}</p>
        <input
          type={type}
          className={` rounded-md border border-[#C4C4C4] p-3 text-sm disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none ${className}`}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
