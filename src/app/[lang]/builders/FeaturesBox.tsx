import React from "react";
import { needsObjType } from "./content";

const FeaturesBox: React.FC<{ content: needsObjType }> = ({ content }) => {
  return (
    <div>
      <h3>{content.title}</h3>
      <p>{content.description}</p>
    </div>
  );
};

export default FeaturesBox;
