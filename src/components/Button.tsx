import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "clsx";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ variant = "primary", children, ...rest }) => {
  const buttonClass = clsx(
    "py-5 px-8 rounded-full font-bold",
    variant === "primary" && "bg-primary text-white",
    variant === "secondary" && "bg-transparent border border-primary text-primary"
  );

  return <button className={buttonClass} {...rest}>{children}</button>;
};

export default Button;