import React from "react";
import classes from "./IntroCard.module.css";

const IntroCard = () => {
  return (
    <div className={classes.IntroCard}>
      <div className={classes.header_wrapper}>
        <h2>Intro</h2>
        <p className={classes.bio}>Nothing to see here</p>
      </div>
    </div>
  );
};

export default IntroCard;
