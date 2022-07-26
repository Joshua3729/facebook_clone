import React from "react";
import classes from "./Logo.module.css";
import logo from "../../../Assets/Images/logo.svg";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const Logo = (props) => {
  // return <div className={classes.Logo}>B</div>;
  return (
    <img
      src={logo}
      alt="logo"
      className={classes.logo_svg}
      width={props.width}
      height={props.height}
    />
  );
};

export default Logo;
