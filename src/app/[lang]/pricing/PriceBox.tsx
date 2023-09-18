import React from "react";
import { pricingObj } from "./pricingPackages";
import classes from "./Pricing.module.scss";

const PriceBox: React.FC<{ content: pricingObj }> = ({ content }) => {
  return (
    <div className={`flex-1 ${classes.priceContainer}`}>
      <h4>{content.subtitle}</h4>
      <h3>{content.title}</h3>
      <ul>
        {content.points.map((item, index) => (
          <li key={`${content.type}-${index}`}>{item}</li>
        ))}
      </ul>
      <p>{content.disclaimer}</p>
    </div>
  );
};

export default PriceBox;
