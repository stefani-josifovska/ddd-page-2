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
  id?: string;
}> = ({ content, variant, color, textColor, className, href, id }) => {
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
      id={id}
    >
      {content}
    </a>
  );
};

export default ButtonLink;
