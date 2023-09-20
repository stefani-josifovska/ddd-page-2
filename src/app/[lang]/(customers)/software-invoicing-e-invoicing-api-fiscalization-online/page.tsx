import React from "react";
import Hero from "@/app/_components/UI/Hero";
import { hero, perks } from "./content";
import Grid from "@/app/_components/UI/Grid";
import Benefits from "../../../_components/reusables/Benefits";
import MiddleCta from "@/app/_components/reusables/MiddleCta";
import CustomerCta from "@/app/_components/reusables/CustomerCta";
import img1 from "./img1.png";
import img2 from "./img2.png";
import ImgContainer from "@/app/_components/UI/ImgContainer";
import CaseStudies from "@/app/_components/reusables/CaseStudies";
import { Metadata } from "next";
import ButtonLink from "@/app/_components/UI/ButtonLink";
import worldImg from "../../../_assets/world.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Global e-invoicing API for ERP, CRM & softwares",
  description:
    "Enable globally tax compliant invoicing for your software with our invoicing, e-invoicing & fiscalization API.",
};

const Vendors: React.FC<{}> = () => {
  return (
    <>
      <Hero content={hero} />
      <Grid>
        <div>
          <h2>Business scalability and integration</h2>
          <p>
            With more and more countries demanding digital reporting, software
            providers of ERPs, CRMs and others find it increasingly harder to
            keep up with all regulations.
          </p>
          <p>
            When adhering to requirements in your country or in other markets
            due to expansion, your team will need to monitor the changes in
            legislation and create the fiscalization & e-invoicing ability by
            themselves.
          </p>
          <p>
            We integrate with your existing systems with one API in 1-3 days.
            Through ensuring a seamless data flow & minimizing disruptions, we
            assist you in achieving worry-free certified compliance.
          </p>
        </div>
        <div>
          <Image src={worldImg} alt="" className="m-auto" />
        </div>
      </Grid>
      <Benefits
        title="Skip all development costs & save with e-invoices"
        subtitle="Benefits"
        perks={perks}
      />
      <Grid>
        <div>
          <ImgContainer img={img1} />
        </div>
        <div>
          <h2>Invoicing API to handle it all</h2>
          <p>
            Compliance in every aspect so your ERP expansion is as smooth as it
            can be.
          </p>
          <ul>
            <li>e-Invoicing,</li>
            <li>Real-time reporting/fiscalization,</li>
            <li>VAT compliance,</li>
            <li>Credit-notes,</li>
            <li>PEPPOL,</li>
            <li>Achiving and</li>
            <li>
              Everything else required for invoicing compliance for your ERP!
            </li>
          </ul>
        </div>
      </Grid>
      <MiddleCta />
      <Grid>
        <div>
          <h2>Require more complex solutions?</h2>
          <p>
            Our custom services enable effortless invoicing & management
            throughout the entire invoice life-cycle, even for the most
            demanding business cases.
          </p>
          <p>
            Fully adapting to your existing software system, we guarantee the
            uninterrupted exchange of all of your{" "}
            <span className="whitespace-nowrap">e-invoices</span>, making sure
            that your electronic documents are in good hands.
          </p>
          <ButtonLink
            href="/enterprises-invoicing-e-invoicing-fiscalization"
            content="Look here for enterprise solutions >"
            variant="primary"
            color="orange"
            className="px-10"
          />
        </div>
        <div>
          <ImgContainer img={img2} />
        </div>
      </Grid>
      <CaseStudies />
      <CustomerCta text="Start with the DDD Invoices platform and enable e-invoicing & fiscalization for your ERP today." />
    </>
  );
};

export default Vendors;
