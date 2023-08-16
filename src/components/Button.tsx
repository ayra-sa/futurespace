import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white"
  size?: "normal" | "small";
  width?: "normal" | "full";
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "normal",
  width = "normal",
  children,
  ...rest
}) => {
  const buttonClass = clsx(
    "py-5 px-8 rounded-full font-bold transition duration-300",
    size === "small" && "!py-3 !px-10 text-base",
    width === "full" && "w-full",
    variant === "primary" && "bg-primary text-white hover:bg-[#0067B4]",
    variant === "secondary" && "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
    variant === "white" && "bg-white border border-primary text-primary"
  );

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
