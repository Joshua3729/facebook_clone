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
      <ul className={classes.second_column}>
        <li className={classes.nav_item}>1</li>
        <li className={classes.nav_item}>2</li>
        <li className={classes.nav_item}>3</li>
        <li className={classes.nav_item}>4</li>
        <li className={classes.nav_item}>5</li>
      </ul>
      <ul className={classes.third_column}>
        <li className={classes.third_column_item}>6</li>
        <li className={classes.third_column_item}>7</li>
        <li className={classes.third_column_item}>8</li>
        <li className={classes.third_column_item}>9</li>
      </ul>
    </div>
  );
};

export default Navigation;
