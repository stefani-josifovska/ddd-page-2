import React from "react";
import classes from "./ImgContainer.module.scss";
import { StaticImageData } from "next/image";

const ImgContainer: React.FC<{ img: StaticImageData }> = ({ img }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img.src})` }}
      className={classes.imgContainer}
    ></div>
  );
};

export default ImgContainer;
