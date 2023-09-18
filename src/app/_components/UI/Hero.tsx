import React from "react";
import classes from "./Hero.module.scss";
import { heroContentObj } from "@/app/globalTypes";
import ButtonLink from "./ButtonLink";
import CalendlyPopup from "../reusables/CalendlyPopup";

const Hero: React.FC<{ content: heroContentObj }> = ({ content }) => {
  return (
    <section className={classes.container}>
      <div className={classes.heroWrapper}>
        <div>
          <div>
            <h1 className="mb-10">{content.title}</h1>
            {content.text.map((item, index) => (
              <p key={`item-${index}`} className="pb-5">
                {item}
              </p>
            ))}
            <div className={`mt-8 ${classes.heroBtns}`}>
              {content.buttons.map((btn, index) => {
                if (btn.isCalendly) {
                  return (
                    <CalendlyPopup
                      key={`hero-btn-${index}`}
                      variant="secondary"
                      color="white"
                      className={btn.className}
                    />
                  );
                }
                return (
                  <ButtonLink
                    href={btn.href}
                    key={`hero-btn-${index}`}
                    content={btn.text}
                    variant={btn.variant}
                    color={btn.color}
                    textColor={
                      btn.variant === "secondary" ? "white" : undefined
                    }
                    className={`mr-4 ${btn.className}`}
                  />
                );
              })}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
