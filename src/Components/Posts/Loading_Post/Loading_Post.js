import React from "react";
import classes from "./Loading_Post.module.css";

const Loading_Post = () => {
  return (
    <div className={classes.Loading_Post}>
      <div className={classes.Loading_Post_Header}>
        <div className={classes.profile_wrapper}></div>
        <div className={classes.Loading_post_textWrapper}>
          <div className={classes.Loading_post_text_item}></div>
          <div className={classes.Loading_post_text_item}></div>
        </div>
      </div>
      <div className={classes.Loading_Post_footer}>
        <div className={classes.Loading_Post_footer_item}>
          <div className={classes.footer_item}></div>
        </div>
        <div className={classes.Loading_Post_footer_item}>
          <div className={classes.footer_item}></div>
        </div>
        <div className={classes.Loading_Post_footer_item}>
          <div className={classes.footer_item}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading_Post;
