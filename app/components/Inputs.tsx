import React, { forwardRef } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputsProps {
  id: string;
  label: string;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  validate?: FieldValues;
}

interface InputsProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputsProps>(
  (
    {
      register,
      required,
      validate,
      id,
      errors,
      label,
      className,
      type,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1 mt-4 w-full">
        <p className="text-xs text-[#3C3737] font-normal">{label}</p>
        <input
          id={id}
          type={type}
          className={`rounded-md border border-[#C4C4C4] p-3 text-sm disabled:cursor-not-allowed disabled:opacity-50 focus:border-[secondaryColor] ${className} ${
            errors[id] && "border-rose-500 focus:border-rose-600 "
          }`}
          disabled={disabled}
          {...register(id, {
            required,
            validate: validate,
          })}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
