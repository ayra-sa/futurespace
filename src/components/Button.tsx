import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "normal" | "small";
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "normal",
  children,
  ...rest
}) => {
  const buttonClass = clsx(
    "py-5 px-8 rounded-full font-bold",
    size === "small" && "!py-3 !px-10 text-base",
    variant === "primary" && "bg-primary text-white",
    variant === "secondary" &&
      "bg-white border border-primary text-primary"
  );

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
