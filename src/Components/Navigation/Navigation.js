import React from "react";
import Logo from "../UI/Logo/Logo";
import classes from "./Navigation.module.css";
import search from "../../Assets/Images/search.png";

const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <div className={classes.first_column}>
        <Logo />
        <button className={classes.search_btn}>
          <img src={search} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
