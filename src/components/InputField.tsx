import React, { FC, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
}

const InputField: FC<InputFieldProps> = ({ placeholder, type }) => {
  return (
    <input
      className="input-field"
      type={type}
      placeholder={placeholder}
      required
      autoComplete="off"
    />
  );
};

export default InputField;
