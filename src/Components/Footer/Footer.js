import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      bookface &copy; {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
