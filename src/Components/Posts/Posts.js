import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import kompela from "../../Assets/Videos/kompela.mp4";
import * as Date from "../../Utils/Date";

const Posts = (props) => {
  let posts = null;
  if (props.posts)
    posts = props.posts.map((post) => {
      return (
        <Post
          user_name={post.fullname}
          time={Date.getTimeCreated(post.created_at)}
          media={post.photo_url}
          caption={post.caption}
          post_id={post.post_id}
          key={post.post_id}
          user_id={post.user_id}
          profile_img={post.profile_img}
          created_at={post.created_at}
        />
      );
    });
  return <div className={classes.Posts}>{posts}</div>;
};

export default Posts;
