"use client";
import React, { CSSProperties } from "react";
import classes from "./Button.module.scss";

const ButtonLink: React.FC<{
  content: string;
  href: string;
  variant: string;
  color: string;
  textColor?: string | undefined;
  className?: string;
}> = ({ content, variant, color, textColor, className, href }) => {
  const isPrimary = variant === "primary";
  const isBlue = color === "blue";

  const buttonClasses = [
    isPrimary ? classes.primaryBtn : classes.secBtn,
    isBlue ? classes.blueBtn : classes.orangeBtn,
  ].join(" ");

  const buttonStyle: CSSProperties | undefined =
    textColor !== undefined ? { color: textColor } : undefined;

  return (
    <a
      href={href}
      className={`${buttonClasses} ${className} inline-block text-center`}
      style={buttonStyle}
    >
      {content}
    </a>
  );
};

export default ButtonLink;
