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
          user_name={post.post_creator}
          time={"16h"}
          media={post.media_url}
          caption={post.post_caption}
          userImage={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU"
          }
        />
      );
    });
  return <div className={classes.Posts}>{posts}</div>;
};

export default Posts;
