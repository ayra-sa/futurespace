import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "normal" | "small";
  width?: "full";
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "normal",
  width = "full",
  children,
  ...rest
}) => {
  const buttonClass = clsx(
    "py-5 px-8 rounded-full font-bold",
    size === "small" && "!py-3 !px-10 text-base",
    width === "full" && "w-full",
    variant === "primary" && "bg-primary text-white",
    variant === "secondary" &&
      "bg-transparent border border-primary text-primary"
  );

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
