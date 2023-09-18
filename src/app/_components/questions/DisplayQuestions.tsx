import React from "react";
import classes from "./Questions.module.scss";
import Link from "next/link";
import { questionObjectType, featureObjectType } from "./content";
import Image from "next/image";
import arrowImg from "../../_assets/arrow.svg";

const DisplayQuestions: React.FC<{
  chosenIndex: number;
  onChooseQuestion: (index: number) => void;
  content: questionObjectType[] | featureObjectType[];
  page: string;
}> = ({ chosenIndex, onChooseQuestion, content, page }) => {
  return (
    <div className={`flex-1 ${classes.questDiv}`}>
      {content.map((question, index) => (
        <div
          key={`question-${index}`}
          onClick={() => onChooseQuestion(index)}
          className="pb-2 pt-4"
        >
          <div className="relative hover:cursor-pointer hover:opacity-80">
            <h3>{question.title}</h3>
            <p className={classes.questSubtitle}>{question.subtitle}</p>
            {question.answer && (
              <Image
                src={arrowImg}
                alt=""
                className={`absolute right-0 bottom-4 ${
                  index === chosenIndex ? classes.arrow : ""
                }`}
              />
            )}
          </div>
          {question.answer && (
            <p
              className={`${classes.answer} ${
                index === chosenIndex ? classes.dispAnswer : classes.hideAnswer
              }`}
            >
              {question.answer}
            </p>
          )}
        </div>
      ))}
      {page === "homepage" && (
        <div className={classes.linkCont}>
          <Link href={"/platform-e-invoicing-invoicing-fiscalization-api"}>
            Read more about all the features &gt;
          </Link>
        </div>
      )}
    </div>
  );
};

export default DisplayQuestions;
