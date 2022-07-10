import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.Post}>
      <div className={classes.post_header}>
        <div className={classes.profile_wrapper}>
          <img
            src="https://variety.com/wp-content/uploads/2021/09/Drake-publicity9-2021-e1631312720295.jpg?w=681&h=383&crop=1"
            alt="profile"
            className={classes.profile}
          />
        </div>

        <div className={classes.name_wrapper}>
          <div className={classes.user_name}>{props.user_name}</div>
          <div className={classes.time}>{props.time}</div>
        </div>
      </div>
      {props.media && (
        <div className={classes.image_wrapper}>
          <img src={props.media} alt="" />
        </div>
      )}
      <div className={classes.post_toolbar}>
        <div className={classes.inner_wrapper}>
          <button className={classes.like_btn}>
            <i data-visualcompletion="css-img" className={classes.like}></i>{" "}
            Like
          </button>
          <button className={classes.comment_btn}>
            <i data-visualcompletion="css-img" className={classes.comment}></i>
            Comment
          </button>
          <button className={classes.share_btn}>
            <i data-visualcompletion="css-img" className={classes.share}></i>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
