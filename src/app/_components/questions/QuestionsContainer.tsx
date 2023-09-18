"use client";
import React, { useState } from "react";
import { questions, features, questionsPricing, enterprise } from "./content";
import classes from "./Questions.module.scss";
import DisplayQuestions from "./DisplayQuestions";
import DisplayImage from "./DisplayImage";
import StickyTitle from "./StickyTitle";

const QuestionsContainer: React.FC<{ page: string }> = ({ page }) => {
  const [chosenQuestion, setChosenQuestion] = useState<number>(0);

  const onChangeIndexHandler = (newIndex: number) =>
    setChosenQuestion(newIndex);

  let content;

  switch (page) {
    case "homepage":
      content = questions;
      break;
    case "platform":
      content = features;
      break;
    case "enterprise":
      content = enterprise;
      break;
    default:
      content = questionsPricing;
  }

  return (
    <>
      {page === "pricing" && (
        <h2 className={`xl:hidden ${classes.subtitle}`}>Common questions:</h2>
      )}
      {page === "platform" && (
        <h2 className={`xl:hidden ${classes.subtitle}`}>
          Features of DDD Invoices:
        </h2>
      )}
      {page === "enterprise" && (
        <h2 className={`xl:hidden ${classes.subtitle}`}>
          We can help you with:
        </h2>
      )}
      <section className={`${classes.container} flex gap-x-8`}>
        {page === "homepage" && (
          <DisplayImage chosenQuestion={chosenQuestion} />
        )}
        {page === "platform" && (
          <StickyTitle>
            Features of
            <br />
            DDD Invoices:
          </StickyTitle>
        )}
        {page === "enterprise" && (
          <StickyTitle>
            We can help
            <br />
            you with:
          </StickyTitle>
        )}
        {page === "pricing" && <StickyTitle>Common questions:</StickyTitle>}
        <DisplayQuestions
          chosenIndex={chosenQuestion}
          onChooseQuestion={onChangeIndexHandler}
          content={content}
          page={page}
        />
      </section>
    </>
  );
};

export default QuestionsContainer;
