"use client";
import React, { CSSProperties } from "react";
import classes from "./Button.module.scss";

const Button: React.FC<{
  content: string;
  onClick?: () => void;
  variant: string;
  color: string;
  textColor?: string | undefined;
  className?: string;
  id?: string;
}> = ({ content, variant, color, textColor, className, onClick, id }) => {
  const isPrimary = variant === "primary";
  const isBlue = color === "blue";

  const buttonClasses = [
    isPrimary ? classes.primaryBtn : classes.secBtn,
    isBlue ? classes.blueBtn : classes.orangeBtn,
  ].join(" ");

  const buttonStyle: CSSProperties | undefined =
    textColor !== undefined ? { color: textColor } : undefined;

  return (
    <button
      onClick={onClick}
      className={`${buttonClasses} ${className}`}
      style={buttonStyle}
      id={id}
    >
      {content}
    </button>
  );
};

export default Button;
