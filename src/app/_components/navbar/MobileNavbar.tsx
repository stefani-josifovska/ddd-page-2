"use client";
import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../_assets/navbarLogo.svg";
import hamburgerIcon from "../../_assets/hamburgerIcon.svg";
import closeIcon from "../../_assets/closeIcon.svg";
import { items } from "./navbarItems";
import CalendlyPopup from "../reusables/CalendlyPopup";
import ButtonLink from "../UI/ButtonLink";
import CustomersDropdown from "./CustomersDropdown";
import LearnDropdown from "./LearnDropdown";
import backArrow from "../../_assets/back_arrow.svg";
import exportIcon from "../../_assets/exportIcon.svg";

const MobileNavbar: React.FC<{}> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [chosenOption, setChosenOption] = useState<string | null>(null);

  const openMenuHandler = () => setIsMenuOpen(true);

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
    setChosenOption(null);
  };

  const chooseOptionHandler = (option: string) =>
    setChosenOption((prev) => {
      if (prev === option) return null;
      else return option;
    });

  const onBackHandler = () => setChosenOption(null);

  return (
    <div className={classes.mobileNav}>
      <Link href="/">
        <Image
          src={Logo}
          alt="DDD Invoices"
          width={200}
          height={20}
          className="mr-4"
        />
      </Link>
      <button onClick={openMenuHandler}>
        <Image src={hamburgerIcon} alt="" />
      </button>
      {isMenuOpen && (
        <div>
          <button onClick={closeMenuHandler} className={classes.closeBtn}>
            <Image src={closeIcon} alt="" />
          </button>
          {(chosenOption === "Customers" || chosenOption === "Learn") && (
            <button onClick={onBackHandler} className={classes.backBtn}>
              <Image src={backArrow} alt="" />
            </button>
          )}
          {!chosenOption && (
            <>
              <ul>
                {items.map((item, index) => {
                  if (item.children) {
                    return (
                      <li
                        key={`navbar-item-${index}`}
                        className={classes.navDropdownContainer}
                      >
                        <button
                          id={`dropdown-button-${index}`}
                          onClick={() => chooseOptionHandler(item.item)}
                        >
                          {item.item}
                        </button>
                      </li>
                    );
                  }
                  return (
                    <li key={`navbar-item-${index}`} onClick={closeMenuHandler}>
                      <Link
                        href={item.url}
                        className={
                          item.item === "API Documentation"
                            ? "flex gap-1"
                            : "inline-block"
                        }
                      >
                        {item.item}{" "}
                        {item.item === "API Documentation" && (
                          <Image src={exportIcon} alt="" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <CalendlyPopup className="w-56 md:w-80 mt-10" color="white" />
              <ButtonLink
                href="https://dddinvoices.com/login"
                content="Login"
                variant="secondary"
                color="orange"
                textColor="white"
                className="w-56 md:w-80 mt-6"
              />
            </>
          )}
          {chosenOption === "Customers" && (
            <CustomersDropdown onCloseMobileMenu={closeMenuHandler} />
          )}
          {chosenOption === "Learn" && (
            <LearnDropdown onCloseMobileMenu={closeMenuHandler} />
          )}
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
