import React from "react";
import classes from "./Stories.module.css";
import Story from "./Story/Story";

const Stories = () => {
  return (
    <div className={classes.Stories}>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default Stories;
