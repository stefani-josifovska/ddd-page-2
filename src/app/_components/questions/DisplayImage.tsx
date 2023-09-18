import React from "react";
import classes from "./Questions.module.scss";
import { questions } from "./content";
import Hint from "../UI/Hint";

const DisplayImage: React.FC<{ chosenQuestion: number }> = ({
  chosenQuestion,
}) => {
  return (
    <div className={`flex-1 ${classes.imgContainer}`}>
      <div
        style={{
          backgroundImage: `url(${questions[chosenQuestion].image.src})`,
        }}
        className="h-96 w-96"
      >
        {questions[chosenQuestion].hints.map((hint, index) => (
          <Hint key={`hint-${index}`} hint={hint} />
        ))}
      </div>
    </div>
  );
};

export default DisplayImage;
