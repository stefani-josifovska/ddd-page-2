import React from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../_assets/navbarLogo.svg";
import Image from "next/image";
import { items } from "./navbarItems";
import Link from "next/link";
import Background from "./Background";
import MobileNavbar from "./MobileNavbar";
import ButtonLink from "../UI/ButtonLink";
import CalendlyPopup from "../reusables/CalendlyPopup";
import CustomersDropdown from "./CustomersDropdown";
import LearnDropdown from "./LearnDropdown";
import exportIcon from "../../_assets/exportIcon.svg";

const Navbar: React.FC<{}> = () => {
  return (
    <nav
      className={classes.container}
      itemType="http://schema.org/SiteNavigationElement"
    >
      <Background />
      <div className={classes.desktopNav}>
        <Link href="/">
          <Image
            src={Logo}
            alt="DDD Invoices"
            width={200}
            height={20}
            className={`mr-4 ${classes.logoImg}`}
          />
        </Link>
        <ul>
          {items.map((item, index) => {
            if (item.children) {
              return (
                <li
                  key={`navbar-item-${index}`}
                  className={`${classes.navDropdownContainer} ${classes.navbarItem}`}
                >
                  <button id={`dropdown-button-${index}`}>{item.item}</button>
                  <div
                    className={classes.toggleDisp}
                    aria-labelledby={`dropdown-button-${index}`}
                  >
                    {item.item === "Customers" && <CustomersDropdown />}
                    {item.item === "Learn" && <LearnDropdown />}
                  </div>
                </li>
              );
            }
            return (
              <li key={`navbar-item-${index}`} className={classes.navbarItem}>
                <Link href={item.url} className={item.item === "API Documentation" ? "flex gap-1" : "inline-block"}>
                  {item.item}{" "}
                  {item.item === "API Documentation" && (
                    <Image src={exportIcon} alt="" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <CalendlyPopup color="white" />
          <ButtonLink
            href="https://dddinvoices.com/login"
            content="Login"
            variant="secondary"
            color="white"
            textColor="white"
            className="w-6"
          />
        </div>
      </div>
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
