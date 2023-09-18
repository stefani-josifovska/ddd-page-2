"use client";
import React, { useState, useEffect } from "react";
import classes from "./Navbar.module.scss";

const Background: React.FC<{}> = () => {
  const [isColored, setIsColored] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (typeof window !== "undefined" && window.scrollY >= 90) {
        setIsColored(true);
      } else {
        setIsColored(false);
      }
    };

    window.addEventListener("DOMContentLoaded", changeColor);
    window.addEventListener("scroll", changeColor);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("DOMContentLoaded", changeColor);
      window.removeEventListener("scroll", changeColor);
    };
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <div
      className={`${classes.navbar} ${
        isColored ? classes["navbar--scrolled"] : ""
      }`}
    ></div>
  );
};

export default Background;
