import React from "react";
import classes from "./Post.module.css";

const Post = () => {
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
          <div className={classes.user_name}>Drake</div>
          <div className={classes.time}>16h</div>
        </div>
      </div>
      <div className={classes.image_wrapper}>
        <img
          src="https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/mb7jv2qtrxgfvf9jjcrk/drake-french"
          alt=""
        />
      </div>
      <div className={classes.post_toolbar}>
        <i data-visualcompletion="css-img" className={classes.like}></i>
        <i data-visualcompletion="css-img" class="hu5pjgll m6k467ps"></i>
        <i data-visualcompletion="css-img" class="hu5pjgll m6k467ps"></i>
      </div>
    </div>
  );
};

export default Post;
