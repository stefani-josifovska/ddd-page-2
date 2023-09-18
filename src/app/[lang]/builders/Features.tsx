import React from "react";
import classes from "./Builders.module.scss";
import { needsObj } from "./content";
import FeaturesBox from "./FeaturesBox";

const Features: React.FC<{}> = () => {
  return (
    <section className={classes.width}>
      <h2>Adjustable to your needs</h2>
      <p>
        Different levels of integration to provide compliant invoicing for
        marketplaces.
      </p>
      {needsObj.map((item, index) => (
        <FeaturesBox key={`feature-${index}`} content={item} />
      ))}
    </section>
  );
};

export default Features;
