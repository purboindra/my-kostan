import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, onClick, children, disabled, type = "button", ...props },
    ref
  ) => {
    return (
      <button
        type={type}
        className={`w-full rounded-lg py-3 items-center shadow-lg bg-primaryColor border border-transparent disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition ${className}`}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
