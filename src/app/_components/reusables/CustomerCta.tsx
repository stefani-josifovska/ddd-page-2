import React from "react";
import classes from "./MiddleCta.module.scss";
import ButtonLink from "../UI/ButtonLink";

const CustomerCta: React.FC<{ text: string }> = ({ text }) => {
  return (
    <section className={classes.container}>
      <h2>{text}</h2>
      <ButtonLink
        href="https://app.dddinvoices.com/sign-up"
        content="Start free integration"
        variant="primary"
        color="orange"
        className="px-10"
      />
    </section>
  );
};

export default CustomerCta;
