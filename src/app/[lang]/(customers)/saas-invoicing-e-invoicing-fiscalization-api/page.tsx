import React from "react";
import Hero from "@/app/_components/UI/Hero";
import Grid from "@/app/_components/UI/Grid";
import Benefits from "@/app/_components/reusables/Benefits";
import { hero, perks } from "./content";
import MiddleCta from "@/app/_components/reusables/MiddleCta";
import CustomerCta from "@/app/_components/reusables/CustomerCta";
import { Metadata } from "next";
import CodeExample from "@/app/_components/reusables/CodeExample";
import worldImg from "../../../_assets/world.webp";
import Image from "next/image";
import hiddenUi from "../../../_assets/hiddenUiImg.webp";
import embeddedImg from "./embedUI.png";
import Footer from "@/app/_components/footer/Footer";

export const metadata: Metadata = {
  title: "Global invoicing & e-invoicing with 1 API for SaaS",
  description:
    "Add locally tax compliant invoicing & billing to your B2C & B2B SaaS with 1 single API.",
};

const Saas: React.FC<{}> = () => {
  return (
    <>
      <Hero content={hero} />
      <Grid>
        <div>
          <h2>Solution for modern software providers </h2>
          <p>
            WIth increasing tax regulations, local & international Saas
            providers are finding it difficult to comply with the technical
            specifications of each market.
          </p>
          <p>
            By connecting to our platform, SaaS solutions can comply with local
            invoicing regulations on a global scale, and provide compliant,
            value-added features to their clients in the blink of the eye.
          </p>
        </div>
        <div>
          <Image src={worldImg} alt="" className="m-auto w-3/5" />
        </div>
      </Grid>
      <Benefits
        title="Enable B2C & B2B invoicing for your SaaS"
        subtitle="Benefits"
        perks={perks}
      />
      <Grid>
        <div>
          <Image src={hiddenUi} alt="" className="m-auto h-72 w-auto" />
        </div>
        <div>
          <h2>Completely hidden behind your UI</h2>
          <p>
            Your customers will never leave your platform, so you maintain the
            whole user experience journey. This allows you to focus on your core
            business and leave the boring part to us.
          </p>
        </div>
      </Grid>
      <MiddleCta />
      <Grid>
        <div>
          <h2>Embedded finance</h2>
          <p>
            Add invoicing UI as part of your SaaS in the shape of an embedded
            invoicing front end.
          </p>
          <p>
            Fully customizable to your branding, with your logo, correct
            language and currency, we allow for a seamless, quick integration.
          </p>
        </div>
        <div>
          <Image src={embeddedImg} alt="" className="m-auto h-72 w-auto" />
        </div>
      </Grid>
      <CodeExample />
      <CustomerCta text="Start with the DDD Invoices platform and enable compliant invoicing for your SaaS today" />
      <Footer />
    </>
  );
};

export default Saas;
