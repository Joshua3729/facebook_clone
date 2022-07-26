import React from "react";
import Logo from "../../Components/UI/Logo/Logo";
import classes from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <div className={classes.LoadingPage}>
      <div className={classes.Logo}>
        <Logo width={90} height={90} />
        <div className={classes.loader_wrapper}>
          <div className={classes.loader}></div>
        </div>
        <div className={classes.please_wait}>please wait</div>
      </div>

      <div className={classes.company_wrapper}>
        <div className={classes.company_name}>BOOKFACE</div>
      </div>
    </div>
  );
};

export default LoadingPage;
