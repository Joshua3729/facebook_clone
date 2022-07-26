import React from "react";
import Logo from "../../Components/UI/Logo/Logo";
import classes from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <div className={classes.LoadingPage}>
      <div className={classes.Logo}>
        <Logo />
      </div>
    </div>
  );
};

export default LoadingPage;
