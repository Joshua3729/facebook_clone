import React from "react";
import classes from "./CreatePost.module.css";

const CreatePost = (props) => {
  return (
    <div className={classes.CreatePost}>
      <div className={classes.CreatePost_header}>
        Create Post
        <div className={classes.close}>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/TdCEremeWv5.png"
            alt=""
          />
        </div>
      </div>
      <div className={classes.user_wrapper}>
        <div className={classes.profile_wrapper}>
          <img src={props.profile_img} alt="" />
        </div>
        <div className={classes.right_wrapper}>
          <div className={classes.user_name}>{props.fullname}</div>
          <div className={classes.visibility_marker}></div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
