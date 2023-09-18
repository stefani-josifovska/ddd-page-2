import React from "react";
import Hero from "@/app/_components/UI/Hero";
import Grid from "@/app/_components/UI/Grid";
import Benefits from "@/app/_components/reusables/Benefits";
import { hero, perks } from "./content";
import MiddleCta from "@/app/_components/reusables/MiddleCta";
import CustomerCta from "@/app/_components/reusables/CustomerCta";
import img1 from "./img1.png";
import img2 from "./img2.png";
import ImgContainer from "@/app/_components/UI/ImgContainer";
import { Metadata } from "next";
import Image from "next/image";
import posImg from "../../../_assets/hiddenUiImg.webp";
import CodeExample from "@/app/_components/reusables/CodeExample";

export const metadata: Metadata = {
  title: "Invoicing & fiscalization for POS & ticketing systems",
  description:
    "A simple API solution for real-time reporting & fiscalization for POS, ticketing platforms, machines and other.",
};

const Ticketing: React.FC<{}> = () => {
  return (
    <>
      <Hero content={hero} />
      <Grid>
        <div>
          <h2>Seamless integration with your software</h2>
          <p>
            Machine vendors, POS & ticketing system software producers are
            required to adhere to more and more digital reporting regulations
            due to new tax legislation. If selling internationally, it is hard
            to follow all of the regulations in every country you have clients
            in.
          </p>
          <p>
            Our invoicing & fiscalization API seamlessly integrates into your
            existing systems, enabling you to effortlessly add advanced
            invoicing and fiscalization capabilities without disrupting your
            workflow.
          </p>
        </div>
        <div>
          <ImgContainer img={img1} />
        </div>
      </Grid>
      <Benefits
        title="Local tax regulations made easy with our fiscalization API"
        subtitle="Benefits"
        perks={perks}
      />
      <Grid>
        <div>
          <ImgContainer img={img2} />
        </div>
        <div>
          <h2>
            Stable & secure even with a big number of international requests
          </h2>
          <p>
            Stay compliant with ever-changing fiscal regulations effortlessly.
            Our API ensures your invoices meet all legal requirements, saving
            you time and potential fines - even for your biggest customers.
          </p>
          <p>
            We understand the importance of data security. Rest assured knowing
            that our API employs the latest encryption and security protocols to
            safeguard sensitive information.
          </p>
        </div>
      </Grid>
      <MiddleCta />
      <Grid>
        <div>
          <h2>100% compliant with a simple API integration</h2>
          <p>
            Our easy to implement cloud invoicing, billing & fiscalization
            solution, allows you to become locally compliant quickly and
            seamlessly. Provide digital receipts, stand out from the competition
            and attract more customers, all while boosting your bottom line.
          </p>
        </div>
        <div>
          <Image src={posImg} alt="" className="m-auto h-72 w-auto" />
        </div>
      </Grid>
      <CodeExample />
      <CustomerCta />
    </>
  );
};

export default Ticketing;
