import React from "react";
import Logo from "../UI/Logo/Logo";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <Logo />
    </div>
  );
};

export default Navigation;
