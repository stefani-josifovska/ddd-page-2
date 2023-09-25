import React from "react";
import Hero from "@/app/_components/UI/Hero";
import Grid from "@/app/_components/UI/Grid";
import Benefits from "@/app/_components/reusables/Benefits";
import { hero, perks } from "./content";
import MiddleCta from "@/app/_components/reusables/MiddleCta";
import CustomerCta from "@/app/_components/reusables/CustomerCta";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import ImgContainer from "@/app/_components/UI/ImgContainer";
import { Metadata } from "next";
import CodeExample from "@/app/_components/reusables/CodeExample";
import Footer from "@/app/_components/footer/Footer";

export const metadata: Metadata = {
  title:
    "Add automated tax  compliant invoicing to your payment processor with 1 API",
  description:
    "Automated locally tax compliant billing & invoicing for payment processors. Stripe offers just PDF invoicing, but it is not locally compliant.",
};

const PaymentProv: React.FC<{}> = () => {
  return (
    <>
      <Hero content={hero} />
      <Grid>
        <div>
          <h2>Make your processor a one stop solution</h2>
          <p>Empower your clients with a one-stop solution.</p>
          <p>
            From processing payments to generating locally compliant invoices &
            <span className="whitespace-nowrap">e-invoices</span> to automated
            billing & self-billing, you can offer a seamless experience that
            adds value and efficiency.
          </p>
          <p>
            Our API automates the entire invoicing process, from creation to
            delivery, ensuring accuracy and compliance.
          </p>
        </div>
        <div>
          <ImgContainer img={img1} />
        </div>
      </Grid>
      <Benefits
        title="Payments & invoicing goes hand in hand"
        subtitle="Benefits"
        perks={perks}
      />
      <Grid>
        <div>
          <ImgContainer img={img2} />
        </div>
        <div>
          <h2>Expand with ease, as we handle the compliance</h2>
          <p>
            Navigate the complexities of international business effortlessly.
            Our invoicing API supports local invoicing regulations in over +30
            countries, enabling your customers to expand their horizons.
          </p>
        </div>
      </Grid>
      <MiddleCta />
      <Grid>
        <div>
          <h2>Drive revenue by offering more value to your customers</h2>
          <p>
            Elevate your offerings by providing your clients with a
            comprehensive invoicing, billing & fiscalization solution.
          </p>
          <p>
            Stand out from the competition and attract more customers, all while
            boosting your bottom line.
          </p>
        </div>
        <div>
          <ImgContainer img={img3} />
        </div>
      </Grid>
      <CodeExample />
      <CustomerCta text="Start with DDD Invoices platform and increase stickiness of your clients today" />
      <Footer />{" "}
    </>
  );
};

export default PaymentProv;
