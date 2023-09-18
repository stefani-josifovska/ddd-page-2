import React from "react";
import classes from "./Boxes.module.scss";
import { boxObject } from "@/app/globalTypes";
import Box from "./Box";

const Boxes: React.FC<{
  subtitle?: string;
  title?: string;
  content: boxObject[];
}> = ({ subtitle, title, content }) => {
  return (
    <section className={classes.container}>
      <span>{subtitle}</span>
      <h2>{title}</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 place-content-center">
        {content.map((item) => (
          <Box key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Boxes;
