import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Post.module.css";
import * as HomeActions from "../../../store/actionTypes/index";
import like_icon from "../../../Assets/Images/like.svg";
import { Link } from "react-router-dom";

const Post = (props) => {
  const token = useSelector((state) => state.auth.token);
  const user_id = useSelector((state) => state.auth.user_data.user_id);
  const [liked, setLiked] = useState(false);
  const [likes_data, getLikes_data] = useState(null);
  const [likeLoading, setLikeLoading] = useState(false);
  const profile_img = useSelector((state) => state.auth.user_data.profile_img);

  const dispatch = useDispatch();

  useEffect(() => {
    getLikesHandler();
  }, []);

  const postLike = () => {
    setLiked((prevLiked) => !prevLiked);
    setLikeLoading(true);
    fetch("http://localhost:5000/feed/post_like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        post_id: props.post_id,
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to create post.");
        }

        return res.json();
      })
      .then((resData) => {
        setLikeLoading(false);
        getLikesHandler();
        setLiked(resData.liked);
      })
      .catch((err) => console.log(err));
  };
  const getLikesHandler = () => {
    fetch(`http://localhost:5000/feed/get_likes/${props.post_id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch likes data.");
        }

        return res.json();
      })
      .then((resData) => {
        getLikes_data(resData);
      })
      .catch((err) => console.log(err));
  };

  let like_classes = likes_data
    ? [
        classes.like,
        (liked ||
          likes_data?.users_that_liked.some(
            (user) => user.user_id == user_id
          )) &&
          classes.liked,
      ].join(" ")
    : classes.like;

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
          <div className={classes.user_name}>
            <Link
              to={`/${props.user_name.split(" ").join(".")}.${props.user_id}`}
            >
              {props.user_name}
            </Link>
          </div>
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
      {likes_data && likes_data.likes > 0 && (
        <div className={classes.likes_wrapper}>
          <div className={classes.likes_inner_wrapper}>
            <img src={like_icon} alt="" className={classes.like_icon} />
            <div className={classes.numberOfLikes}>{likes_data?.likes}</div>
          </div>
          <div className={classes.people_who_liked}>
            <div className={classes.people_who_liked_header}>Likes</div>
            {likes_data.users_that_liked.map((user) => (
              <div className={classes.like_user_name} key={user.user_id}>
                {user.fullname}
              </div>
            ))}
          </div>
        </div>
      )}
      {props.text && <div className={classes.text_wrapper}>{props.text}</div>}
      <div className={classes.post_toolbar}>
        <div className={classes.inner_wrapper}>
          <button
            className={classes.like_btn}
            style={{
              color:
                liked ||
                likes_data?.users_that_liked.some(
                  (user) => user.user_id == user_id
                )
                  ? "#1b74e4"
                  : "#65676b",
            }}
            disabled={likeLoading}
            onClick={() => postLike()}
          >
            <i data-visualcompletion="css-img" className={like_classes}></i>{" "}
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
              <img src={profile_img} alt="" />
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
