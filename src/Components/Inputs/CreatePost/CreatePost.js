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
      <form className={classes.CreatePost_form}>
        <div className={classes.user_wrapper}>
          <div className={classes.profile_wrapper}>
            <img src={props.profile_img} alt="" />
          </div>
          <div className={classes.right_wrapper}>
            <div className={classes.user_name}>{props.fullname}</div>
            <div className={classes.visibility_marker}>Public</div>
          </div>
        </div>
        <textarea
          className={classes.text_input}
          placeholder={`Whats on your mind?, ${props.fullname.split(" ")[0]}`}
          name="txtname"
          rows="4"
          cols="50"
          maxlength="2000"
        ></textarea>
      </form>
    </div>
  );
};

export default CreatePost;
