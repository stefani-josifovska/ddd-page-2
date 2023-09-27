import React from "react";
import Grid from "../UI/Grid";
import TypingEffect from "./TypingEffect";
import ButtonLink from "../UI/ButtonLink";

const CodeExample: React.FC<{}> = () => {
  return (
    <Grid>
      <div>
        <TypingEffect />
      </div>
      <div>
        <h2 className="mb-10">Test for free, before committing</h2>
        <p>Test for free and switch to production when ready.</p>
        <p>
          Our integration is the same for all the countries for which you
          require invoicing. Developers love our thorough, well-documented APIs.
        </p>
        <p>See how easy it is:</p>
        <ButtonLink
          href="https://app.dddinvoices.com/documentation"
          content="Read the docs"
          variant="secondary"
          color="orange"
          className="px-10"
        />
      </div>
    </Grid>
  );
};

export default CodeExample;
