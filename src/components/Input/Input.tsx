import * as React from "react";
import {
  inputLabelStyle,
  inputLabelTextStyle,
  inputStyle,
  inputWrapperStyle,
} from "./Input.css";

type InputProps = {
  label: string;
  isValid?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder">;

export const Input: React.FC<InputProps> = ({
  label,
  isValid,
  ...inputProps
}) => {
  return (
    <div className={inputWrapperStyle}>
      <input
        {...inputProps}
        className={inputStyle}
        id="standalone-input"
        data-validated={isValid}
      />
      <label className={inputLabelStyle} htmlFor="standalone-input">
        <div className={inputLabelTextStyle}>{label}</div>
      </label>
    </div>
  );
};
