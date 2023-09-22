import React from "react";
import Hero from "@/app/_components/UI/Hero";
import { hero, perks } from "./content";
import Grid from "@/app/_components/UI/Grid";
import Benefits from "@/app/_components/reusables/Benefits";
import MiddleCta from "@/app/_components/reusables/MiddleCta";
import CustomerCta from "@/app/_components/reusables/CustomerCta";
import img1 from "./img1.png";
import img2 from "./img2.png";
import ImgContainer from "@/app/_components/UI/ImgContainer";
import { Metadata } from "next";
import CodeExample from "@/app/_components/reusables/CodeExample";
import worldImg from "../../../_assets/world.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "Global automated billing & invoice processing for eCommerce",
  },
  description:
    "Tax compliant invoicing & automated billing API for e-commerce and marketplace. E-invoicing & fiscalization online API. Integrate in 1 day.",
};

const Commerce: React.FC<{}> = () => {
  return (
    <>
      <Hero content={hero} />
      <Grid>
        <div>
          <h2>World-wide, local tax invoicing compliance </h2>
          <p>
            Never worry about local or international regulations, formats or
            syntaxes again. Have peace of mind, avoid penalties and save on any
            unnecessary compliance costs.
          </p>
          <p>
            Connect to local tax authorities & global e-invoicing networks and
            stay compliant - forever.
          </p>
        </div>
        <div>
          <Image src={worldImg} alt="" className="m-auto w-3/5" />
        </div>
      </Grid>
      <Benefits
        title="Invoicing as an API for your eCommerce platform"
        subtitle="Benefits"
        perks={perks}
      />
      <Grid>
        <div>
          <ImgContainer img={img1} />
        </div>
        <div>
          <h2>Everything you need for your eCommerce platform</h2>
          <p>
            Elevate your e-Commerce transactions with our seamless invoicing
            solution.
          </p>
          <p>
            Effortlessly generate accurate invoices with detailed product info,
            taxes and discounts.
          </p>
          <p>
            From multi-currency support to customizable branding, we streamline
            the invoicing process for customers while ensuring tax compliance
            everywhere you go
          </p>
        </div>
      </Grid>
      <MiddleCta />
      <Grid>
        <div>
          <h2>Scalability & process automation</h2>
          <p>
            The DDD Solution is able to handle high transaction volumes and
            handle complex financial data, allowing you to grow your business
            without constraints.
          </p>
          <p>
            Make manually inputting data a thing of the past by automating the
            invoicing process and increase efficiency by eliminating non-value
            adding activities.
          </p>
        </div>
        <div>
          <ImgContainer img={img2} />
        </div>
      </Grid>
      <CodeExample />
      <CustomerCta text="Start with the DDD Invoices platform and enjoy automated compliant billing for your eCommerce business today." />
    </>
  );
};

export default Commerce;
