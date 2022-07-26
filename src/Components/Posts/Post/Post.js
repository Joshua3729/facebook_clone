import React, { useState } from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  const [liked, setLiked] = useState(false);

  const setLikedHandler = () => {
    setLiked(!liked);
  };
  return (
    <div className={classes.Post}>
      <div className={classes.post_header}>
        <div className={classes.profile_wrapper}>
          <img
            src={props.profile_img}
            alt="profile"
            className={classes.profile}
          />
        </div>

        <div className={classes.name_wrapper}>
          <div className={classes.user_name}>{props.user_name}</div>
          <div className={classes.time}>{props.time}</div>
        </div>
      </div>
      {props.caption && (
        <div className={classes.caption_wrapper}>{props.caption}</div>
      )}
      {props.media && (
        <div className={classes.image_wrapper}>
          <img src={props.media} alt="" />
        </div>
      )}
      {props.video && (
        <div className={classes.video_wrapper}>
          <video autoplay="true" loop="" controls="true">
            <source type="video/mp4" src={props.video} />
          </video>
        </div>
      )}
      {props.text && <div className={classes.text_wrapper}>{props.text}</div>}
      <div className={classes.post_toolbar}>
        <div className={classes.inner_wrapper}>
          <button
            className={classes.like_btn}
            onClick={() => setLikedHandler()}
            style={{ color: liked ? "#1b74e4" : "#65676b" }}
          >
            <i
              data-visualcompletion="css-img"
              className={[classes.like, liked && classes.liked].join(" ")}
            ></i>{" "}
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
      <div className={classes.comment_wrapper}>
        <div className={classes.comment_innerWrapper}>
          <div className={classes.outer_wrapper}>
            <div className={classes.userProfile_wrapper}>
              <img src={props.userImg} alt="" />
            </div>
            <div className={classes.online}></div>
          </div>

          <input
            type="text"
            className={classes.comment_input}
            placeholder="Write a comment"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
