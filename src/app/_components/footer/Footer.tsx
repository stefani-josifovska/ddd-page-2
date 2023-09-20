import React from "react";
// import Button from "../UI/Button";
import classes from "./Footer.module.scss";
import logo from "../../_assets/navbarLogo.svg";
import Image from "next/image";
import { items } from "./footerItems";
import Link from "next/link";
import ButtonLink from "../UI/ButtonLink";
import peppolLogo from "./peppol.svg";

const Footer: React.FC<{}> = () => {
  return (
    <section className={classes.container}>
      <div className="lg:flex justify-between items-center">
        <div className={classes.firstFooterSec}>
          <h3>Compliance made easy</h3>
          <h2 className="mb-1">Ready to get started?</h2>
          <p className="mb-5">
            Test for free. Pay when you are ready to deploy.
          </p>
          <ButtonLink
            href="https://dddinvoices.com/sign-up"
            content="Start for free"
            variant="primary"
            color="orange"
            className="px-10"
          />
        </div>
        <div>
          <Image
            src={peppolLogo}
            alt="Peppol service provider"
            className={classes.peppolImgContainer}
          />
        </div>
      </div>
      <div className="xl:flex gap-32 my-16 pt-16 pb-10">
        <Image src={logo} alt="DDD Invoices" width={300} />
      </div>
      <div className="xl:flex gap-32 mt-16">
        <div>
          <p className="xl:mb-0">
            DDD Invoices is an enterprise-grade platform delivering a secure
            infrastructure for creating, sending, receiving and storing
            electronic documents. DDD Invoices enables software providers like
            ERPs, SaaS, eCommerce, marketplaces, POS systems, accounting &
            invoicing softwares, billing services and more, to easily adhere to
            global invoicing compliance requirements by utilizing our powerful
            platform.
          </p>
        </div>
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${classes.footerMenu}`}
        >
          {items.map((item, index) => (
            <div key={`footer-item-${index}`}>
              {item.url ? (
                <Link href={item.url}>{item.title}</Link>
              ) : (
                <span>{item.title}</span>
              )}
              <ul>
                {item.children.map((child, childIndex) => (
                  <li key={`footer-subitem-${index}-${childIndex}`}>
                    {child.url ? (
                      <Link href={child.url}>{child.title}</Link>
                    ) : (
                      child.title
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
