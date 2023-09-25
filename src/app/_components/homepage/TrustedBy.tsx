import React from "react";
import classes from "./Homepage.module.scss";
import { companies } from "./companies";
import Image from "next/image";

const TrustedBy: React.FC<{}> = () => {
  return (
    <section className={`${classes.container} my-20 `}>
      <div>
        <h2>Trusted by</h2>
        <div
          className={`${classes.logoContainer} grid grid-cols-2 lg:grid-cols-4 gap-y-8`}
        >
          {companies.map((company) => (
            <div key={company.alt} className={classes.compLogoContainer}>
              <Image src={company.img} alt={company.alt} />
            </div>
          ))}
          <div className="text-center">
            <span>+ many others</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
