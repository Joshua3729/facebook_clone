import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import kompela from "../../Assets/Videos/kompela.mp4";

const Posts = (props) => {
  let posts = null;
  if (props.posts)
    posts = props.posts.map((post) => {
      return (
        <Post
          user_name={post.fullname}
          time={"16h"}
          media={post.photo_url}
          caption={post.caption}
          profile_img={post.profile_img}
          userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
        />
      );
    });
  return <div className={classes.Posts}>{posts}</div>;
};

export default Posts;
