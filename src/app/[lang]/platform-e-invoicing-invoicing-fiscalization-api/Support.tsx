import React from "react";
import classes from "./Platform.module.scss";
import { boxObject } from "@/app/globalTypes";
import Box from "@/app/_components/UI/Box";

const Support: React.FC<{
  subtitle?: string;
  title?: string;
  content: boxObject[];
}> = ({ subtitle, title, content }) => {
  return (
    <section className={classes.container}>
      <h3>{subtitle}</h3>
      <h2>{title}</h2>
      <div className={classes.boxesContainer}>
        {content.map((item) => (
          <Box key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Support;
