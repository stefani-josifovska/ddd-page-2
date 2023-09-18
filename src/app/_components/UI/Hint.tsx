import classes from "./Hint.module.scss";
import { hintObject } from "@/app/globalTypes";
import Link from "next/link";

const Hint: React.FC<{ hint: hintObject }> = ({ hint }) => {
  return (
    <div
      className={`absolute hidden lg:block ${
        hint.title ? classes.titledHint : classes.hintBtn
      }`}
      style={{
        top: hint.positionY,
        ...(hint.title ? { right: hint.positionX } : { left: hint.positionX }),
      }}
    >
      <div className={`${hint.title ? "flex justify-between" : ""}`}>
        <span className={classes.hintTitleSpan}>
          {hint.title && hint.title}
        </span>
        <span className={classes.plusSign}>+</span>
      </div>
      <div className={classes.hintContent}>
        {hint.content.map((item, itemIndex) => (
          <p
            key={`hint-${itemIndex}-${Math.random().toString()}`}
            className="mb-2"
          >
            {typeof item === "string" ? (
              item
            ) : (
              <Link href={item.url}>{item.text}</Link>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Hint;
