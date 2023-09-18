"use client";
import React, { useState, useEffect } from "react";
import classes from "./TypingEffect.module.scss";

// Custom typing animation component
const CustomTypeAnimation: React.FC<{ text: string }> = ({ text }) => {
  const [typedText, setTypedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const getColorForCharacter = (position: number) => {
    if (
      (position > 0 && position < 10) ||
      (position > 14 && position < 29) ||
      (position > 51 && position < 66) ||
      (position > 80 && position < 97) ||
      (position > 109 && position < 123) ||
      (position > 143 && position < 163) ||
      (position > 182 && position < 197) ||
      (position > 203 && position < 215) ||
      (position > 226 && position < 238) ||
      (position > 252 && position < 273) ||
      (position > 283 && position < 304) ||
      (position > 313 && position < 335)
    ) {
      return "#e8490e";
    } else {
      return "black";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        const char = text[currentIndex];
        const color = getColorForCharacter(currentIndex);

        if (char === " ") {
          setTypedText(
            (prevText) =>
              `${prevText}<span style="color: ${color}" class="${classes.indentation}">${char}</span>`
          );
        } else {
          setTypedText(
            (prevText) =>
              `${prevText}<span style="color: ${color}">${char}</span>`
          );
        }

        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, text]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: typedText }}
      style={{
        whiteSpace: "pre-line",
        lineHeight: "1.8rem",
        flex: 2,
        color: "white",
      }}
    />
  );
};

const TypingEffect: React.FC = () => {
  // const [typingStatus, setTypingStatus] = useState<string>("");

  const text = `{"Invoice": {
    "InvNumber": "INV-1696-2023",
    "InvIssueDate": "2023-03-05",
    "InvAmount": 1200.00,
    "BuyerName": "TailoredSaaS Ltd",
    "BuyerAddress": "Happy street 9",
    "_details": {
      "Items": [ {
        "ItemName": "Flowers",
        "ItemQuantity": 10.00,
        "ItemNetPrice": 100.00,
        "ItemVatRate": 20.00
      } ] 
  }}}`;

  return (
    <div className={classes.container}>
      <CustomTypeAnimation text={text} />
    </div>
  );
};

export default TypingEffect;
