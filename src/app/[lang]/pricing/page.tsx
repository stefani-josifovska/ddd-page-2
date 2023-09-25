import React from "react";
import Hero from "@/app/_components/UI/Hero";
import { domestic, international, customPoints } from "./pricingPackages";
import PriceBox from "./PriceBox";
import Button from "@/app/_components/UI/Button";
import classes from "./Pricing.module.scss";
import TrustedBy from "@/app/_components/homepage/TrustedBy";
import Grid from "@/app/_components/UI/Grid";
import { heroContent } from "./content";
import QuestionsContainer from "@/app/_components/questions/QuestionsContainer";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import MiddleCta from "@/app/_components/reusables/MiddleCta";
import ImgContainer from "@/app/_components/UI/ImgContainer";
import { Metadata } from "next";
import CodeExample from "@/app/_components/reusables/CodeExample";
import Footer from "@/app/_components/footer/Footer";

export const metadata: Metadata = {
  title: "DDD Invoices | Pricing",
  description: "Pricing of DDD Invoices.",
};

const Pricing: React.FC<{}> = () => {
  return (
    <>
      <Hero content={heroContent} />
      {/* <section
        className={`${classes.container} ${classes.priceBoxesContainer}`}
      >
        <PriceBox content={domestic} />
        <PriceBox content={international} />
      </section> */}
      {/* <section
        className={`${classes.container} ${classes.pricingCtaContainer} flex flex-col md:flex-row gap-10 md:gap-0 mt-20`}
      >
        <div className="flex-1 text-center flex flex-col items-center justify-center">
          <h3 className="mb-3">Talk to us?</h3>
          <Button
            content="Book a meeting"
            variant="primary"
            color="orange"
            className="px-10"
          />
        </div>
        <div className="flex-1">
          <ul>
            {customPoints.map((point, index) => (
              <li key={`custom-${index}`}>{point}</li>
            ))}
          </ul>
        </div>
      </section> */}
      <TrustedBy />
      <QuestionsContainer page="pricing" />
      {/* <section className={`${classes.container} ${classes.introSection}`}>
        <h3>A complete invoicing, e-invoicing & fiscalization solution</h3>
        <h2>What do I get for this price?</h2>
      </section> */}
      <Grid>
        <div>
          <ImgContainer img={img1} />
        </div>
        <div>
          <h2 className="mb-10">
            For software providers of any type & any scale
          </h2>
          <p>
            Give your customer the gift of a modern, frictionless, and painless
            solution, by providing them with software that has all the
            intricacies of localized invoicing, e-invoicing & fiscalization
            handled.
          </p>
          <p>
            Integrate with DDD Invoices once and get invoicing compliance for
            every country you do business in.
          </p>
        </div>
      </Grid>
      <MiddleCta />
      <Grid>
        <div>
          <h2 className="mb-10">
            Protect yourself and your customers with a backed-up & tested system
          </h2>
          <p>
            All invoices on the DDD Invoices platform are backed-up in a secure,
            encrypted and legally approved archive. Our capable and proven
            system efficiently manages multiple requests simultaneously, making
            sure your invoices are delivered to the right receiver.
          </p>
        </div>
        <div>
          <ImgContainer img={img2} />
        </div>
      </Grid>
      <CodeExample />
      <Grid>
        <div>
          <h2 className="mb-10">
            Understand how invoices are transmitted through your software
          </h2>
          <p>
            See which customers are sending the most invoices through your
            software, and charge them accordingly. DDD Invoices provides
            detailed reporting as well as alerts, and exports,
          </p>
        </div>
        <div>
          <ImgContainer img={img3} />
        </div>
      </Grid>
      <Footer />
    </>
  );
};

export default Pricing;
