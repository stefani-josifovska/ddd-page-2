import React from "react";
import Hero from "@/app/_components/UI/Hero";
import { heroContentObj } from "@/app/globalTypes";
import classes from "./Builders.module.scss";
import Boxes from "@/app/_components/UI/Boxes";
import { boxContent } from "./content";
import Grid from "@/app/_components/UI/Grid";
import Features from "./Features";
import ButtonLink from "@/app/_components/UI/ButtonLink";
import Footer from "@/app/_components/footer/Footer";

const heroContent: heroContentObj = {
  title: "Builders",
  text: [
    "Transform any marketplace and empower growth through our integration with a single API.",
  ],
  buttons: [
    {
      text: "Talk to us",
      href: "https://calendly.com/ddd-invoices/45min",
      isCalendly: true,
      variant: "primary",
      color: "orange",
    },
    {
      text: "Login",
      href: "https://app.dddinvoices.com/login",
      variant: "secondary",
      color: "orange",
    },
  ],
  img: { src: "slika", alt: "slika" },
};

const Builders: React.FC<{}> = () => {
  return (
    <>
      <Hero content={heroContent} />
      <section>
        <div className={classes.width}>
          <h2>Unleash the potential of a smart B2B Marketplace</h2>
        </div>
        <Boxes content={boxContent} />
      </section>
      <section>
        <Grid>
          <div>
            <h2>Power up your marketplace with additional features</h2>
            <p>
              Choose from 20 APIs to create a custom solution tailored to your
              organizations specific needs and governmental requirements.
            </p>
            <p>
              Seamlessly integrate with any existing platform within 1-3 days.
            </p>
            <p>
              Local language and currency conversion - customized experience
              with ease of understanding and simplified accounting.
            </p>
          </div>
          <div>slika</div>
        </Grid>
        <Grid>
          <div>slika</div>
          <div>
            <h3>Get up and running in minutes</h3>
            <h2>How to get started?</h2>
            <p>
              Connecting your software to e-invoicing API is a simple process.
            </p>
            <ol>
              <li>Read the documentation</li>
              <li>Register as a service provider</li>
              <li>Create your own API key and start testing in a sandbox</li>
              <li>Switch to production when ready to start e-invoicing</li>
            </ol>
            <div>
              <ButtonLink
                href="https://app.dddinvoices.com/sign-up"
                content="Start for free"
                variant="primary"
                color="orange"
              />
              <ButtonLink
                href="https://app.dddinvoices.com/documentation"
                content="Read the docs"
                variant="secondary"
                color="orange"
              />
            </div>
          </div>
        </Grid>
      </section>
      <Features />
      <Footer />
    </>
  );
};

export default Builders;
