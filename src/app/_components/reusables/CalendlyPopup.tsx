"use client";
import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import Button from "../UI/Button";
import closeIcon from "../../_assets/closeIcon.svg";
import closeIconBlack from "../../_assets/closeIconBlack.svg";
import Image from "next/image";

const CalendlyPopup: React.FC<{
  className?: string;
  variant?: string;
  color?: string;
}> = ({ className, variant, color }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenHandler = () => setIsOpen(true);

  const onCloseHandler = () => setIsOpen(false);

  return (
    <>
      <Button
        content="Talk to us"
        variant={variant || "primary"}
        color="white"
        textColor={color || "orange"}
        className={`${className}`}
        onClick={onOpenHandler}
      />
      {isOpen && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-10/12 relative">
              <button
                onClick={onCloseHandler}
                className="hidden lg:block absolute right-12"
              >
                <Image src={closeIcon} alt="close" />
              </button>
              <button
                onClick={onCloseHandler}
                className="absolute lg:hidden left-12 top-4"
              >
                <Image src={closeIconBlack} alt="close" />
              </button>
              <InlineWidget url="https://calendly.com/ddd-invoices/45min" />
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default CalendlyPopup;
