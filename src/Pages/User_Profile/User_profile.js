import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IntroCard from "../../Components/IntroCard/IntroCard";
import PhotosCard from "../../Components/PhotosCard/PhotosCard";
import classes from "./User_profile.module.css";
import WhatsOnYourMind from "../../Components/Inputs/WhatsOnYourMind/WhatsOnYourMind";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../Components/Posts/Posts";
import { required } from "../../Utils/validators";
import add_friend from "../../Assets/Images/add_friend.png";
import Modal from "../../Components/Modal/Modal";
import AddProfile_Image from "../../Components/Inputs/AddProfile_Image/AddProfile_Image";
import * as HomeActions from "../../store/actionTypes/index";

const User_profile = () => {
  // const user_id = props.match?.params.user_id;
  const user_id = useParams().user_id.split(".");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const loggedIn_id = useSelector((state) => state.auth.user_data.user_id);
  console.log(user_id);
  const username = `${user_id[0]} ${user_id[1]}`;
  const [user_posts, setUser_posts] = useState(null);
  const [user_data, setUserData] = useState(null);
  const [show_imageUpload_modal, set_show_imageUpload_modal] = useState(false);
  const [friends, setFriends_status] = useState(true);
  const user_profile = useSelector((state) => state.auth.user_data.profile_img);
  const [imageFile, setImageFile] = useState({
    image: {
      value: "",
      valid: false,
      validators: [required],
    },
  });
  useEffect(() => {
    getUserData();
    getUser_posts();
  }, []);

  const set_show_imageUpload_modal_handler = (show) => {
    set_show_imageUpload_modal(show);
  };

  const uploadUserProfile = (profile_img) => {
    console.log(profile_img);
    const formData = new FormData();
    formData.append("image", profile_img);
    fetch("http://localhost:5000/feed/post_profile", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to create post.");
        }

        return res.json();
      })
      .then((resData) => {
        set_show_imageUpload_modal(false);
        dispatch(HomeActions.setCloseUploadAction());
        dispatch(HomeActions.onUpdateProfile(resData.profile_img));
      })
      .catch((err) => console.log(err));
  };

  const getUserData = () => {
    fetch(`http://localhost:5000/feed/get_user/${user_id[2]}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch posts.");
        }

        return res.json();
      })
      .then((resData) => {
        setUserData(resData.data[0]);
        console.log(resData.data);
      })
      .catch((err) => console.log(err));
  };
  const getUser_posts = () => {
    fetch(`http://localhost:5000/feed/get_user_posts/${user_id[2]}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch posts.");
        }

        return res.json();
      })
      .then((resData) => {
        setUser_posts(resData.data);
      })
      .catch((err) => console.log(err));
  };
  const friend_button = friends ? (
    <>
      <img
        className={classes.friends}
        src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/c9BbXR9AzI1.png?_nc_eui2=AeGSUajAFM2EC-zzkuCL-uduFsz17BrQ-k4WzPXsGtD6Tg-DUVQDyRyX2ecuHvzVNvHAdq9wUYI96qGfG47raCkn"
        alt=""
        height="20"
        width="20"
      />
      Friends
    </>
  ) : (
    <>
      <img
        className={classes.friends}
        src={add_friend}
        alt=""
        height="20"
        width="20"
      />
      Add Friend
    </>
  );
  const btns_wrapper =
    loggedIn_id == user_id[2] ? (
      <div className={classes.btns_wrapper}>
        <button className={classes.addToStory_btn}>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/tGGcWxvgxqp.png?_nc_eui2=AeEotps2m6auu1gFBWy8rJWc3gPhSYhXZifeA-FJiFdmJ3fl2SwApJ3T0SVvl4hY0yljiEi15Lm3OLgdYR3Dx0DV"
            alt="add icon"
          />{" "}
          Add to story
        </button>
        <button className={classes.editProfile_btn}>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/tmaz0VO75BB.png?_nc_eui2=AeHQ7hw5gwIZjOtXQN6xG67kPeqkNBZWYnQ96qQ0FlZidA4534_yfiFwkEg8ZRILr65APRJrrDKOi_xhGSsZ75g8"
            alt="edit icon"
          />
          Edit profile
        </button>
      </div>
    ) : (
      <div className={classes.btns_wrapper}>
        <button
          className={[
            classes.add_friend,
            friends ? classes.inactive_btn : classes.active_btn,
          ].join(" ")}
          disabled={friends}
        >
          {friend_button}
        </button>
        <button
          className={[
            classes.messanger,
            friends ? classes.active_btn : classes.inactive_btn,
          ].join(" ")}
          disabled={!friends}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={classes.message}
          >
            <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" />
          </svg>{" "}
          Message
        </button>
      </div>
    );

  return (
    <>
      <Modal show={show_imageUpload_modal}>
        <AddProfile_Image
          set_show_imageUpload_modal_handler={
            set_show_imageUpload_modal_handler
          }
          uploadUserProfile={uploadUserProfile}
        />
      </Modal>
      <div
        className={classes.User_profile}
        style={{
          overflow: show_imageUpload_modal ? "hidden" : "unset",
          height: show_imageUpload_modal ? "100vh" : "unset",
        }}
      >
        <div className={classes.header_bar}>
          <div className={classes.cover_wrapper}></div>
          <div className={classes.profile_wrapper}>
            <div className={classes.header_innerWrapper}>
              <div className={classes.userImg}>
                <img
                  src={
                    loggedIn_id == user_id[2]
                      ? user_profile
                      : user_data?.profile_img
                  }
                  alt=""
                />
                {user_id[2] == loggedIn_id && (
                  <div
                    className={classes.addImage_wrapper}
                    onClick={() => set_show_imageUpload_modal_handler(true)}
                  >
                    <i className={classes.addImage_icon}></i>
                  </div>
                )}
              </div>
              <div className={classes.userName}>{username}</div>
            </div>
            {btns_wrapper}
          </div>
          <div className={classes.nav_bar}>
            <ul className={classes.links_wrapper}>
              <li className={[classes.nav_item, classes.active].join(" ")}>
                Posts
              </li>
              <li className={classes.nav_item}>About</li>
              <li className={classes.nav_item}>Friends</li>
              <li className={classes.nav_item}>Photos</li>
              <li className={classes.nav_item}>Videos</li>
            </ul>
          </div>
        </div>
        <div className={classes.main_wrapper}>
          <div className={classes.main}>
            <div className={classes.left_wrapper}>
              <IntroCard />
              <PhotosCard />
            </div>
            <div className={classes.right_wrapper}>
              <WhatsOnYourMind />
              <Posts posts={user_posts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_profile;
