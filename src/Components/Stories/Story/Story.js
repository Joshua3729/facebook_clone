import React from "react";
import classes from "./Story.module.css";

const Story = (props) => {
  return (
    <div
      className={classes.Story}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), transparent) ,url( ${props.image})`,
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
        alt=""
        className={classes.profile}
      />
      <p className={classes.name}>Sive Wana</p>
    </div>
  );
};

export default Story;
