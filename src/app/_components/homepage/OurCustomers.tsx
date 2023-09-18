import React from "react";
import classes from "./Homepage.module.scss";
import { customers } from "./customers";
import Boxes from "../UI/Boxes";

const OurCustomers: React.FC<{}> = () => {
  return (
    <section className={classes.container}>
      <Boxes
        subtitle="Our customers"
        title="Never think about invoicing
compliance ever again"
        content={customers}
      />
    </section>
  );
};

export default OurCustomers;
