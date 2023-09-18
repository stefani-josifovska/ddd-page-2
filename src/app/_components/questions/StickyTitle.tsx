import React from "react";
import classes from "./Questions.module.scss";

const StickyTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex-1">
      <div className={`w-fit ${classes.stickyTitle}`}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default StickyTitle;
