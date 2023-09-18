import React from "react";
import Boxes from "@/app/_components/UI/Boxes";
import { boxObject } from "@/app/globalTypes";

const Benefits: React.FC<{
  title?: string;
  subtitle?: string;
  perks: boxObject[];
}> = ({ title, subtitle, perks }) => {
  return (
    <section>
      <Boxes subtitle={subtitle} title={title} content={perks} />
    </section>
  );
};

export default Benefits;
