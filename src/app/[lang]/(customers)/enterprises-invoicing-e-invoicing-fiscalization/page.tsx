import React from "react";
import Hero from "@/app/_components/UI/Hero";
import { hero } from "./content";
import Grid from "@/app/_components/UI/Grid";
import Button from "@/app/_components/UI/Button";
import Prefooter from "@/app/_components/prefooter/Prefooter";
import { Metadata } from "next";
import QuestionsContainer from "@/app/_components/questions/QuestionsContainer";
import worldImg from "../../../_assets/world.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Global e-invoicing platform for enterprises",
  description:
    "All encompassing solutions for your global invoicing challenges. E-invoicing & fiscalization API & custom invoicing modules for your business.",
};

const Enterprises: React.FC<{}> = () => {
  return (
    <>
      <Hero content={hero} />
      <Grid>
        <div>
          <h3>How does it work?</h3>
          <h2>
            Book a call to find out more about the{" "}
            <b>solutions we can provide</b>
          </h2>
          <p>
            You will speak to our technical experts immediately, allowing you to
            solve your problems in the fastest way possible.
          </p>
          <p>
            Below, you can find a list of topics we can help you with. If you do
            not find a desired topic, you can still book a call to describe a
            problem you are facing and we will try to find a solution.
          </p>
          <Button
            content="Talk with an expert"
            variant="primary"
            color="orange"
            className="px-5"
          />
        </div>
        <div>
          {" "}
          <Image src={worldImg} alt="" className="m-auto" />
        </div>
      </Grid>
      <QuestionsContainer page="enterprise" />
      <Prefooter title="More about the DDD Invoices platform" />
    </>
  );
};

export default Enterprises;
