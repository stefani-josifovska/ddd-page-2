import React from "react";
import classes from "./Company.module.scss";
import { contacts } from "./contacts";
import ContactBox from "./ContactBox";
import Image from "next/image";
import TailoredSaas from "./tailoredSaas.png";
import einvOnline from "./einvOnline.svg";
import microsoft from "./supported1.png";
import partner1 from "./partner1.svg";
import partner2 from "./partner2.svg";
import partner3 from "./partner3.svg";
import logo from "./dddWhite.svg";
import { Metadata } from "next";
import CalendlyPopup from "@/app/_components/reusables/CalendlyPopup";

export const metadata: Metadata = {
  title: "DDD Invoices | About Us",
  description:
    "DDD Invoices is a global e-invoicing platform that enables softwares to comply with local invoicing regulations, globally. With over 35 years of experience in invoicing industry we want to streamline invoicing processes and facilitate digitalisation",
};

const Company: React.FC<{}> = () => {
  return (
    <section className={classes.container}>
      <div className={classes.banner}></div>
      <div className="py-10">
        <h1>About DDD invoices</h1>
        <p className="lg:w-9/12 my-4">
          Your global e-invoicing partner for effortless compliance.
        </p>
        <p className="lg:w-9/12">
          With DDD invoices we want to facilitate the transition to electronic
          invoicing and automate global & local invoice exchange so you can
          focus on the core of your business.
        </p>
        <h2 className="my-10">Our Mission</h2>
        <p className="lg:w-9/12 my-4">
          Founded on the principles of innovation and excellence, DDD Invoices
          is driven by a mission to empower businesses to focus on their
          strengths while we handle the intricacies of invoicing.
        </p>
        <p className="lg:w-9/12 my-4">
          More than 35 years of Invoicing & ERP industry expertise, led to
          creation of the DDD Invoices platform, with one goal in mind:
        </p>
        <p>
          <i>“Make invoicing easy.”</i>
        </p>
        <p className="lg:w-9/12 my-4">
          With the increasing global shift towards e-invoicing, more and more
          companies find it difficult to develop all of the compliance features
          by themselves.
        </p>
        <p className="lg:w-9/12 my-4">
          At DDD Invoices, we take pride in being your global e-invoicing
          partner, offering unparalleled expertise with over three decades in
          the invoicing industry. Our company is dedicated to revolutionizing
          the way businesses approach e-invoicing, backed by a rich history of
          experience and a commitment to innovation. To bridge the gap in the
          market, we embarked on a path of extensive research and development,
          resulting in a comprehensive suite of solutions.
        </p>
        <div className="my-8">
          {/* <h3>Meet the team</h3> */}
          <h2>Our leadership team</h2>
          <div className="flex flex-wrap gap-8 justify-center xl:justify-between">
            {contacts.map((contact) => (
              <ContactBox
                key={contact.name}
                name={contact.name}
                position={contact.position}
                img={contact.img}
              />
            ))}
          </div>
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <h2>Empowering Developers, Enhancing User Experience</h2>
            <p className="lg:w-9/12">
              Our dedication goes beyond serving businesses with invoicing
              solutions; it extends to the software developers who drive digital
              transformation. Through our innovative approach, we have developed
              solutions that cater to both software providers and end users.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <h3>See more at:</h3>
            <a className={classes.seeMoreLink} href="https://tailoredsaas.com/">
              <span>TailoredSaas</span>
              <Image src={TailoredSaas} alt="Tailored SaaS" width="100" />
            </a>
            <a
              className={classes.seeMoreLink}
              href="https://e-invoices.online/"
            >
              <span className="whitespace-nowrap">e-Invoices.online</span>
              <Image src={einvOnline} alt="e-Invoices Online" />
            </a>
          </div>
        </div>
        <div className="text-center my-10 py-10">
          <h3 className={classes.cta}>
            At DDD Invoices we&apos;re your partners for progress. Contact us
            today to support your invoicing needs.
          </h3>
          {/* <Button
            content="Talk to us"
            variant="primary"
            color="orange"
            className="w-72"
          /> */}
          <CalendlyPopup className="w-72" color="white" />
        </div>
        <div>
          <h2>Supported by</h2>
          <div className="flex justify-center">
            <Image src={microsoft} alt="Microsoft" />
          </div>
        </div>
        <div>
          <h2>Partnerships</h2>
          <div className="flex flex-wrap justify-center">
            <Image src={partner1} alt="RubikHub" />
            <Image src={partner2} alt="" />
            <Image src={partner3} alt="SpinLab" />
          </div>
        </div>
        <div className="flex my-20">
          <div className="flex-1 flex justify-center">
            <Image src={logo} alt="DDD Invoices" />
          </div>
          <div className="flex-1 flex flex-col justify-around">
            <h2>Stay connected with us:</h2>

            <p>
              Website: www.DDDInvoices.com
              <br />
              Email: info@DDDInvoices.com <br />
              Address: Letališka ulica 31j
              <br />
              1000 Ljubljana, Slovenia, EU
            </p>
            <p>“Invoicing compliance, effortlessly.”</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
