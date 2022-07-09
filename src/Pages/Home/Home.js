import React from "react";
import WhatsOnYourMind from "../../Components/Inputs/WhatsOnYourMind/WhatsOnYourMind";
import Stories from "../../Components/Stories/Stories";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.gutter}></div>
      <div className={classes.Home_innerWrapper}>
        <div className={classes.main}>
          <Stories />
          <div className={classes.feed}>
            <WhatsOnYourMind />
          </div>
        </div>
        <div className={classes.taskbar}></div>
      </div>
    </div>
  );
};
export default Home;
