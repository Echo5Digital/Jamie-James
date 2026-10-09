"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  leftIcon,
  rightIcon,
  fullWidth = false,
  loading = false,
  className = "",
  disabled,
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-semibold uppercase tracking-widest rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent shadow-md disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-accent text-primary hover:bg-[#b5883f] active:scale-[0.98] shadow-md",
    secondary:
      "bg-secondary text-background hover:bg-[#0e5459] active:scale-[0.98] shadow-md",
    outline:
      "bg-transparent border-2 border-accent text-primary hover:bg-accent hover:text-primary active:scale-[0.98] shadow-sm",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={[base, variants[variant], sizes[size], widthClass, className]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-4 w-4 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          <span>Loading…</span>
        </>
      ) : (
        <>
          {leftIcon && (
            <span className="shrink-0 flex items-center">{leftIcon}</span>
          )}
          <span>{children}</span>
          {rightIcon && (
            <span className="shrink-0 flex items-center">{rightIcon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;