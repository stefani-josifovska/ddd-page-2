import React from "react";
import classes from "./Company.module.scss";
import { StaticImageData } from "next/image";

const ContactBox: React.FC<{
  name: string;
  position: string;
  img: StaticImageData;
}> = ({ name, position, img }) => {
  return (
    <div className={classes.contactContainer}>
      <div
        className={classes.contactImg}
        style={{ backgroundImage: `url(${img.src})` }}
      ></div>
      <p>
        {name} - {position}
      </p>
    </div>
  );
};

export default ContactBox;
