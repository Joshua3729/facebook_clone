import React from "react";
import classes from "./Logo.module.css";
import logo from "../../../Assets/Images/logo.svg";

const Logo = () => {
  // return <div className={classes.Logo}>B</div>;
  return <img src={logo} alt="logo" className={classes.logo_svg} />;
};

export default Logo;
