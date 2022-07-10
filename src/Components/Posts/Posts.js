import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className={classes.Posts}>
      <Post />
    </div>
  );
};

export default Posts;
