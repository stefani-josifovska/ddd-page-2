import React from "react";
import classes from "./CaseStudies.module.scss";
import trebjesaImg from "./caseStudyContent/trebjesa2.svg";
import sapImg from "./caseStudyContent/sap.png";
import Image from "next/image";

const CaseStudies: React.FC<{}> = () => {
  return (
    <section className={classes.container}>
      <span>Case studies</span>
      <h2>Read our customer testimonials</h2>
      <div>
        <a href="https://dddinvoices.com/learn/trebjesa-ddd-invoices-solution/">
          <div className={classes.content}>
            <div className="flex gap-8">
              <Image src={trebjesaImg} alt="trebjesa" />
              <Image src={sapImg} alt="SAP" />{" "}
            </div>
            <p>
              DDD Invoices managed to quickly lend a helping hand when a SAP
              integrating partner required a compliant platform for a client.
            </p>
            {/* <p>
              <span>Trebjesa brewery & SAP</span>
            </p> */}
          </div>
        </a>
      </div>
    </section>
  );
};

export default CaseStudies;
