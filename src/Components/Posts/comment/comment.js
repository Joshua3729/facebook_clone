import React from "react";
import classes from "./comment.module.css";

const Comment = (props) => {
  return (
    <div className={classes.comment_wrapper}>
      <div className={classes.user_profile}>
        <img src={props.user_profile} />
      </div>
      <div className={classes.comment_text_wrapper}>
        <div className={classes.comment_text}>
          <div className={classes.user_name}>{props.user_name}</div>
          <div className={classes.user_comment}>{props.comment}</div>
        </div>
        <div className={classes.comment_toolbar}>
          <button className={classes.comment_toolbar_btn}>Like</button>
          <button className={classes.comment_toolbar_btn}>Reply</button>
          <div className={classes.time}>3d</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
