import React from "react";
import { perks } from "./perks";
import classes from "./Prefooter.module.scss";

const Prefooter: React.FC<{ title: string }> = ({ title }) => {
  return (
    <section className={classes.container}>
      <span>Powerful technological foundation</span>
      <h2>{title}</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {perks.map((perk) => (
          <div key={perk.title}>
            <h4>{perk.title}</h4>
            <p>{perk.text}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Prefooter;
