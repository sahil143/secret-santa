import { createVar, style } from "@vanilla-extract/css";

const primaryColor = createVar();
const backgroundColor = createVar();
const textColor = createVar();
const inValidInput = createVar();

export const inputWrapperStyle = style({
  vars: {
    [primaryColor]: "yellow",
    [backgroundColor]: "transparent",
    [textColor]: "black",
    [inValidInput]: "red",
  },
  position: "relative",
});

export const inputLabelStyle = style({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 5,
  border: "3px solid transparent",
  backgroundColor: backgroundColor,
  display: "flex",
  alignItems: "center",
});

export const inputStyle = style({
  height: "3rem",
  width: "40rem",
  border: "2px solid black",
  borderRadius: "1rem",
  padding: "1rem",
  fontSize: "1.5rem",
  selectors: {
    [`${inputWrapperStyle} &:focus`]: {
      borderColor: primaryColor,
      outline: "none",
      transition: "border-color 0.15s linear",
    },
    [`${inputWrapperStyle} &[data-validated="false"]`]: {
      borderColor: inValidInput,
    }
  },
});

export const inputLabelTextStyle = style({
  fontSize: "1.5rem",
  padding: "0 .5rem",
  background: backgroundColor,
  color: textColor,
  transition:
    "transform 0.15s ease-out, font-size 0.15s ease-out, color 0.15s ease-out",
  selectors: {
    [`${inputStyle}:focus + ${inputLabelStyle} &`]: {
      fontSize: "1rem",
      transform: "translate(0, -140%)",
      color: primaryColor,
    },
    [`:not(${inputStyle}[value=""]) + ${inputLabelStyle} &`]: {
      fontSize: "1rem",
      transform: "translate(0, -140%)",
    },
    [`${inputStyle}[data-validated="false"] + ${inputLabelStyle} &`]: {
      color: inValidInput
    }
  },
});
