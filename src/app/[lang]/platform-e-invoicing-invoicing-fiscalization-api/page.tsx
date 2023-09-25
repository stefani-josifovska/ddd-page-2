import React from "react";
import Hero from "@/app/_components/UI/Hero";
import Grid from "@/app/_components/UI/Grid";
import MiddleCta from "@/app/_components/reusables/MiddleCta";
import { platformHero, perks } from "./content";
import Prefooter from "@/app/_components/prefooter/Prefooter";
import QuestionsContainer from "@/app/_components/questions/QuestionsContainer";
import classes from "./Platform.module.scss";
import { Metadata } from "next";
import Support from "./Support";
import ButtonLink from "@/app/_components/UI/ButtonLink";
import schema from "./schema.png";
import Image from "next/image";
import { hints } from "./content";
import Hint from "@/app/_components/UI/Hint";
import Platform1 from "../../_assets/platform1.webp";
import Platform2 from "../../_assets/world.webp";
import Footer from "@/app/_components/footer/Footer";

export const metadata: Metadata = {
  title:
    "Single integration global e-invoicing platform for all of your invoicing needs",
  description:
    "Connect to our platform in one day with a single API, and enable locally tax compliant e-invoicing for your software and send invoices all around the world.",
};

const Platform: React.FC<{}> = () => {
  return (
    <>
      <Hero content={platformHero} />
      <Grid>
        <div>
          <Image src={Platform1} alt="" className="m-auto" />
        </div>
        <div>
          <span>Get up and running in minutes</span>
          <h2>How to get started?</h2>
          <p>
            Connecting your software to our platform via e-invoicing API is a
            simple process.
          </p>
          <ol>
            <li>Register on our platform</li>
            <li>Read the documentation & integrate our API (for developers)</li>
            <li>Test integration with a test API key</li>
            <li>
              Change to production API key when ready to start e-invoicing
            </li>
          </ol>
          <div className={classes.heroBtns}>
            <ButtonLink
              href="https://dddinvoices.com/sign-up"
              content="Start for free"
              variant="primary"
              color="orange"
              className="xl:mr-4 px-10"
            />
            <ButtonLink
              href="https://dddinvoices.com/documentation"
              content="Read the docs"
              variant="secondary"
              color="orange"
              className="px-10 sm:ml-4"
            />
          </div>
        </div>
      </Grid>
      <Grid>
        <div>
          <span>How does it work?</span>
          <h2>
            Enable <b>e-invoicing globally</b> in minutes
          </h2>
          <p>
            Connect to our platform with the invoicing API to send us invoice
            data in a simple .JSON format and we&apos;ll create a compliant
            invoice & e-invoice, deliver it globally and report it to the tax
            authorities.
          </p>
          <p>
            Receive invoices from various sources (tax authority, PEPPOL, OCR
            from mail, supplier&apos;s ERP etc.) to our platform and receive
            them directly into your software in the format you require.
          </p>
          <p>
            Store documents in our secure cloud for a legally required period.
          </p>
        </div>
        <div>
          <div className="relative m-auto w-fit">
            <Image src={schema} alt="schema" />
            {hints.map((hint, index) => (
              <Hint key={`hint-${index}`} hint={hint} />
            ))}
          </div>
        </div>
      </Grid>
      <MiddleCta />
      <QuestionsContainer page="platform" />
      {/* <Benefits
        title="Support in every step of your invoicing"
        subtitle="Benefits for our customers"
        perks={perks}
      /> */}
      <Support
        title="Support in every step of your invoicing"
        subtitle="Benefits for our customers"
        content={perks}
      />
      <Grid>
        <div>
          <h2>
            Compliant invoicing & e-Invoicing ability for your software globally
          </h2>
          <p>
            E-Invoicing & real-time reporting is an irreversible global trend,
            that more and more countries are implementing.
          </p>
          <p>
            With the DDD Invoices platform you will never worry about local or
            international invoicing regulations because we make sure your
            invoicing is always compliant - forever.
          </p>
          <ButtonLink
            href="https://dddinvoices.com/learn/"
            content="See regulatory development in Countries >"
            variant="secondary"
            color="orange"
            className="px-10"
          />
        </div>
        <div>
          <Image src={Platform2} alt="" className="m-auto" />
        </div>
      </Grid>
      <Prefooter title="More about the DDD Invoices platform" />
      <Footer />
    </>
  );
};

export default Platform;
