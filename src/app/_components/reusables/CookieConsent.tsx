"use client";
import React, { useState, useEffect } from "react";
import classes from "./CookieConsent.module.scss";

const CookieConsent: React.FC<{}> = () => {
  const [isAccepted, setIsAccepted] = useState<boolean>(true);

  function getCookie(name: string) {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(name + "=") === 0) {
        return cookie.substring(name.length + 1);
      }
    }
    return "";
  }

  useEffect(() => {
    document.cookie = "SameSite=Strict";
    let cookieConsent = getCookie("cookieConsent");
    let localStorageItem = localStorage.getItem("cookieConsent");

    console.log(localStorageItem);

    if (!(cookieConsent || localStorageItem)) setIsAccepted(false);
  }, []);

  const onAcceptNecessaryCookies = () => {
    document.cookie = "cookieConsent=allowNecessary";
    localStorage.setItem("cookieConsent", "allowNecessary");
    // onAfterConsentHandler();
  };

  const onAcceptAllCookies = () => {
    document.cookie = "cookieConsent=allowAll";
    localStorage.setItem("cookieConsent", "allowAll");
    // onAfterConsentHandler();
  };

  return (
    <>
      {!isAccepted && (
        <section
          id="cookie-consent"
          className={classes.cookieConsent}
          style={{ display: "none" }}
        >
          <div>
            <div className={classes.firstConsentContainer}>
              <svg
                height="90px"
                viewBox="0 0 67 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: "8px" }}
              >
                <path
                  d="M39.2503 51.0057C35.4167 51.0057 35.4167 57.3525 39.2503 57.3525C43.2314 57.3525 43.2314 51.0057 39.2503 51.0057Z"
                  fill="#1D5582"
                />
                <path
                  d="M53.8476 38.6663C49.8665 38.6663 49.8665 45.0132 53.8476 45.0132C57.8286 45.0132 57.8286 38.6663 53.8476 38.6663Z"
                  fill="#1D5582"
                />
                <path
                  d="M34.5323 31.272C30.6987 31.272 30.6987 37.6189 34.5323 37.6189C38.5134 37.6189 38.5134 31.272 34.5323 31.272Z"
                  fill="#1D5582"
                />
                <path
                  d="M30.2561 7.05544C24.3583 7.05544 24.3583 16.5911 30.2561 16.5911C36.154 16.5911 36.154 7.05544 30.2561 7.05544Z"
                  fill="#1D5582"
                />
                <path
                  d="M21.1146 44.0735C15.3642 44.0735 15.3642 53.6091 21.1146 53.6091C27.0125 53.5937 27.0125 44.0735 21.1146 44.0735Z"
                  fill="#1D5582"
                />
                <path
                  d="M16.3964 26.3733C11.0883 26.3733 11.0883 35.1078 16.3964 35.1078C21.8519 35.1078 21.8519 26.3733 16.3964 26.3733Z"
                  fill="#1D5582"
                />
                <path
                  d="M66.8525 31.5031C66.7493 30.6404 66.0268 30.0088 65.2011 30.0704C65.1569 30.0704 65.1127 30.0704 65.0684 30.0704C62.9452 30.0704 60.9104 29.2386 59.3475 27.7443C58.9051 27.3283 58.2711 27.2051 57.7256 27.4516C56.4428 28.0216 55.0715 28.3143 53.6855 28.3143C47.9793 28.3143 43.3495 23.4925 43.3347 17.5308C43.3347 16.1752 43.5706 14.8504 44.0425 13.5871C44.2636 12.9864 44.1162 12.2931 43.6591 11.8618C42.2141 10.4599 41.4032 8.48812 41.4179 6.42386C41.4179 5.28389 41.6686 4.15933 42.1404 3.14261C42.509 2.35695 42.1846 1.40185 41.4327 1.01673C41.3294 0.970511 41.2262 0.924296 41.123 0.908891C38.6312 0.308099 36.0656 0 33.5 0C15.0249 0 0 15.6976 0 35C0 54.3024 15.0249 70 33.5 70C51.9751 70 67 54.3024 67 35C67 33.86 66.9558 32.6739 66.8525 31.5031ZM33.5 66.8266C16.7058 66.8266 3.03741 52.5462 3.03741 35C3.03741 17.4538 16.7058 3.17342 33.5 3.17342C35.2546 3.17342 37.0092 3.32747 38.7344 3.63556C37.8497 7.07086 38.6607 10.7372 40.8871 13.4177C38.7344 20.8121 42.7154 28.6378 49.7929 30.8869C52.4912 31.7496 55.3664 31.6879 58.0352 30.7482C59.7308 32.1193 61.7804 32.982 63.9183 33.1976C63.9478 33.8138 63.9626 34.4146 63.9626 35.0154C63.9626 52.5462 50.2942 66.8266 33.5 66.8266Z"
                  fill="#1D5582"
                />
              </svg>
              <div>
                <p>
                  DDD Invoices uses cookies to optimize the usage of our
                  website. These include cookies that are needed for the
                  functioning of the website, as well as cookies used
                  exclusively for anonymised statistical purposes.
                </p>
                <a href="@privacy-policy-ddd" target="_blank">
                  Privacy policy
                </a>
              </div>
            </div>
            <div className={`flex mt-4 md:mt-0 ${classes.consentButtons}`}>
              <button
                onClick={onAcceptAllCookies}
                className={classes.primaryBtnBlue}
                style={{ minWidth: "125px" }}
              >
                Accept all cookies
              </button>
              <button
                onClick={onAcceptNecessaryCookies}
                className={classes.secondaryBtnBlue}
                style={{ minWidth: "125px" }}
              >
                Accept only necessary
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CookieConsent;
