import React from "react";
import classes from "./LoadingSpinner_2.module.css";

const LoadingSpinner_2 = () => {
  return (
    <svg className={classes.loader} viewBox="0 0 24 24">
      <circle className={classes.loader__value} cx="12" cy="12" r="10" />
      <circle className={classes.loader__value} cx="12" cy="12" r="10" />
      <circle className={classes.loader__value} cx="12" cy="12" r="10" />
      <circle className={classes.loader__value} cx="12" cy="12" r="10" />
      <circle className={classes.loader__value} cx="12" cy="12" r="10" />
      <circle className={classes.loader__value} cx="12" cy="12" r="10" />
    </svg>
  );
};

export default LoadingSpinner_2;
