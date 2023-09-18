import React from "react";
import classes from "./MiddleCta.module.scss";
import ButtonLink from "../UI/ButtonLink";

const MiddleCta: React.FC<{}> = () => {
  return (
    <section className={classes.container}>
      <p className="mb-4 lg:mb-0">
        You do not need to know anything about{" "}
        <span className="whitespace-nowrap">e-invoicing</span> standards or
        real-time reporting.
      </p>
      <h2>
        One single integration with our platform takes care of all of your
        current & future invoicing needs, everywhere.
      </h2>
      <ButtonLink
        href="https://dddinvoices.com/sign-up"
        content="Start free integration"
        variant="primary"
        color="orange"
        className="px-10"
      />
    </section>
  );
};

export default MiddleCta;
