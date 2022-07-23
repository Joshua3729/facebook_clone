import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import kompela from "../../Assets/Videos/kompela.mp4";
import * as Date from "../Utils/Date";

const Posts = (props) => {
  let posts = null;
  if (props.posts)
    posts = props.posts.map((post) => {
      return (
        <Post
          user_name={post.fullname}
          time={Date.getTimeCreated(post.created_at)}
          // media={post.photo_url}
          caption={post.caption}
          video={"http://localhost:5000/feed/get_video"}
          profile_img={post.profile_img}
          created_at={post.created_at}
          userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
        />
      );
    });
  return <div className={classes.Posts}>{posts}</div>;
};

export default Posts;
