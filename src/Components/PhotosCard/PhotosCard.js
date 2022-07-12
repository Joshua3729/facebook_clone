import React from "react";
import classes from "./PhotosCard.module.css";

const PhotosCard = () => {
  return (
    <div className={classes.PhotosCard}>
      <div className={classes.header_wrapper}>
        <h2>Intro</h2>
        <p className={classes.bio}>Nothing to see here</p>
      </div>
    </div>
  );
};

export default PhotosCard;
